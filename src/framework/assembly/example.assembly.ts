import type {Request, Response, nextFunction} from 'express'
import { createExampleServiceFactory } from '../../application/services/example/create.js'
import { ExamplePostgressRepositoryFactory } from '../../adapters/repositories/example/postgres.js'
import { createExampleControllerFactory } from '../../adapters/http/example/create.js'


// repository
const repositoryAssembly = ExamplePostgressRepositoryFactory()

const createExampleService = createExampleServiceFactory(repositoryAssembly)
export const createExampleControllerBuild = createExampleControllerFactory(createExampleService)
