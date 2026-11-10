import { Router } from 'express'
import { uploadAudio, requireAudioFile } from '../middleware/upload.js'
import { transcribe } from '../controllers/transcribe.controller.js'

const router = Router()

router.post('/', uploadAudio, requireAudioFile, transcribe)

export default router