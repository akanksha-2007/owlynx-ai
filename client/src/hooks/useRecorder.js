import { useCallback, useEffect, useRef, useState } from 'react'

export const MAX_RECORDING_SECONDS = 180

// Order of preference. All of these are accepted by the server's upload check.
const PREFERRED_TYPES = [
  'audio/webm;codecs=opus',
  'audio/webm',
  'audio/ogg;codecs=opus',
  'audio/mp4',
]

function pickMimeType() {
  return PREFERRED_TYPES.find((type) => MediaRecorder.isTypeSupported(type)) ?? ''
}

function describeError(err) {
  switch (err?.name) {
    case 'NotAllowedError':
    case 'PermissionDeniedError':
      return {
        code: 'PERMISSION_DENIED',
        message:
          'Microphone access is blocked. Click the lock icon in the address bar, allow the microphone, then try again.',
      }
    case 'NotFoundError':
    case 'DevicesNotFoundError':
      return {
        code: 'NO_MICROPHONE',
        message: 'No microphone was found. Connect one and try again.',
      }
    case 'NotReadableError':
    case 'TrackStartError':
      return {
        code: 'MIC_IN_USE',
        message: 'Your microphone is being used by another app. Close it and try again.',
      }
    case 'SecurityError':
      return {
        code: 'INSECURE_CONTEXT',
        message: 'Microphone access needs a secure page (HTTPS or localhost).',
      }
    default:
      return {
        code: 'RECORDING_FAILED',
        message: 'Could not start recording. Please try again.',
      }
  }
}

export function useRecorder() {
  const [status, setStatus] = useState('idle') // idle | requesting | recording | stopped
  const [seconds, setSeconds] = useState(0)
  const [audio, setAudio] = useState(null) // { blob, url, mimeType }
  const [error, setError] = useState(null) // { code, message }

  const recorderRef = useRef(null)
  const streamRef = useRef(null)
  const chunksRef = useRef([])
  const timerRef = useRef(null)
  const urlRef = useRef(null)

  const releaseUrl = useCallback(() => {
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current)
      urlRef.current = null
    }
  }, [])

  const stopStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
  }, [])

  const start = useCallback(async () => {
    setError(null)

    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setError({
        code: 'UNSUPPORTED',
        message: 'This browser cannot record audio. Please use a recent Chrome, Edge or Firefox.',
      })
      return
    }

    releaseUrl()
    setAudio(null)
    setSeconds(0)
    setStatus('requesting')

    let stream
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch (err) {
      setError(describeError(err))
      setStatus('idle')
      return
    }

    let recorder
    try {
      const mimeType = pickMimeType()
      recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined)
    } catch (err) {
      stream.getTracks().forEach((track) => track.stop())
      setError(describeError(err))
      setStatus('idle')
      return
    }

    streamRef.current = stream
    recorderRef.current = recorder
    chunksRef.current = []

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunksRef.current.push(event.data)
    }

    recorder.onerror = () => {
      clearInterval(timerRef.current)
      stopStream()
      setError({ code: 'RECORDING_FAILED', message: 'Recording failed. Please try again.' })
      setStatus('idle')
    }

    recorder.onstop = () => {
      clearInterval(timerRef.current)
      stopStream()

      const mimeType = recorder.mimeType || 'audio/webm'
      const blob = new Blob(chunksRef.current, { type: mimeType })

      if (blob.size === 0) {
        setError({ code: 'EMPTY_RECORDING', message: 'Nothing was recorded. Please try again.' })
        setStatus('idle')
        return
      }

      const url = URL.createObjectURL(blob)
      urlRef.current = url
      setAudio({ blob, url, mimeType })
      setStatus('stopped')
    }

    recorder.start()
    setStatus('recording')
    timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000)
  }, [releaseUrl, stopStream])

  const stop = useCallback(() => {
    const recorder = recorderRef.current
    if (recorder && recorder.state === 'recording') recorder.stop()
  }, [])

  const reset = useCallback(() => {
    releaseUrl()
    setAudio(null)
    setSeconds(0)
    setError(null)
    setStatus('idle')
  }, [releaseUrl])

  // Auto-stop at the maximum length.
  useEffect(() => {
    if (status === 'recording' && seconds >= MAX_RECORDING_SECONDS) stop()
  }, [seconds, status, stop])

  // Clean up if the user leaves the page mid-recording.
  useEffect(
    () => () => {
      clearInterval(timerRef.current)
      const recorder = recorderRef.current
      if (recorder && recorder.state !== 'inactive') {
        recorder.onstop = null
        recorder.stop()
      }
      streamRef.current?.getTracks().forEach((track) => track.stop())
      if (urlRef.current) URL.revokeObjectURL(urlRef.current)
    },
    [],
  )

  return { status, seconds, audio, error, start, stop, reset }
}