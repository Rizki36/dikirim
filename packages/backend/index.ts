require('dotenv').config()
import errorMiddleware from './middlewares/error.middleware'

import express from 'express'
import { cors } from 'cors-ts'
import { api } from './routes/api'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

api(app)

// Error Handler Middleware
app.use(errorMiddleware)

export default app