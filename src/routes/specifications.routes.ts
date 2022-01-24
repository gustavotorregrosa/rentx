import { Request, Response, Router } from "express";
import { ensuredAuthenticated } from "../middlewares/ensuredAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import listSpecificationController from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router()
const createSpecificationController = new CreateSpecificationController()

specificationRoutes.use(ensuredAuthenticated)
specificationRoutes.post('/', createSpecificationController.handle)

// specificationRoutes.get('/', (req: Request, resp: Response) => {
//     return listSpecificationController().handle(req, resp)
// })

export { specificationRoutes }