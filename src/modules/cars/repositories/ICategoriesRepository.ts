import { Category } from "../entities/Category";

interface ICategoriesRepository{
    findByName(name: string): Promise<Category>
    list(): Promise<Category[]>
    create({name, description}: ICreateInterfaceDTO): Promise<void>
}

interface ICreateInterfaceDTO {
    name: string
    description: string
}


export {ICategoriesRepository, ICreateInterfaceDTO}