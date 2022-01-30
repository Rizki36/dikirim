import { User } from "@prisma/client";

export interface Errors {
    msg: string,
    errors?: { [key: string]: string }
}

export interface UserLogin implements Omit<User, "password"> {
}