import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import Role_P from './interfaces/role_permission';
class Role_PermissionModel extends Model<Role_P> implements Role_P {
    public role_id!: number;
    public permission_id!: number;

    
}
Role_PermissionModel.init(
    {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        permission_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }
    },

    {
        sequelize,
        tableName: "role_permission",
        modelName: "Role_PermissionModel",
        timestamps: false,
    }
);


export default Role_PermissionModel;