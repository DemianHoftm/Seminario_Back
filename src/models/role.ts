import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import Role from './interfaces/role';
import Role_P from './role_permission'

class RoleModel extends Model<Role> implements Role {
    public id!: number;
    public name!: string;
    public description!: string;
    
    
}
RoleModel.hasMany(Role_P, {
    sourceKey:'id',
    foreignKey: 'role_id',
    as: 'role'
    //asosiacion a la tabla role_permission mediante el id del rol
    });
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
        }
    },

    {
        sequelize,
        tableName: "role",
        modelName: "RoleModel",
        timestamps: false,
    }
);

export default RoleModel;