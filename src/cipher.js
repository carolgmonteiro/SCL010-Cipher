

window.cipher = {
  encode: (enOffset, TxtToEncode) => {
let encodedTxt = "";
  //recorrer palabra (for  => length) Loop
    for (let i = 0; i < TxtToEncode.length ; i++ ) {
     
      //variable para numero Ascii
      let asciiNumber = "";
      //Tranformar a ASCII charCodeAt(); 
      asciiNumber += TxtToEncode.charCodeAt(i);
      
       //Guardar variable n° ASCII Y Aplicar formula n° ASCII (x(letra) - 65 + offset) % 26(alphabet)) + 65(ascii)
      if(asciiNumber >= 65 && asciiNumber <= 90){
         //Guardar nuevo ASCII en variable Concatenar y Convertilo a letra (String.fromChartCode) 
         //letras mayusculas del alphabeto
         encodedTxt += String.fromCharCode((asciiNumber - 65 + enOffset) % 26 + 65);
        //letras minusculas del alphabeto
       } else if(asciiNumber >= 97 && asciiNumber <=  122) {
         encodedTxt += String.fromCharCode((asciiNumber - 97 + enOffset) % 26 + 97);
         //numeros de 0 a 9
       } else if(asciiNumber >= 48 && asciiNumber <=  57) {
         encodedTxt += String.fromCharCode((asciiNumber - 48 + enOffset) % 10 + 48);
        //caracteres especiales grupo 01
       } else if(asciiNumber >= 32 && asciiNumber <= 47) {
         encodedTxt += String.fromCharCode((asciiNumber - 32 + enOffset) % 15 + 32);
         //caracteres especiales grupo 02
       } else if(asciiNumber >= 58 && asciiNumber <= 64) {
        encodedTxt += String.fromCharCode((asciiNumber - 58 + enOffset) % 6 + 58);
        //caracteres especiales grupo 03
       } else if(asciiNumber >= 91 && asciiNumber <= 96) {
        encodedTxt += String.fromCharCode((asciiNumber - 91 + enOffset) % 5 + 91);
        //caracteres especiales grupo 04
       } else if(asciiNumber >= 123 && asciiNumber <= 126) {
        encodedTxt += String.fromCharCode((asciiNumber - 123 + enOffset) % 3 + 123);
        //con numeros negativos
        //letras mayusculas del alphabeto
      // } else if(asciiNumber >= 65 && asciiNumber <= 90) {
      //   encodedTxt += String.fromCharCode((asciiNumber - 90 + enOffset) % 26 + 90);
        } else {
         encodedTxt += TxtToEncode[i];
       }
     }
     return encodedTxt;
   },
  

   decode: (decoOffset, TxtToDecode) => {
   // hacer funcion function cipher.decode(offset, mesage) --->en cipher.js
 //Hacer variable para el texto codificado. Ej:  let text = " ";
 let decodedTxt = "";
 //Recorrer mensaje - loop for (let i = 0; i < saveTxt.length ; i++ ) {
 for (let i = 0; i < TxtToDecode.length ; i++ ) {
 
 //declarar la variable 
 let asciiNumberDeco = "";
   //Tranformar a ASCII charCodeAt(); let asciiNumber = saveTxt[i].charCodeAt();
   asciiNumberDeco += TxtToDecode.charCodeAt(i);
   
       //Aplicar formula n° ASCII con condicional if(asciiNumber >= 65 && asciiNumber <= 90){
       //Guardar nuevo ASCII en variable y Concatenar y Convertilo a letra (String.fromChartCode)
        //letras mayusculas del alphabeto 
       if(asciiNumberDeco >= 65 && asciiNumberDeco <= 90){
         decodedTxt += String.fromCharCode((asciiNumberDeco - 90 - decoOffset) % 26 + 90);
         //letras minusculas del alphabeto
       } else if(asciiNumberDeco >= 97 && asciiNumberDeco <=  122) {
         decodedTxt += String.fromCharCode((asciiNumberDeco - 122 - decoOffset) % 26 + 122);
         //numeros de 0 a 9
       } else if(asciiNumberDeco >= 48 && asciiNumberDeco <=  57) {
         decodedTxt += String.fromCharCode((asciiNumberDeco - 57 - decoOffset) % 10 + 57);
         //caracteres especiales grupo 01
       } else if(asciiNumberDeco >= 32 && asciiNumberDeco <= 47) {
        decodedTxt += String.fromCharCode((asciiNumberDeco - 47 - decoOffset) % 15 + 47);
        //caracteres especiales grupo 02
      } else if(asciiNumberDeco >= 58 && asciiNumberDeco <= 64) {
       decodedTxt += String.fromCharCode((asciiNumberDeco - 64 - decoOffset) % 6 + 64);
       //caracteres especiales grupo 03
      } else if(asciiNumberDeco >= 91 && asciiNumberDeco <= 96) {
       decodedTxt += String.fromCharCode((asciiNumberDeco- 96 - decoOffset) % 5 + 96);
       //caracteres especiales grupo 04
      } else if(asciiNumberDeco >= 123 && asciiNumberDeco <= 126) {
       decodedTxt += String.fromCharCode((asciiNumberDeco - 126 - decoOffset) % 3 + 126);   
        } else {
         decodedTxt += TxtToDecode[i];
       }
     }
     return decodedTxt;
 }
};
