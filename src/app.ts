import express from 'express'
import  emailRoute from './api/email.route'
export const app = express()

app.use(express.json())
app.use('/api',  emailRoute)
app.use('/', async (req, res) => {
    res.json({ message: 'Welcome to the Scalable Job Queue API' })
})