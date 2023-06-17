"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoTlfn = exports.Telefono = void 0; //Permitimos que el archivo se importe correctamente en otros archivos TypeScript o JavaScript

var Telefono = /** @class */ (function () {//Definimos la clase
  //CONSTRUCTOR
  function Telefono(Tipo, Numero) {
    this._Numero = Numero;
    this._Tipo = Tipo;
  }

  //MÉTODOS
  //Getters y Setters:
  //Tipo
  Object.defineProperty(Telefono.prototype, "Tipo", {
    get: function () {
      return this._Tipo;
    },
    set: function (value) {
      this._Tipo = value;
    },
    enumerable: false,
    configurable: true,
  });
    
  //Numero
  Object.defineProperty(Telefono.prototype, "Numero", {
    get: function () {
      return this._Numero;
    },
    set: function (value) {
      this._Numero = value;
    },
    enumerable: false,
    configurable: true,
  });
  return Telefono;
})();
exports.Telefono = Telefono;//Exportamos "Telefono" para que pueda ser utilizada en otras clases

//Creamos una variable que es una enumeración
var TipoTlfn;
(function (TipoTlfn) {
  TipoTlfn["fijo"] = "Fijo";
  TipoTlfn["movil"] = "Movil";
})((TipoTlfn = exports.TipoTlfn || (exports.TipoTlfn = {})));
