import { RoleDataSource } from "../../domain/datasources/role_datasource";
import { CreateRole } from "../../domain/datos/role/create-role";
import { UpdateRole } from "../../domain/datos/role/update_role";
import { RoleEntity } from "../../domain/entities/role.entity";
import { prisma } from "../../config/config";
export class RoleDataSourceImpl implements RoleDataSource{
    
    create(CreateRole: CreateRole, permisos: number[]): Promise<RoleEntity> {
        throw new Error("Method not implemented.");
    }
    Update(UpdateRole: UpdateRole, permisos: number[]): Promise<RoleEntity> {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<RoleEntity[]> {
        const roles = await prisma.role.findMany();

        return roles.map(Role => RoleEntity.fromdb(Role)); 
    }
    Delete(id: number): Promise<RoleEntity[]> {
        throw new Error("Method not implemented.");
    }
    
}