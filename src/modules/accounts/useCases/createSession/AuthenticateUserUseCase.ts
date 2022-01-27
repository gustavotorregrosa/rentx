import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import {compare} from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { AppError } from "../../../../errors/AppError";

interface IRequest {
    email: string
    password: string
}

interface IResponse {
    user: {
        name: string
        email: string
    },
    token: string

}

@injectable()
class AuthenticateUserUseCase {
    constructor(@inject("UsersRepository") private usersRepository: IUsersRepository){}
    async execute({email, password}: IRequest): Promise<IResponse>{
        // Usuario existe
        const user = await this.usersRepository.findByEmail(email)
        if(!user){
            throw new AppError('Email or password incorrect')
        }

        // senha esta correta
        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            throw new AppError('Email or password incorrect')
        }
 
        // gerar jwt
        const token = sign({}, '240fee48cfdd0ec9ac6b6876bdef1d4f', {
            subject: user.id,
            expiresIn: '1d'
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn

    }
}

export {AuthenticateUserUseCase}