import type { ExampleDBRepository } from "../../../domain/repositories/example.db.js"
import type { DeleteExampleServiceDto } from "../../types/example.dtos.js"
import type { DeleteExampleService } from "../../types/example.types.js"

 
 export function deleteExampleServiceFactory (exampleRepository: ExampleDBRepository):DeleteExampleService{
 
     return async (ExampleId: DeleteExampleServiceDto) =>{
        return false
    } 
 }
 
    