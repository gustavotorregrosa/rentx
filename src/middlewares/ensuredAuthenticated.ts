import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

export async function ensuredAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization
    if(!authHeader){
        throw new Error('Token missing')
    }
    const [_, token] = authHeader.split(' ')
    // console.log('teste 123')
    // console.log({authHeader})
    // console.log({token})
   

    try {
        const decoded = verify(token, '240fee48cfdd0ec9ac6b6876bdef1d4f')
        console.log({decoded})
        next()
    } catch{
        throw new Error('Invalid token')
    }
    
}