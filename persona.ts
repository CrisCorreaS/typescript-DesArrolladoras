import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleanos: string;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion;
    private _mails: Mail;
    private _telefonos: Telefono;
    private _notas: string;

    constructor (
        nombre: string, 
        apellidos: string, 
        edad: number, 
        dni: string, 
        cumpleanos: string, 
        colorFavorito: string,
        sexo: string,
        direcciones: Direccion,
        mails: Mail,
        telefonos: Telefono,
        notas: string
    ) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    
    public get_nombre(): string {
        return this._nombre;
    }

    public set_nombre(nombre: string): void {
        this._nombre = nombre;
    }

    public get_apellidos(): string {
        return this._apellidos;
    }

    public set_apellidos(apellidos: string): void {
        this._apellidos = apellidos;
    }

    public get_edad(): number {
        return this._edad;
    }

    public set_edad(edad: number): void {
        this._edad = edad;
    }

    public get_dni(): string {
        return this._dni;
    }

    public set_dni(dni: string): void {
        this._dni = dni;
    }

    public get_cumpleanos(): string {
        return this._cumpleanos;
    }

    public set_cumpleanos(cumpleanos: string): void {
        this._cumpleanos = cumpleanos;
    }

    public get_colorFavorito(): string {
        return this._colorFavorito;
    }

    public set_colorFavorito(colorFavorito: string): void {
        this._colorFavorito = colorFavorito;
    }

    public get_sexo(): string {
        return this._sexo;
    }

    public set_sexo(sexo: string): void {
        this._sexo = sexo;
    }

    public get_direcciones(): Direccion {
        return this._direcciones;
    }

    public set_direcciones(direcciones: Direccion): void {
        this._direcciones = direcciones;
    }

    public get_mails(): Mail {
        return this._mails;
    }

    public set_mails(mails: Mail): void {
        this._mails = mails;
    }

    public get_telefonos(): Telefono {
        return this._telefonos;
    }

    public set_telefonos(telefonos: Telefono): void {
        this._telefonos = telefonos;
    }

    public get_notas(): string {
        return this._notas;
    }

    public set_notas(notas: string): void {
        this._notas = notas;
    }

    describir(): void{
        console.log(this._nombre + " " + this._apellidos + " tiene " + this._edad + " años.\n" +
        "Su DNI es " + this._dni + " y su fecha de nacimiento es el " + this._cumpleanos + ".\n" +
        "El color favorito de " + this._nombre + " es el " + this._colorFavorito + ", y es " + this._sexo + ".\n" +
        "Vive en el número "   + " de la calle " + this._direcciones.get_numero() + this._direcciones.get_calle()  + ", en el piso " +
        this._direcciones.get_piso() + this._direcciones.get_letra() + ", CP: " + this._direcciones.get_codigoPostal() +
        " . .\n En la ciudad de " + this._direcciones.get_poblacion() + " , en la provincia de " + this._direcciones.get_provincia() + ".\n" +
        "Su teléfono " + this._telefonos.get_tipo() + " , es el: " + this._telefonos.get_numero() + ".\n" +
        "Su dirección de email " + this._mails.get_tipo() + " es: " + this._mails.get_direccion() + ".\n" +
        this._notas + "\n")
    }
}