
export type CreateExampleServiceDto  = { // name Service
    id:string //  If you decide to generate ID on the frontend
    name:string,
    description:string
}

export type UpdateExampleServiceDto  = { 
    id:string 
    name:string,
    description:string
}

export type DeleteExampleServiceDto  = { 
    id:string 
}
