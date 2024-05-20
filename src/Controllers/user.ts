import { Request, Response } from 'express';
import UserModel from '../models/user'

export async function CreateUser(req: Request, res: Response){
    try{
        const id = req.body.id;
        const forename = req.body.forename;
        const surname = req.body.surname;
        const email = req.body.email;
        const brithdate = req.body.brithdate;
        const blood_type = req.body.blood_type;
        const medical_record = req.body.medical_record;
        const status_id = req.body.status_id;
        const parish_id = req.body.parish_id;

        const numbers: number[] = req.body.numbers;
        const User_creat = await UserModel.create({id, forename, surname, email, brithdate, blood_type, medical_record, status_id, parish_id})
        UserModel.SetRole(id,numbers);


        return res.status(200).send({User_creat});

    }catch(error: any){
        console.log(error);
		return res.status(500).send('ERROR_GETTING_ROLES');
    }

}