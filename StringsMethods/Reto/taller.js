// let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "

// 1. ¿Qué método utiliza para saber la cantidad de caracteres?


// Imprima el resultado
// console.log(msg.length);

// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.
// console.log(msg.toLowerCase());
// 3. Si la cadena contiene la palabra filtro en algú lado imprima un mensaje por consola con el valor true.
// console.log(msg.includes('filtro'));
// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola
// console.log(msg.slice(msg.indexOf('ejercicios'), msg.indexOf('ejercicios') + 'ejercicios'.length));
// 5. Reemplaza los espacio por el caracter "-" e imprime el resultado final.
// console.log(msg.replace(/ /g, '-'));
// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.
// function comparePasswords(password1, password2) {
//     return password1 === password2;
// }
// 7. Crea una función que valide cuántas vocales tiene el msg entregado.
// function countVowels(str) {
//     return (str.match(/[aeiou]/gi) || []).length;
// }
//console.log(countVowels(msg));
// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:

// * No puede haber espacios ni al principio ni al final.
// * Debe poder convertirlos a mayúscula o a minúscula.
// * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
// * Los comentarios deberán salir en color verde y negrilla.

// Fecha de entrega(por parejas) --> Jueves 19 de octubre de 2023 a las 11.30 pm -> Link del repositorio.
// Nombre completo de los integrantes
// const commentTextarea = document.getElementById('comment');
// const counter = document.getElementById('counter');

// Actualiza el contador de caracteres cada vez que el usuario escribe en el textarea
// commentTextarea.onkeyup = function() {
//   const characterCount = this.value.length;
//   counter.textContent = characterCount;
// };

// Impide que el usuario escriba más de 255 caracteres en el textarea
// commentTextarea.onkeypress = function(event) {
//   if (this.value.length >= 255) {
//     event.preventDefault();
//   }
// };

// Envía el comentario al hacer clic en el botón
// Escucha el evento click del botón "Comentar" y agrega el comentario a la lista.
document.getElementById('submit-comment').addEventListener('click', function () {
  const commentText = document.getElementById('comment').value.trim();
  if (commentText !== '') {
    const commentList = document.querySelector('.comment-box ul');
    const newComment = document.createElement('li');
    const comment = document.createElement('p');

    const toUppercase = document.getElementById('submit-uppercase').classList.contains('active');
    const toLowercase = document.getElementById('submit-lowercase').classList.contains('active');

    if (toUppercase) {
      comment.innerText = `Usuario x: ${commentText.toUpperCase()}`;
    } else if (toLowercase) {
      comment.innerText = `Usuario x: ${commentText.toLowerCase()}`;
    } else {
      comment.innerText = `Usuario x: ${commentText}`;
    }

    comment.style.color = 'green';
    comment.style.fontWeight = 'bold';

    newComment.appendChild(comment);
    commentList.appendChild(newComment);

    document.getElementById('comment').value = '';

    document.getElementById('submit-uppercase').classList.remove('active');
    document.getElementById('submit-lowercase').classList.remove('active');
  }
});

document.getElementById('submit-uppercase').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('submit-lowercase').classList.remove('active');
});

document.getElementById('submit-lowercase').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('submit-uppercase').classList.remove('active');
});

document.getElementById('comment').addEventListener('input', function () {
  const maxCharacters = 255;
  const comment = this.value;
  const counter = document.getElementById('counter');
  const remainingCharacters = maxCharacters - comment.length;

  if (remainingCharacters >= 0) {
    counter.innerText = remainingCharacters;
  } else {
    this.value = comment.slice(0, maxCharacters);
    counter.innerText = 0;
  }
});


