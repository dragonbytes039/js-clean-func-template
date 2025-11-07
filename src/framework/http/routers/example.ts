import { Router } from "express";
import { CreateExampleControllerBuild } from "../../Di/httpAssembly.js";

const ExampleRouter:Router =  Router()

ExampleRouter.post("/create", CreateExampleControllerBuild)

export default ExampleRouter;