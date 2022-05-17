//nombre, apellido, edad, altura, eresDesarrollador)
let datos={nombre:"Adrian",
            apellidos:"Canosa",
            edad:29,
            altura:187,
            eresDesarrollador:true}

let años="edad"
console.log(datos[años])

let datos2=[{...datos},{nombre:"Alba",
            apellido:"Juviño",
            edad:20,
            altura:176,
            eresDesarrollador:false},
            {nombre:"Axel",
            apellido:"Martinez",
            edad:22,
            eresDesarrollador:false}]

console.log(datos2)
let b=datos2.sort((a,b)=>b.edad-a.edad)
console.log(b)