// Un cadena de texto o un string es un tipo de dato para guardar texto que será meramente leído por el usuario, pero no calculado ni operado.

// El método charAt permite identificar la posición de una letra
// console.log(cadena.charAt(0))

// ¿Cómo crearlas?
// const user = "Ed"
// const profession = 'frontend developer'
// const lastname = String('Rozo')
// const favoriteColor = new String('blue')
// let description = `My name is ${user} ${lastname} and I'm ${profession}, my favorite color is ${favoriteColor}`

// const size = '20"'
// // const size2 = "40""
// const size3 = "40\""

// console.log(size,size3)

// ==============================
// Methods:

// * Para saber cuántos caracteres tiene una cadena de texto --> cadena.length
// console.log(user.length);
// console.log(profession.length);

// * Validar si un elemento está dentro de la cadena.
// indexOf -> valida si la cadena contiene el elemento solicitado.
// console.log(description);
// console.log(description.indexOf('developer'))
// console.log(description.indexOf('d'))
// console.log(description.indexOf('backend'))

// Devolver un valor booleano si se encuentra el texto dentro de la cadena de texto.
// console.log(description.includes('developer'))
// console.log(description.includes('d'))
// console.log(description.includes('backend')) 

//Concatenar un string
// console.log(user+' '+lastname)
// console.log(user.concat(lastname))

// Eliminar espacios en una cadena de texto
// let example = '    Esta es una cadena.        '
// console.log(example.trimStart())
// console.log(example.trimEnd)
// console.log(example.trim())

// Reemplazar en una cadena de texto.
// Dos parámetros:
// + Palabra a buscar
// + Palabra a reemplazar
// let product = 'Monitor de 20"'
// console.log(product.replace('Monitor','Pantalla'))

// Cortar una cadena de texto, este método recibe dos parámetros, el primero es la posición donde va a comenzar a cortar, el segundo hasta donde va a cortar.
// en caso de entregar un solo valor, se cortará desde la posición señalada hasta el final de la misma.
// let msg = 'Cortar una cadena de texto'
// console.log(msg.slice(0,6));
// console.log(msg.slice(7));

// Convertir de mayúsculas a minúsculas
// let msg = 'Convertir de mayúsculas a minúsculas'
// console.log(msg.toLowerCase())
// console.log(msg.toUpperCase())

// Dividir una cadena por determinado caracter y guardarlas en un array
// let msg = 'Dividir una cadena por determinado caracter y guardarlas en un array'
// const msgCollection = msg.split(' ')
// console.log(msg)
// console.table(msgCollection)













