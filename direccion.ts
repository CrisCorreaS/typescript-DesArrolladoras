export class Direccion {
    private _calle: string;
    private _numero: string;
    private _piso: string;
    private _letra: string;
    private _codigoPostal: string;
    private _poblacion: string;
    private _provincia: string;

    constructor(
        calle: string, 
        numero: string, 
        piso: string, 
        letra: string, 
        codigoPostal: string, 
        poblacion: string, 
        provincia: string
    ) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    public get_calle(): string {
        return this._calle;
    }

    public set_calle(calle: string): void {
        this._calle = calle;
    }

    public get_numero(): string {
        return this._numero;
    }

    public set_numero(numero: string): void {
        this._numero = numero;
    }

    public get_piso(): string {
        return this._piso;
    }

    public set_piso(piso: string): void {
        this._piso = piso;
    }

    public get_letra(): string {
        return this._letra;
    }

    public set_letra(letra: string): void {
        this._letra = letra;
    }

    public get_codigoPostal(): string {
        return this._codigoPostal;
    }

    public set_codigoPostal(codigoPostal: string): void {
        this._codigoPostal = codigoPostal;
    }

    public get_poblacion(): string {
        return this._poblacion;
    }

    public set_poblacion(poblacion: string): void {
        this._poblacion = poblacion;
    }

    public get_provincia(): string {
        return this._provincia;
    }

    public set_provincia(provincia: string): void {
        this._provincia = provincia;
    }
}