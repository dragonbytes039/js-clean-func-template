import type { Example } from "../entities/Example.js"


export type ExampleDBRepository = {
    create:( data:Example )=>Promise<Example>,
    update:(data: Example)=>Promise<Example>,
    deleteById:(ExampleId: Example['id'])=>Promise<boolean>
}

