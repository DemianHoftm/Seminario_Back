import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import Role from './interfaces/role';
import Role_P from './role_permission'

class PermissionModel extends Model<Role> implements Role {
    public id!: number;
    public name!: string;
    public description!: string;
    
    
}
PermissionModel.hasMany(Role_P, {
    sourceKey:'id',
    foreignKey: 'permission_id',
    as: 'permission'
    //asosiacion a la tabla role_permission mediante el id del permiso
    });
PermissionModel.init(
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
            
        }
    },

    {
        sequelize,
        tableName: "permission",
        modelName: "PermissionModel",
        timestamps: false,
    }
);


export default PermissionModel;