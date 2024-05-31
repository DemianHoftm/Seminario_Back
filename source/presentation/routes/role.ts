import { Router } from "express";
import { RoleControler } from "../role/controller";
import { RoleDataSourceImpl } from "../../infrastructure/datasource/role_datasource_implementation";
import { RoleRepositoryImpl } from "../../infrastructure/repositories/role_repositories_implementation";

export class RoleRouter{
static get routes(): Router{
    const router = Router();

    const datasour = new RoleDataSourceImpl();
    const repository = new RoleRepositoryImpl(datasour);
    const controlador = new RoleControler(repository);

    router.get('/', controlador.GetRole);


    return router
}
    



    
}