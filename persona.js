"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0; //Permitimos que el archivo se importe correctamente en otros archivos TypeScript o JavaScript

var Persona = /** @class */ (function () {//Definimos la clase
  //CONSTRUCTOR
  function Persona(
    nombre,
    apellidos,
    edad,
    dni,
    cumple,
    colorFavorito,
    sexo,
    direcciones,
    mails,
    telefonos,
    notas
  ) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this.dni = dni;
    this._cumple = cumple;
    this._colorFavorito = colorFavorito;
    this._sexo = sexo;
    this._direcciones = direcciones;
    this._mails = mails;
    this._telefonos = telefonos;
    this._notas = notas;
  }

  //MÉTODOS
  //Getters y Setters:
  //Nombre
  Object.defineProperty(Persona.prototype, "nombre", {
    get: function () {
      return this._nombre;
    },
    set: function (nombre) {
      this._nombre = nombre;
    },
    enumerable: false,
    configurable: true,
  });

  //Apellidos
  Object.defineProperty(Persona.prototype, "apellidos", {
    get: function () {
      return this._apellidos;
    },
    set: function (apellidos) {
      this._apellidos = apellidos;
    },
    enumerable: false,
    configurable: true,
  });

  //Edad
  Object.defineProperty(Persona.prototype, "edad", {
    get: function () {
      return this._edad;
    },
    set: function (edad) {
      this._edad = edad;
    },
    enumerable: false,
    configurable: true,
  });

  //DNI
  Object.defineProperty(Persona.prototype, "dni", {
    get: function () {
      return this.dni;
    },
    set: function (dni) {
      this.dni = dni;
    },
    enumerable: false,
    configurable: true,
  });

  //Cumple
  Object.defineProperty(Persona.prototype, "cumple", {
    get: function () {
      return this._cumple;
    },
    set: function (cumple) {
      this._cumple = cumple;
    },
    enumerable: false,
    configurable: true,
  });

  //Color Favorito
  Object.defineProperty(Persona.prototype, "colorFavorito", {
    get: function () {
      return this._colorFavorito;
    },
    set: function (colorFavorito) {
      this._colorFavorito = colorFavorito;
    },
    enumerable: false,
    configurable: true,
  });

  //Sexo
  Object.defineProperty(Persona.prototype, "sexo", {
    get: function () {
      return this._sexo;
    },
    set: function (sexo) {
      this._sexo = sexo;
    },
    enumerable: false,
    configurable: true,
  });

  //Direcciones
  Object.defineProperty(Persona.prototype, "direcciones", {
    get: function () {
      return this._direcciones;
    },
    set: function (direcciones) {
      this._direcciones = direcciones;
    },
    enumerable: false,
    configurable: true,
  });

  //Mails
  Object.defineProperty(Persona.prototype, "mails", {
    get: function () {
      return this._mails;
    },
    set: function (mails) {
      this._mails = mails;
    },
    enumerable: false,
    configurable: true,
  });

  //Teléfonos
  Object.defineProperty(Persona.prototype, "telefonos", {
    get: function () {
      return this._telefonos;
    },
    set: function (telefonos) {
      this._telefonos = telefonos;
    },
    enumerable: false,
    configurable: true,
  });

  //Notas
  Object.defineProperty(Persona.prototype, "notas", {
    get: function () {
      return this._notas;
    },
    set: function (notas) {
      this._notas = notas;
    },
    enumerable: false,
    configurable: true,
  });

  //Método para añadir una dirección a la lista de direcciones
  Persona.prototype.agregarDireccion = function (direccion) {
    this._direcciones.push(direccion);
  };

  //Método para añadir un mail a la lista de mails
  Persona.prototype.agregarMail = function (mail) {
    this._mails.push(mail);
  };

  //Método para añadir un teléfono a la lista de teléfonos
  Persona.prototype.agregarTelefono = function (telefono) {
    this._telefonos.push(telefono);
  };

  //Método para obtener todos los datos de la persona en un objeto
  Persona.prototype.obtenerDatos = function () {
    return {
      nombre: this._nombre,
      apellidos: this._apellidos,
      edad: this._edad,
      dni: this._dni,
      cumpleaños: this._cumple,
      colorFavorito: this._colorFavorito,
      sexo: this._sexo,
      direcciones: this._direcciones,
      mails: this._mails,
      telefonos: this._telefonos,
      notas: this._notas,
    };
  };
  return Persona;
})();
exports.Persona = Persona; //Exportamos "Persona" para que pueda ser utilizada en otras clases
