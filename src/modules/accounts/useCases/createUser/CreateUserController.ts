import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController{
    async handle(req: Request, resp: Response): Promise<Response>{
        const params = req.body
        const createUserUseCase = container.resolve(CreateUserUseCase)
        await createUserUseCase.execute(params)
        return resp.status(201).send()
    }

}

export { CreateUserController }