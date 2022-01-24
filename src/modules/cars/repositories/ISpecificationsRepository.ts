import { Specification } from "../entities/Specification";

interface ISpecificationsRepository{
    findByName(name: string): Promise<Specification>
    list(): Promise<Specification[]>
    create({name, description}: ICreateInterfaceDTO): Promise<void>
}

interface ICreateInterfaceDTO {
    name: string
    description: string
}


export {ISpecificationsRepository, ICreateInterfaceDTO}