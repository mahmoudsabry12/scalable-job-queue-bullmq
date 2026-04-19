import dotenv from 'dotenv'
import { app } from './app'
import { connectDB } from './config/db'

dotenv.config()

const start = async () => {
  await connectDB()

  app.listen(process.env.PORT || '5000', () => {
    console.log('Server running on port 5000')
  })
}

start()