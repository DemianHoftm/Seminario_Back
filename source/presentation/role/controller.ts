import { RoleRepository } from "../../domain";
import { Request, Response } from 'express';

export class RoleControler{

    constructor(
        private readonly RoleRepository: RoleRepository,
    ){}
    public GetRole = async( req: Request, res: Response )=>{
        const roles = await this.RoleRepository.getAll();
        return res.json(roles);
    };



}