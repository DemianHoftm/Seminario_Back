import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/db';
import {User, blood_type} from './interfaces/user'
import User_Role_Model from './user_role';
import RoleModel from './role';

class UserModel extends Model<User> implements User {
    public id!: string;
    public forename!: string;
    public surname!: string;
    public email!: string;
    public brithdate!: Date;
    public blood_type!: blood_type;
    public medical_record!: string;
    public status_id!: number;
    public parish_id!: number;

    static initializeAssociations(){
        //conecta las tablas de usuario y rol usando de intermediario la tabla de user_role
        UserModel.belongsToMany(RoleModel, {through: User_Role_Model, as: 'User_Role', foreignKey: 'user_id'});
        RoleModel.belongsToMany(UserModel, {through: User_Role_Model, as: 'User_Role', foreignKey: 'role_id'});
    }



    
    static async SetRole(id_: string,roles: number[]){
        try{
            const result = sequelize.transaction(async t => {
                
                const opt_d = {
                    where: {user_id: id_},
                    return: true,
                    transaction: t
                };
                await User_Role_Model.destroy(opt_d);

                const createPromises = roles.map(number => 
                    User_Role_Model.create({ user_id: id_, role_id: number }, {transaction: t}));
                await Promise.all(createPromises);
            });
            return result;
        }catch(error: any){
            console.log(error);
            return null;
        }
    }



}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        forename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brithdate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        blood_type:{
            type: DataTypes.ENUM,
            allowNull: false,
        },
        medical_record:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        status_id:{
            type: DataTypes.TINYINT,
        },parish_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },

    {
        sequelize,
        tableName: "user",
        modelName: "UserModel",
        timestamps: false,
    }
);

UserModel.initializeAssociations();
export default UserModel;