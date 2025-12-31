import type { Example } from "../../../domain/entities/Example.js";
import type { ExampleDBRepository } from "../../../domain/repositories/example.db.js";
import type { CreateExampleServiceDto } from "../../types/example.dtos.js";
import type { CreateExampleService } from "../../types/example.types.js";

    

export function createExampleServiceFactory (exampleRepository: ExampleDBRepository):CreateExampleService{

    return async (data: CreateExampleServiceDto ):Promise<Example > =>{
        //logic application
        try {
            const result = await exampleRepository.create(data ) // or dataExample
            return result

        } catch (error) {
            throw new Error("error")
        }
    }
}
