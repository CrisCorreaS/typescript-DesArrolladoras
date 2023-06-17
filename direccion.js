"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0; //Permitimos que el archivo se importe correctamente en otros archivos TypeScript o JavaScript

var Direccion = /** @class */ (function () {//Definimos la clase
  //CONSTRUCTOR
  function Direccion(
    calle,
    numero,
    piso,
    letra,
    codigoPostal,
    poblacion,
    provincia
  ) {
    this._calle = calle;
    this._numero = numero;
    this._piso = piso;
    this._letra = letra;
    this._codigoPostal = codigoPostal;
    this._poblacion = poblacion;
    this._provincia = provincia;
  }

  //MÉTODOS
  //Getters y Setters:
  //Calle
  Object.defineProperty(Direccion.prototype, "calle", {
    get: function () {
      return this._calle;
    },
    set: function (value) {
      this._calle = value;
    },
    enumerable: false,
    configurable: true,
  });
    
  //Número
  Object.defineProperty(Direccion.prototype, "numero", {
    get: function () {
      return this._numero;
    },
    set: function (value) {
      this._numero = value;
    },
    enumerable: false,
    configurable: true,
  });
    
  //Piso
  Object.defineProperty(Direccion.prototype, "piso", {
    get: function () {
      return this._piso;
    },
    set: function (value) {
      this._piso = value;
    },
    enumerable: false,
    configurable: true,
  });
    
  //Letra
  Object.defineProperty(Direccion.prototype, "letra", {
    get: function () {
      return this._letra;
    },
    set: function (value) {
      this._letra = value;
    },
    enumerable: false,
    configurable: true,
  });
    
  //Código Postal
  Object.defineProperty(Direccion.prototype, "codigoPostal", {
    get: function () {
      return this._codigoPostal;
    },
    set: function (value) {
      this._codigoPostal = value;
    },
    enumerable: false,
    configurable: true,
  });
    
  //Población
  Object.defineProperty(Direccion.prototype, "poblacion", {
    get: function () {
      return this._poblacion;
    },
    set: function (value) {
      this._poblacion = value;
    },
    enumerable: false,
    configurable: true,
  });
    
  //Provincia
  Object.defineProperty(Direccion.prototype, "provincia", {
    get: function () {
      return this._provincia;
    },
    set: function (value) {
      this._provincia = value;
    },
    enumerable: false,
    configurable: true,
  });
  return Direccion;
})();
exports.Direccion = Direccion;//Exportamos "Direccion" para que pueda ser utilizada en otras clases
