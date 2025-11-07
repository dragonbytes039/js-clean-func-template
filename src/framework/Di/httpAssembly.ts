import type {Request, Response, nextFunction} from 'express'
import { createExampleServiceFactory } from '../../application/services/example/create.js'
import { createExampleControllerFactory } from '../../adapters/http/controllers/example/create.js'
import { ExamplePostgressRepositoryFactory } from '../../adapters/repositories/example/postgres.js'


// repository
const repositoryAssembly = ExamplePostgressRepositoryFactory()


export function CreateExampleControllerBuild(req:Request, res:Response, next:nextFunction){

    const useCase = createExampleServiceFactory(repositoryAssembly)
    const controller = createExampleControllerFactory(useCase)

    return controller(req,res,next)
}