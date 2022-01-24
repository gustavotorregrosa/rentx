import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCatregoryUseCase";
import { container } from 'tsyringe'

class CreateCategoryController {

    async handle(req: Request, resp: Response): Promise<Response>{
        const {name, description} = req.body
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
        await createCategoryUseCase.execute({name, description})
        return resp.status(201).send()
    }

}

export { CreateCategoryController }