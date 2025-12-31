import type { ExampleDBRepository } from "../../../domain/repositories/example.db.js"
import type { UpdateExampleServiceDto } from "../../types/example.dtos.js"
import type { UpdateExampleService } from "../../types/example.types.js"


export function updateExampleServiceFactory (exampleRepository: ExampleDBRepository):UpdateExampleService{

    return async (data: UpdateExampleServiceDto) => {
            return data
        } 
}