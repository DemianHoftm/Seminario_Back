import { Request, Response } from 'express';
import RoleModel from '../models/role';
import PermissionModel from '../models/permission';
import Role_PermissionModel from '../models/role_permission';
export async function  GetAllRole(_req: Request, res: Response) {
    try {
        const get_rols = await  RoleModel.findAll({
            attributes: ['id', 'name', 'description'],
            include: [{
                model: Role_PermissionModel,
                required: true,
                include: [{
                    model: PermissionModel,
                    required: true,
                    attributes: ['Name']
                }]
            }]
        });
        return res.status(200).send({get_rols});

    }catch (error: any){
        console.log(error);
		return res.status(500).send('ERROR_GETTING_ROLES');
    }
    

}