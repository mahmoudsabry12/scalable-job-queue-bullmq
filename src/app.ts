import express from 'express'
import  emailRoute from './api/email.route'
export const app = express()
import { bullBoardRouter } from './config/bullBoard'

app.use(express.json())
app.use('/admin/queues', bullBoardRouter)
app.use('/api',  emailRoute)
app.use('/', async (req, res) => {
    res.json({ message: 'Welcome to the Scalable Job Queue API' })
})