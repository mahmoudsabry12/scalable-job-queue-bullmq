import express from 'express'

export const app = express()

app.use(express.json())
app.use('/api', async (req, res) => {
    res.json({ message: 'Welcome to the Scalable Job Queue API' })
})