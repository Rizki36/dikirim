import { PrismaClient } from '@prisma/client';

const bcrypt = require('bcrypt')

// define prisma client
const prisma = new PrismaClient()

// signup Params
interface SignupParams {
    email: string,
    password: string
    username: string,
    name: string
}


// signup service
export const signupService = async (props: SignupParams) => {

    // extract data
    const { email, password, username, name } = props

    // get user
    const user = await prisma.user.create({
        data: {
            email,
            password: bcrypt.hashSync(password, 8),
            username,
            name
        }
    })

    return user;
}