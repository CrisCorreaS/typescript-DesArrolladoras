"use strict";
exports.__esModule = true;

//Personas
var Persona_1 = require("./persona");
var Direccion_1 = require("./direccion");
var Telefono_1 = require("./telefono");
var Mail_1 = require("./mail");
console.log(
  "............... Creación de tres objetos de cada clase ...............\n"
);

//Direcciones:
var direccion01 = new Direccion_1.Direccion(
  "Enrique Mariñas Romero",
  "1",
  "2º",
  "B",
  "15009",
  "A Coruña",
  "A Coruña"
);
var direccion02 = new Direccion_1.Direccion(
  "Pablo Picasso",
  "46",
  "5º",
  "Derecha",
  "15004",
  "A Coruña",
  "A Coruña"
);
var direccion03 = new Direccion_1.Direccion(
  "Angel Senra",
  "18",
  "2º",
  "F",
  "15001",
  "A Coruña",
  "A Coruña"
);

//Mails:
var mail01 = new Mail_1.Mail("personal", "carlomagno1234@gmail.com");
var mail02 = new Mail_1.Mail("corporativo", "carlomagno@miempresa.es");
var mail03 = new Mail_1.Mail("educativo", "carlomagno@edu.gal");

//Teléfonos:
var telefono01 = new Telefono_1.Telefono("de casa", "981929261");
var telefono02 = new Telefono_1.Telefono("del trabajo", "881886808");
var telefono03 = new Telefono_1.Telefono("móvil", "+34 698177525");


//Personas:
//Primera Persona
var persona01 = new Persona_1.Persona(
  "María Elisa",
  "Segade Seijas",
  56,
  "45888264Z",
  "16/08/1968",
  "verde esmeralda",
  "de género neutral",
  direccion01,
  mail01,
  telefono01,
  "Esta persona es activista social de los derechos lgbt"
);

//Segunda Persona
var persona02 = new Persona_1.Persona(
  "Ana",
  "González Rodríguez",
  14,
  "49120677P",
  "24/03/2009",
  "azul cielo",
  "mujer",
  direccion02,
  mail02,
  telefono02,
  "Esta persona es mi hija"
);

//Tercera Persona
var persona03 = new Persona_1.Persona(
  "Pilar",
  "Perez Camiña",
  23,
  "54130255Z",
  "03/06/2000",
  "rosa",
  "mujer",
  direccion03,
  mail03,
  telefono03,
  "Esta persona es mi crush de la infancia"
);

//Hacemos un console.log(persona01);
persona01.describir();
//Hacemos un console.log(persona02);
persona02.describir();
//Hacemos un console.log(persona03);
persona03.describir();

console.log(
  "........................ Edición de los datos para un nuevo objeto ........................\n"
);
var direccion04 = new Direccion_1.Direccion(
  "San Francisco",
  "65",
  "3º",
  "Derecha",
  "15005",
  "A Coruña",
  "A Coruña"
);
var mail04 = new Mail_1.Mail("corporativo", "carlomagno@miempresa2.es");
var telefono04 = new Telefono_1.Telefono("del trabajo", "881328975");

var personas = [persona01, persona02, persona03];
for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
  var elemento = personas_1[_i];
  if (elemento.get_dni() == "54130255Z") {
    elemento.set_direcciones(direccion04);
    elemento.set_mails(mail04);
    elemento.set_telefonos(telefono04);
  }
}

//Hacemos un console.log(persona01);
persona01.describir();
//Hacemos un console.log(persona02);
persona02.describir();
//Hacemos un console.log(persona03);
persona03.describir();
console.log("........................ The end ........................\n");
