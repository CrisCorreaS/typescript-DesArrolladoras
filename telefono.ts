export class Telefono {
    private _tipo: string;
    private _numero: string;

    constructor(tipo: string, numero: string) {
        this._tipo = tipo;
        this._numero = numero;
    }

    public get_tipo(): string {
        return this._tipo;
    }

    public set_tipo(tipo: string): void {
        this._tipo = tipo;
    }

    public get_numero(): string {
        return this._numero;
    }

    public set_numero(numero: string): void {
        this._numero = numero;
    }
}