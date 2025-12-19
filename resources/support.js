/**
 * Check JQuery Support
 */
if (typeof jQuery === "undefined") {
  var errorMsg = "O seu navegador non soporta a versiÃ³n actual da librarÃ­a jQuery.\n\r" +
    "Non Ã© posible executar unha aplicaciÃ³n web baseada en MAQINT sen esta librarÃ­a.\n\r\n\r" +
    "Por favor, actualice o seu navegador ou empregue outro que soporte jQuery " +
    "(Intenet Explorer >= 10, Edge, Google Chrome, Firefox ou Opera)";
  if (typeof bowser !== "undefined") {
    errorMsg = errorMsg + "\n\r\n\r" +
      "Navegador: " + bowser.name + " v." + bowser.version + "\n\r" +
      "Sistema Operativo: " + bowser.osname + " v." + bowser.osversion;
  }
  console.error(errorMsg);
  alert(errorMsg);
}

if (bowser.msie && bowser.version < 10) {
//if (bowser.firefox) {
	var casAlternativo = "https://casaut.edu.xunta.gal/cas"
	  var errorMsg = "O seu navegador " + bowser.name + "  " + bowser.version + " non soporta as innovaciÃ³ns tecnolÃ³xicas incorporadas no novo portal de autenticaciÃ³n da ConsellerÃ­a de EducaciÃ³n, Ciencia, Universidades e FormaciÃ³n Profesional.\n\n\r" +
	    "Por favor, actualice o seu navegador ou empregue algunha das seguintes alternativas: \n\r" +
	    "* Edge\n\r" +
	    "* Intenet Explorer >= 10\n\r" +
	    "* Google Chrome >= 25\n\r" +
	    "* Firefox >= 30\n\r" +
	    "* Opera >= 40";
	  alert(errorMsg);
//    window.location = casAlternativo + window.location.search;
}
