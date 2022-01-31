import { successResponse } from './../../helpers/methods';
import { NextFunction, Request, Response } from "express";
import { accountService, signinService, signupService } from './auth.service'
import { StatusCodes } from 'http-status-codes';
import { ErrorUserNotFound } from '../../lib/Errors';

// signup
export const signup = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    // get data from body
    const { email, password, username, name } = req.body

    try {
        // get data
        const data = await signupService({
            email,
            password,
            username,
            name
        })

        res.status(StatusCodes.CREATED)
            .send(successResponse({ data }))
    } catch (error) {
        next(error)
    }
}

// signin 
export const signin = async (req: Request, res: Response, next: NextFunction) => {
    // get data from body
    const { username, password } = req.body

    try {
        // get data
        const data = await signinService({
            username,
            password
        })

        //responding to client request with user profile success message and  access token .
        res.status(StatusCodes.OK)
            .send(successResponse({ data }));
    } catch (error) {
        next(error)
    }
}

// get account data
export const account = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        if (!req?.user) throw new ErrorUserNotFound()

        const account = await accountService(req.user?.id)

        res.send(successResponse({ data: account }))
    } catch (error) {
        next(error)
    }
}