import { Request, Response } from 'express';
import PermissionModel from '../models/permission';

export async function getAllPermissions(_req: Request, res: Response) {
	try {
        const permissions = await PermissionModel.findAll();

        return res.status(200).send({permissions});

	} catch (error: any) {
		console.log(error);
		return res.status(500).send('ERROR_GETING_PERMISSIONS');
	}
}