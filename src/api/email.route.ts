import { Router } from 'express'
import { emailQueue } from '../queues/email.queue'

const router = Router()

router.post('/send-email', async (req, res) => {
  const { email, message } = req.body
  console.log(" Adding job to queue...");
  await emailQueue.add(
    'sendEmail',
    { email, message },
    {
      attempts: 3, 
      backoff: {
        type: 'exponential',
        delay: 1000,
      },
    }
  )

  res.json({
    success: true,
    message: 'Job added to queue',
  })
})

export default router