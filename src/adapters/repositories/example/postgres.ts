import type { Example } from "../../../domain/entities/Example.js";
import type { ExampleDBRepository } from "../../../domain/repositories/example.db.js";


export function ExamplePostgressRepositoryFactory():ExampleDBRepository{

    async function create(data: Example): Promise<Example> {
        throw new Error("Method not implemented.");

        //The response of some ORM or ODM must be mapped to match the entity

    }
    async function update(data: Example): Promise<Example> {
        throw new Error("Method not implemented.");
    }
    async function deleteById(ExampleId: Example["id"]): Promise<boolean> {
        throw new Error("Method not implemented.")
    }

    return {
        create,
        update,
        deleteById
    }
}

