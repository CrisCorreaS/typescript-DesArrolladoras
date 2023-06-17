"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoMail = exports.Mail = void 0; //Permitimos que el archivo se importe correctamente en otros archivos TypeScript o JavaScript

var Mail = /** @class */ (function () {//Definimos la clase
  //CONSTRUCTOR
  function Mail(Tipo, Direccion) {
    this._Direccion = Direccion;
    this._Tipo = Tipo;
  }

  //MÉTODOS
  //Getters y Setters:
  //Tipo
  Object.defineProperty(Mail.prototype, "Tipo", {
    get: function () {
      return this._Tipo;
    },
    set: function (value) {
      this._Tipo = value;
    },
    enumerable: false,
    configurable: true,
  });
    
  //Direccion
  Object.defineProperty(Mail.prototype, "Direccion", {
    get: function () {
      return this._Direccion;
    },
    set: function (value) {
      this._Direccion = value;
    },
    enumerable: false,
    configurable: true,
  });
  return Mail;
})();
exports.Mail = Mail;//Exportamos "Persona" para que pueda ser utilizada en otras clases

//Creamos una variable que es una enumeración
var TipoMail;
(function (TipoMail) {
  TipoMail["gmail"] = "Gmail";
  TipoMail["hotmail"] = "Hotmail";
  TipoMail["yahoo"] = "Yahoo";
  TipoMail["otros"] = "Otros";
})((TipoMail = exports.TipoMail || (exports.TipoMail = {})));
