import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {

    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository){}

    async execute(data: ICreateUserDTO): Promise<void>{
        const passwordHash = await hash(data.password, 8)

        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new AppError('User alredy exists')
        }

        const newData = {
            ...data,
            password: passwordHash
        }

        await this.usersRepository.create(newData)
    }

}

export { CreateUserUseCase }