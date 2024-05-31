import PermissionModel from "../models/permission";
import { sequelize } from '../config/db';
import permission from './data/permissions'
try{
    sequelize.transaction(async t => {
        await PermissionModel.bulkCreate(permission, { transaction: t });
    })


    console.log('Seeding completed');
}catch(error: any){
    console.log(error);
}