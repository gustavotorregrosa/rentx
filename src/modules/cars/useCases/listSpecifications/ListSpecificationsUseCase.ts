import { Specification } from "../../entities/Specification"
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"

class ListSpecificationsUseCase {
    constructor(private specificationRepositories: ISpecificationsRepository){}

    async execute(): Promise<Specification[]>{
        const specifications = await this.specificationRepositories.list()
        return specifications
    }
}

export { ListSpecificationsUseCase }