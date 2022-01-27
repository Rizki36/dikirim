import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";

const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

// define prisma client
const prisma = new PrismaClient()

// signup
export const signup = async (req: Request, res: Response): Promise<any> => {
    const { email, password, username, name } = req.body
    try {
        console.log('first');
        const user = await prisma.user.create({
            data: {
                email,
                password: bcrypt.hashSync(password, 8),
                username,
                name
            }
        })

        res.send(user)
    } catch (error) {
        console.log(error);
    }
}

// signup
export const signin = async (req: Request, res: Response) => {
    // get data from body
    const { username, password } = req.body

    // get first user based on username
    const user = await prisma.user.findFirst({
        where: {
            username
        }
    })

    // if not exist 
    if (!user) return res.send({}) // TODO : make helper resource not found

    //comparing passwords
    var passwordIsValid = bcrypt.compareSync(
        password,
        user.password
    );

    // checking if password was valid and send response accordingly
    if (!passwordIsValid) {
        return res.status(401)
            .send({
                msg: "Invalid Password!",
                errors: {}
            });
    }

    //signing token with user id
    var token = jwt.sign({
        id: user.id
    }, process.env.API_SECRET, {
        expiresIn: 86400
    });

    //responding to client request with user profile success message and  access token .
    res.status(200)
        .send({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
            accessToken: token,
        });
}

// get account data
export const account = async (req: Request, res: Response): Promise<any> => {
    const user = await prisma.user.findFirst({
        where: {
            id: req.user?.id
        }
    })

    res.send(user)
}