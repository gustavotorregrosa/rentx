import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController{

    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase){}

    handle(req: Request, resp: Response): Response{
        const all = this.listSpecificationsUseCase.execute()
        return resp.json(all)
    }

}

export {ListSpecificationsController}