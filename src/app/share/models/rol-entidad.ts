export interface RolEntidad {
    // funciona para un lisatdo de roles
    msg: string;
    roles: {
      id: number;
      nombre: string;
      descripcion: string;
      created_at: Date;
      updated_at: Date; } [ ];
}
