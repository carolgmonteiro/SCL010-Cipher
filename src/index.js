//Declarar las variables - pantalla encode
const btnEncode = document.getElementById("btEncodeMsg");
const btnCopy = document.getElementById("btCopyMsg");
const btnClean = document.getElementById("btCleanMsg");
// const btnShare = document.getElementById("btShareMsg");
//Declarar las variables - pantalla decode
const btnDecode = document.getElementById("btDecodeMsg");
const btnCopyDeco = document.getElementById("btCopyMsg1");
const btnCleanDeco = document.getElementById("btCleanMsg1");


// cambio de pagina welcome para infos
document.getElementById("btInfosCode").addEventListener("click", function(){
  document.getElementById("welcome").style.display = "none";
  document.getElementById("infosCeasar").style.display = "block";
});
// cambio de pagina infos para welcome
document.getElementById("btBackWelcome").addEventListener("click", function(){
  document.getElementById("infosCeasar").style.display = "none";
  document.getElementById("welcome").style.display = "block";
});

// cambio de pagina welcome para encode
document.getElementById("btCodePage1").addEventListener("click", function(){
  document.getElementById("welcome").style.display = "none";
  document.getElementById("encodePage").style.display = "block";
});

// cambio de pagina encode para welcome
document.getElementById("btEncoWelcome").addEventListener("click", function(){
  document.getElementById("encodedMsg1").value = "";
  document.getElementById("decodedMsg").value = "";
  document.getElementById("offsetSpace1").value = "";
  document.getElementById("originalMsg").value = "";
  document.getElementById("encondedMsg").value = "";
  document.getElementById("offsetSpace").value = "";
  
  document.getElementById("encodePage").style.display = "none";
  document.getElementById("welcome").style.display = "block";
  
});

// cambio de pagina welcome para decode
document.getElementById("btDecoPage1").addEventListener("click", function(){
  document.getElementById("welcome").style.display = "none";
  document.getElementById("decodePage").style.display = "block";
});

//cambio de pagina decode para welcome
document.getElementById("btDecoWelcome").addEventListener("click", function(){
  document.getElementById("encodedMsg1").value = "";
  document.getElementById("decodedMsg").value = "";
  document.getElementById("offsetSpace1").value = "";
  document.getElementById("originalMsg").value = "";
  document.getElementById("encondedMsg").value = "";
  document.getElementById("offsetSpace").value = "";

  document.getElementById("decodePage").style.display = "none";
  document.getElementById("welcome").style.display = "block";
  
});

//FUNCION CODIFICAR (click para codificar el mensaje)
    btnEncode.addEventListener("click", () => {
    //guardar infos del usuario  
    let enOffset = parseInt(document.getElementById("offsetSpace").value);
    let TxtToEncode = document.getElementById("originalMsg").value;
   

            //Mostrar nuevo texto en Index.html 
            // document.getElementById("encondedMsg").value = cipher.encode;
            document.getElementById("encondedMsg").value = window.cipher.encode(enOffset, TxtToEncode);
      });

  //De la pantalla codificar para la pantalla decodificar (eventListener)
document.getElementById("btDecodePage1").addEventListener("click", function(){
  let enOffset = parseInt(document.getElementById("offsetSpace").value);
  let TxtToEncode = document.getElementById("originalMsg").value;

  document.getElementById("encodePage").style.display = "none";
  document.getElementById("decodePage").style.display = "block";
  document.getElementById("encodedMsg1").value = window.cipher.encode(enOffset, TxtToEncode);
  document.getElementById("offsetSpace1").value = parseInt(document.getElementById("offsetSpace").value);
});

//COPIAR TEXTO CODIFICADO PARA CLIPBOARD
btnCopy.addEventListener("click", () => {
  document.getElementById('encondedMsg').select();
  let TxtEncCopied = " ";
  try
  {
      //Copia el texto
      TxtEncCopied = document.execCommand('copy');
  } 
  catch (ex)
  {
    TxtEncCopied = false;  
  }
  return(TxtEncCopied);
});

//LIMPIAR TEXTAREA EN CODE
btnClean.addEventListener("click", () => {
  document.getElementById("originalMsg").value = "";
  document.getElementById("encondedMsg").value = "";
  document.getElementById("offsetSpace").value = "";
  
});

   
//DECODIFICAR (click para decodificar el mensaje)
btnDecode.addEventListener("click", () => {
    //guardar valores del usuario  
    let decoOffset = parseInt(document.getElementById("offsetSpace1").value);
    let TxtToDecode = document.getElementById("encodedMsg1").value;

    //Mostrar en Index.html
    document.getElementById("decodedMsg").value = window.cipher.decode(decoOffset, TxtToDecode);
  
});

  //De la pantalla decodificar para la pantalla codificar (eventListener)
  document.getElementById("btEncodePage1").addEventListener("click", function(){
    let decoOffset = parseInt(document.getElementById("offsetSpace1").value);
    let TxtToDecode = document.getElementById("encodedMsg1").value;

    //Mostrar en Index.html
    document.getElementById("decodePage").style.display = "none";
    document.getElementById("encodePage").style.display = "block";
    document.getElementById("originalMsg").value = window.cipher.decode(decoOffset, TxtToDecode);
    document.getElementById("offsetSpace").value = parseInt(document.getElementById("offsetSpace1").value);
  });
  

//COPIAR TEXTO DECODIFICADO PARA CLIPBOARD
btnCopyDeco.addEventListener("click", () => {
  document.getElementById('decodedMsg').select();
  let TxDecCopied = " ";
  try
  {
      //Copia el texto
      TxDecCopied = document.execCommand('copy');
  } 
  catch (ex)
  {
    TxDecCopied = false;  
  }
  return(TxDecCopied);
});

//LIMPIAR TEXTAREA EN DECODE
btnCleanDeco.addEventListener("click", () => {
  document.getElementById("encodedMsg1").value = "";
  document.getElementById("decodedMsg").value = "";
  document.getElementById("offsetSpace1").value = "";
});