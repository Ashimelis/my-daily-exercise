import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/auth, authRouter')
app = listen()
app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})