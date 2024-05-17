import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import Permission from './interfaces/permission';
class PermissionModel extends Model<Permission> implements Permission {
    public id!: number;
    public name!: string;
    public description!: string;
    
    
}

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