import { CreateRole, RoleDataSource, RoleRepository } from "../../domain";
import { RoleEntity } from "../../domain/entities/role.entity";


export class RoleRepositoryImpl implements RoleRepository{
    constructor (
        private readonly datasource: RoleDataSource,
    ){}


    create(CreateRole: CreateRole, permisos: number[]): Promise<RoleEntity> {
        return this.datasource.create(CreateRole, permisos);
    }
    getAll(): Promise<RoleEntity[]> {
        return this.datasource.getAll();
    }
    Delete(id: number): Promise<RoleEntity[]> {
        return this.datasource.Delete(id);
    }
    
}