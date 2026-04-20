import { Worker } from 'bullmq'
import { redis } from '../config/redis'
import { processEmailJob } from '../jobs/email.job'
import dotenv from "dotenv";
import { connectDB } from '../config/db'

dotenv.config();
connectDB()

export const emailWorker = new Worker(
  'email-queue',
  async job => {
        console.log(" GOT JOB:", job.data);
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