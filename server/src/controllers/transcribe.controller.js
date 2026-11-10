import { transcribeBodySchema } from '../validators/transcribe.validator.js'

export function transcribe(req, res) {
  const { language } = transcribeBodySchema.parse(req.body ?? {})

  // TEMPORARY: upload validation only. No speech-to-text happens here yet.
  res.json({
    mode: 'upload-check-only',
    sttConnected: false,
    message: 'Audio received and validated. Speech-to-text is not connected yet.',
    audio: { mimeType: req.file.mimetype, sizeBytes: req.file.size },
    language,
  })
}