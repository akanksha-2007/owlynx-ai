import { AlertCircle, Loader2, Mic, RotateCcw, Square } from 'lucide-react'
import { MAX_RECORDING_SECONDS, useRecorder } from '../../hooks/useRecorder.js'
import { formatTime } from '../../utils/formatTime.js'
import VoiceVisualizer from './VoiceVisualizer.jsx'

const buttonBase =
  'inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300 disabled:cursor-not-allowed disabled:opacity-60'

const STATUS_TEXT = {
  idle: 'Ready to record',
  requesting: 'Waiting for microphone permission…',
  recording: 'Recording…',
  stopped: 'Recording finished',
}

export default function Recorder() {
  const { status, seconds, audio, error, start, stop, reset } = useRecorder()

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <VoiceVisualizer active={status === 'recording'} />

      <div className="mt-4 text-center">
        <p className="font-mono text-3xl font-semibold tabular-nums">
          {formatTime(seconds)}
          <span className="text-base text-slate-500"> / {formatTime(MAX_RECORDING_SECONDS)}</span>
        </p>
        <p aria-live="polite" className="mt-1 text-sm text-slate-400">
          {STATUS_TEXT[status]}
        </p>
      </div>

      {error && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p>{error.message}</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {(status === 'idle' || status === 'requesting') && (
          <button
            type="button"
            onClick={start}
            disabled={status === 'requesting'}
            className={`${buttonBase} bg-indigo-500 hover:bg-indigo-400`}
          >
            {status === 'requesting' ? (
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            ) : (
              <Mic size={18} aria-hidden="true" />
            )}
            {status === 'requesting' ? 'Requesting…' : 'Start recording'}
          </button>
        )}

        {status === 'recording' && (
          <button type="button" onClick={stop} className={`${buttonBase} bg-red-500 hover:bg-red-400`}>
            <Square size={18} aria-hidden="true" />
            Stop recording
          </button>
        )}

        {status === 'stopped' && (
          <button
            type="button"
            onClick={reset}
            className={`${buttonBase} border border-white/20 bg-white/5 hover:bg-white/10`}
          >
            <RotateCcw size={18} aria-hidden="true" />
            Record again
          </button>
        )}
      </div>

      {status === 'stopped' && audio && (
        <div className="mt-6">
          <audio controls src={audio.url} className="w-full" />
          <p className="mt-2 text-center text-xs text-slate-500">
            {audio.mimeType} · {(audio.blob.size / 1024).toFixed(1)} KB
          </p>
        </div>
      )}
    </div>
  )
}