import type { ErrorRequestHandler } from 'express'
import * as methods from '../helpers/methods'
import * as SimpleLogger from 'simple-node-logger'

const errorLog = SimpleLogger.createSimpleLogger({
    logFilePath: './log/error/' + (new Date().toLocaleDateString().split('/').join('-')) + '.log',
    timestampFormat: 'YYYY-MM-DD HH:mm:ss'
});
/**
 *
 * @param error
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
const errorMiddleware: ErrorRequestHandler = (error, req, res, next): Record<string, any> => {
    errorLog.error(error.message)
    return res.status(Number(process.env.EXCEPTION_CODE)).send(methods.failResponse(error.message))
}

export default errorMiddleware
