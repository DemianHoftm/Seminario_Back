import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import User_Role from './interfaces/user_role'



class User_Role_Model extends Model<User_Role> implements User_Role {
    public user_id!: string;
    public role_id!: number;


}

User_Role_Model.init(
    {
        user_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        }
    },

    {
        sequelize,
        tableName: "user_role",
        modelName: "User_Role_Model",
        timestamps: false,
    }
);
export default User_Role_Model;