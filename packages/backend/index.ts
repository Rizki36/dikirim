require('dotenv').config()
import errorMiddleware from './middlewares/error.middleware'
import accessLogMiddleware from './middlewares/logger.middleware'

import express from 'express'
import { cors } from 'cors-ts'
import { api } from './routes/api'

const app = express()
app.use(cors())
app.use(express.json())

// Req and Res logger
// app.use(accessLogMiddleware)

api(app)

// Error Handler Middleware
app.use(errorMiddleware)

export default app