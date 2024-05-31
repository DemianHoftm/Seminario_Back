export interface Permission {
    id: number;
    name?: string;
    description: string;
}


export class PermissionEntity{
    public id: number;
    public name: string;
    public description: string;

    constructor({ id, name, description}: Permission) {
        this.id = id || 0;
        this.name = name ||  '';
        this.description = description;
    }

}