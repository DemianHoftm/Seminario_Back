import {Model, DataTypes, TinyIntegerDataType} from 'sequelize'
import { sequelize } from '../config/db';
import Role from './interfaces/role';
import Role_PermissionModel from './role_permission';
import PermissionModel from './permission';
import { getOriginalNode } from 'typescript';


class RoleModel extends Model<Role> implements Role {
    public id!: number;
    public name!: string;
    public description!: string;
    public active!: number;

    static initializeAssociations(){
     
        RoleModel.belongsToMany(PermissionModel, {through: Role_PermissionModel, as: 'Role_permission', foreignKey: 'role_id'});
        PermissionModel.belongsToMany(RoleModel, {through: Role_PermissionModel, as: 'Role_permission', foreignKey: 'permission_id'});

    }

    static async GetPermissionsFromRol(id_re: number){
        try{
            const permisos = await  RoleModel.findAll({
                where: {id: id_re},
                attributes: {exclude: ['id', 'name', 'description', 'active']},
                include: [{
                    model: PermissionModel,
                    required: true,
                    as: 'Role_permission',
                    attributes: ['Name']
                }]
            });
            return permisos;
        }catch(error: any){
            console.log(error);
            return null;
        }
    }

    static async GetAllRolesPermissions(){
        try{
        const get_rols = await  RoleModel.findAll({
            attributes: ['id', 'name', 'description'],
            include: [{
                model: PermissionModel,
                required: true,
                as: 'Role_permission',
                attributes: ['Name']
            }]
        });
        return get_rols;
        }catch (error: any){
            console.log(error);
                return null;
        }
    }
    static async InsertRolePermissions(name: string, descr: string, pers: number[]){
        try{
            const result = await sequelize.transaction(async t => {
                const rol = RoleModel.create({
                    name: name,
                    description: descr,
                    active: 1
                }, {transaction: t});

                for (const number of pers) {
                    await Role_PermissionModel.create({ role_id: (await rol).id,permission_id: number }, {transaction: t});
                }
                


            });

            return result;
        }catch(error: any){
            console.log(error);
                return null;
        }


    }
    
}

RoleModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        description: {
            type: DataTypes.STRING,
        },
        active:{
            type: DataTypes.TINYINT,
        }
    },

    {
        sequelize,
        tableName: "role",
        modelName: "RoleModel",
        timestamps: false,
    }
);

RoleModel.initializeAssociations();
export default RoleModel;