import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { unauthorizedResponse } from "../helpers/methods";

const jwt = require("jsonwebtoken");

const prisma = new PrismaClient()

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, function (err: any, decode: any) {
      console.log('dec', decode);
      prisma.user.findFirst({
        where: {
          id: decode.id
        }
      }).then(user => {
        if (!user) return res.status(401).send(unauthorizedResponse);
        req.user = user;
        next();
      }).catch(err => {
        res.status(401).send(unauthorizedResponse);
      })
    })
  } else {
    res.status(401).send(unauthorizedResponse);
  }
}

export default verifyToken