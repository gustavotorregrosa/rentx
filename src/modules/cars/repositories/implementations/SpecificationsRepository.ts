import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateInterfaceDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository{

    private repository: Repository<Specification>

    constructor(){
        this.repository = getRepository(Specification)
    }

    async list(): Promise<Specification[]> {
        return await this.repository.find()
    }
    
    async findByName(name: string): Promise<Specification> {
        return await this.repository.findOne({name})
    }

    async create({ name, description }: ICreateInterfaceDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description
        })
        await this.repository.save(specification)
    }


}

export { SpecificationsRepository }