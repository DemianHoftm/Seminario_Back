
export class RoleEntity{
public id: number;
public name: string;
public description: string;
    constructor(id, name, description){
        this.id          = id;
        this.name        = name || '';
        this.description = description; 
    }

    public static fromdb(object: {[key: string]: any}){
        const {id, name, description} = object;
        return new RoleEntity( id, name, description)
    }
}

