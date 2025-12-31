import type {Request, Response, nextFunction} from 'express'
import { createExampleServiceFactory } from '../../application/services/example/create.js'
import { ExamplePostgressRepositoryFactory } from '../../adapters/repositories/example/postgres.js'
import { createExampleControllerFactory } from '../../adapters/http/example/create.js'


// repository
const repositoryAssembly = ExamplePostgressRepositoryFactory()

//services & controllers
const createExampleService = createExampleServiceFactory(repositoryAssembly)
const createExample = createExampleControllerFactory(createExampleService)


export default {
    createExample
}