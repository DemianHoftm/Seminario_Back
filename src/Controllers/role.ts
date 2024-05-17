import { Request, Response } from 'express';
import RoleModel from '../models/role';
export async function  GetAllRole(_req: Request, res: Response) {
    try {
        const get_rols = await RoleModel.GetAllRolesPermissions();
        return res.status(200).send({get_rols});

    }catch (error: any){
        console.log(error);
		return res.status(500).send('ERROR_GETTING_ROLES');
    }
    

}
export async function GetOneRol(req: Request, res: Response) {
    try{
        const id = parseInt(req.params['id']);
        const role_result = await RoleModel.findOne({ where: { id: id } });
        const permissions = await RoleModel.GetPermissionsFromRol(id);
        return res.status(200).send({role_result, permissions});
    }catch(error: any){
        console.log(error);
		return res.status(500).send('ERROR_GETTING_ROLE');
    }
}

export async function  CreateRole(req: Request, res: Response) {
    try {
        const name = req.body.name;
        const description = req.body.description;
        console.log(name, description);
        const numbers: number[] = req.body.numbers;
        console.log(numbers);
        RoleModel.InsertRolePermissions(name,description, numbers);

        return res.status(200);

    }catch (error: any){
        console.log(error);
		return res.status(500).send('ERROR_GETTING_ROLES');
    }
    
}