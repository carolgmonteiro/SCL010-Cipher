## **C0DEXPRESS: cifra y comparta mensajes importantes rapido y facil** 

En un mundo en que todo sucede a alta velocidad, no nos damos cuenta de las condiciones de seguridad que compartimos nuestras informaciónes personales en las redes como facebook, whatsapp, slack y telegram. Enviamos cuentas de banco, RUT o números de tarjeta de crédito y contraseñas sin saber si estamos en un ambiente seguro y seguridad de quien las vay recibir. 
**¿Y si pudiéramos compartir estas informaciones solamente con quien la solicitó y de la manera más segura posible, rápido y fácil?**

**C0dexpress** permite que estas informaciones tan importantes sean compartidas con más segura utilizando, por ejemplo, la Cifra Cesar. La aplicación, que se puede abrir en escritorio o, futuramente, instalada en las **plataformas Android y IOS**, permite cifrar y descifrar los mensajes sólo por quien posee la clave secreta, que consiste en un número a ser escogido por la persona que va a codificar.

Esta herramienta es para *personas con la vida muy ágil y digital*, que utilizan las redes sociales como principales medios de comunicación en sus cotidianos. Que comparten informaciones importantes con sus clientes, amigos o familia.

![presentacion](img/CODEXPRESS_presentacion.JPG)

En un primero momento, Codexpress es basado en el Cifrado César, un tipo de crifado por sustitución, es decir, que cada letra del texto original es reemplazada por otra, que se encuentra a un número fijo de posiciones más adelante en el mismo alfabeto, dependiente de la clave elejida. Todavia, aún este es un prototipo de una aplicación que pretende incorporar, en el futuro, otros modelos de cifrado y herramientas de creación de contraseñas, junto a la posibilidad de cambio de alfabeto de acuerdo con el idioma escogido.

***

## **Decisiones de Diseño y interacción con el usuário**

Como concepto principal de diseño, fue pensado en amigabilidad y sencillez, con interfaz minimalista, atractiva y leve, similar a las actuales redes sociales.

#### **Diagrama de flujo**

Idea es que la aplicación sea bastante fluida entre las secciones, pensando en una navegación simple, con el mínimo de clicks entre pantallas.

![flujo](img/CODEXPRESS_mapaFlujo.JPG)

#### **Prototipo de baja fidelidad**

Después de trabajar la circulación entre pantallas, el prototipo de baja fidelidad fue un importante aliado para definir las funciones internas de la aplicación - pensando en la facilidad para que el usuario pase de cifrar para descifrar, teniendo la posibilidad de haber copiado las informaciones entre las secciones. Posibilidad de copiar para el "clipboard" y limpiar la pantalla. Trabajar con iconos entretenidos y palabras simples.

![prototipo1](img/CODEXPRESS_prototipoHome.JPG)
![prototipo2](img/CODEXPRESS_prototipoCifrar.JPG)
![prototipo3](img/CODEXPRESS_prototipoDecifrar.JPG)

#### **Investigación de sitios web y definicion del lenguaje de interfaz**

La investigación de referencias fue enfocada en empresas y aplicaciones que reflejen agilidad, tranquilidad, frescor y tecnología: las nuevas fintechs, que con su *agilidad y practicidad* conquistaron muchos usuarios, los traductores de lenguas más practicos y finalmente las redes sociales que ya son parte fundamental de las interacciones sociales actualmente. 

![referentes](img/CODEXPRESS_referentes.JPG)

Los colores *naranja y turquesa* fueron los elegidos como principales, siendo complementarios junto a colores más neutros como el gris y naranja claro, *trayendo sensación de amistad, sencillez, frescor y tranquilidad*para quien lo use. La fuente "Monospace" fue elejida para remitir a la idea de codigo (utilización del "GoogleFonts").
Para estudio de colores fue utilizadas herramientas digitales de paleta de colores cómo "paletton.com", "coolors.co", "colorzilla".

![colores](img/CODEXPRESS_paletaColores.JPG)

#### **Primero Test de usabilidad con el usuário**

