import type { Example } from "../../../domain/entities/Example.js"
import type { CreateExampleServiceDto, DeleteExampleServiceDto, UpdateExampleServiceDto } from "./dtos.js"


export type CreateExampleService = ( data:CreateExampleServiceDto )=>Promise<Example>

export type UpdateExampleService = (data: UpdateExampleServiceDto)=>Promise<Example>

export type DeleteExampleService = (ExampleId:DeleteExampleServiceDto)=>Promise<boolean>
