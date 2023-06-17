export class Mail {
    private _tipo: string;
    private _direccion: string;

    constructor(tipo: string, direccion: string) {
        this._tipo = tipo;
        this._direccion = direccion;
    }

    public get_tipo(): string {
        return this._tipo;
    }

    public set_tipo(tipo: string): void {
        this._tipo = tipo;
    }

    public get_direccion(): string {
        return this._direccion;
    }

    public set_direccion(direccion: string): void {
        this._direccion = direccion;
    } 
}