Antes de llegar a una versión final, se recibieron algunos comentarios de usuarios, observando su reacción y relación con los colores, la estetica y funcionalidades: 
- Fuertes identificaciones con los colores y fuentes escogidas - amigabilidad, confianza, tranquilidad y sensación de armonía y frescor. 
- Necesidad de aumentar las fuentes y iconos. 
- Diferenciar los iconos cifrar y descifrar .
- Diferenciar mejor lo que es la funcion de cifrado y lo que es navegación, con sugerencia de cambio de posicionamento de los botones y áreas de texto para que quedara más responsivo.
- Cambiar el orden de los iconos. Mejoras en el contenido del manual de instrucciones. 
- Sugiero utilizar palabras más sencillas. 
- Mejorar la interfaz entre la función cifrar y descifrar - copiar el cconteudo de uno a otro.

***

## **Interfaz Final**

Después de las pruebas, se hicieron ultimas modificaciones en la interfaz, que ya configura su versión final.


#### **Pantalla principal**

En la pantalla principal, el usuario puede elijir se quiere acceder al "Cómo usar?" , "cifrar" o "descifrar" su información, a través de botones interactivos e iconos atractivos que se relacionan con sus funciones. Todavia la aplicación no está responsiva para los equipos muebles.

![home](img/CODEXPRESS_finalHome.JPG)
***

#### **Instrucciones de uso para el usuário**

Nesta sección "Cómo usar?", el usuario encontrará las informaciones sobre las posibilidades de cómo utilizar la herramienta, instrucciones de uso y politica de privacidad del usuario, con explicación didáctica, trayendo más confianza y seriedad a la aplicación.

![guion](img/CODEXPRESS_finalGuion.JPG)


#### **Cifrando y descifrando las informaciones personales**

Para el desarrollo del diseño de las secoes cifrar y descifrar, se realizaron algunas pruebas con usuarios para observar
- **Clave secreta** - Elegir un desplazamiento (la clave que al cifrar, debe ser guardada), o insertar la clave recibida, indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- **Insertar texto** - Insertar un mensaje (texto) a cifrar o descifrar.
- **Resultado final** - Información cifrada o decifrada.

![cifrada](img/CODEXPRESS_finalCifrar.JPG)
![descifrada](img/CODEXPRESS_finalDecifrar.JPG)

- La funccion copiar para clipboard para que el usuario comparta el mensaje.
- Funcción limpiar para cifrar o descifrar outro texto.
- Volver a pantalla principal
- Interacción Cifrar o decifrar - despues que cumplir con cifrar, por ejemplo, el usuario puede directamente ir a pantalla decifrar, tenendo sus *informaciones automaticamente copiadas*. Lo mismo ocurre inversamente.

![interaccion](img/CODEXPRESS_interaccionCD.jpg)

#### **Tests con el usuário final**
Para prueba final, hicimos un test de usabilidad que muestra que la aplicación parece simples de manejar, con caminos intuitivos de manera general. En el "Cómo usar?", El usuario pedio más informaciones acerca de cómo utilizar la información y sus posibilidades, que fue añadido en nueva revisión. Entonces las instrucciones pareceron aún más largas pero también claras y la politica de privacidad se muestró más como una formalidad en que nadie tiene tiempo para leerla. 

Para las funciones cifrar y descifrar, los iconos estan de facil compreensión y el efecto que aumenta el botón al pasar el mouse arriba, es algo entretenido para el usuario. Las funcciones cifrar y decifrar estan funcionando correctamente. Además, le gusta la funcción copiar para el clipboard y la interacción que copia automaticamente las informaciones entre cifrar y descifrar es algo que el usuario le gusta.
** Vídeo del test final de usabilidad hecho con Loom [codexpress test de usabilidad](https://www.loom.com/share/466c2b5715cb47be9936c2e8d556f81e)

#### **Cómo acceder a la aplicación**

Link para la aplicación: 
[https://carolgmonteiro.github.io/SCL010-Cipher/src/index.html](https://carolgmonteiro.github.io/SCL010-Cipher/src/index.html)

#### **Implementado utilizando**

- HTML5 (Estructura principal - divs, botones, textos)
- JavaScript (interacción - funciones encode / decode, eventListener, getElementById)
- CSS (interfaz - layout, colores, fuentes, espaciamentos, efectos)
![pruebas](img/CODEXPRESS_testeos.jpg)

***

## Checklist general

### Parte Obligatoria
* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] No utiliza `this`.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [x] Cifra/descifra minúsculas
* [x] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.