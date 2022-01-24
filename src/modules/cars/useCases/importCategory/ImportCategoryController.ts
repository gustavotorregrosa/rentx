import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { container } from 'tsyringe'

class ImportCategoryController {

    async handle(req: Request, resp: Response): Promise<Response> {
        const { file } = req
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase)
        await importCategoryUseCase.execute(file)
        return resp.send()
    }
}

export { ImportCategoryController }