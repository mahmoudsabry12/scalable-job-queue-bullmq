import { Worker } from 'bullmq'
import { redis } from '../config/redis'
import { processEmailJob } from '../jobs/email.job'

export const emailWorker = new Worker(
  'email-queue',
  async job => {
    if (job.name === 'sendEmail') {
      await processEmailJob(job.data)
    }
  },
  {
    connection: redis,
    concurrency: 5, 
  }
)

console.log(' Email Worker running...')