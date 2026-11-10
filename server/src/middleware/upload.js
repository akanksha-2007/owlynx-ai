import multer from 'multer'
import { env } from '../config/env.js'
import { ApiError } from './errorHandler.js'

const ALLOWED_MIME_TYPES = new Set([
  'audio/webm',
  'audio/ogg',
  'audio/wav',
  'audio/x-wav',
  'audio/mp4',
  'audio/mpeg',
  'audio/mp3',
])

// "audio/webm;codecs=opus" -> "audio/webm"
const baseMime = (mime = '') => mime.split(';')[0].trim().toLowerCase()

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: env.maxAudioBytes, files: 1 },
  fileFilter(req, file, cb) {
    if (ALLOWED_MIME_TYPES.has(baseMime(file.mimetype))) return cb(null, true)
    cb(
      new ApiError(415, `Unsupported audio type: ${file.mimetype}`, 'UNSUPPORTED_AUDIO_TYPE'),
    )
  },
})

export const uploadAudio = upload.single('audio')

// Declared MIME types can be faked, so also check the file's first bytes.
function looksLikeAudio(buf) {
  if (buf.length < 12) return false
  const text = (start, length) => buf.toString('latin1', start, start + length)

  const webm = buf[0] === 0x1a && buf[1] === 0x45 && buf[2] === 0xdf && buf[3] === 0xa3
  const ogg = text(0, 4) === 'OggS'
  const wav = text(0, 4) === 'RIFF' && text(8, 4) === 'WAVE'
  const mp4 = text(4, 4) === 'ftyp'
  const mp3 = text(0, 3) === 'ID3' || (buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0)

  return webm || ogg || wav || mp4 || mp3
}

export function requireAudioFile(req, res, next) {
  if (!req.file) {
    return next(
      new ApiError(400, 'No audio file received. Send it in a field named "audio".', 'AUDIO_MISSING'),
    )
  }
  if (req.file.size === 0) {
    return next(new ApiError(400, 'Audio file is empty.', 'AUDIO_EMPTY'))
  }
  if (!looksLikeAudio(req.file.buffer)) {
    return next(
      new ApiError(415, 'File content does not look like valid audio.', 'INVALID_AUDIO_CONTENT'),
    )
  }
  next()
}