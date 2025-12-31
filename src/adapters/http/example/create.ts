import type {Request, Response, NextFunction } from "express"
import type { CreateExampleService } from "../../../application/types/example.types.js"

export function createExampleControllerFactory(CreateExampleService: CreateExampleService){

    return async (req: Request, res:Response,next:NextFunction )=>{

        const dataExample = {
            id:req.body.id, 
            name:req.body.name,
            description:req.body.description
        }

        try {

            const result = await CreateExampleService(dataExample) // or dataExample

            return res.status(201).json(result)

        } catch (error) {
            return res.status(500).send("error")
        }
    }
}
