let lista=["agua","leche","pasta","embutido","ambientado"]
//añadir y eliminar un elemento de la lista 
lista.push("Aceite de girasol")
console.log(lista)
lista.pop()
console.log(lista)
//probando slice
let lista2=lista.slice(1,3)
console.log(lista2)
//objeto
let peliculas=[{titulo:"El diario de Noah",
              director:"Nick",
              año:2004, },           
        { titulo:"Shrek",
             director:"Vicky Jenson",
             año: 2001
        },
            {titulo:"Doctor Strange",
            director:"Scott",
            año:2016},
            {titulo:"El padrino",
            director:"Coppola",
            año:1972},
]
let Shrek=peliculas.find(o=>o.titulo==="Shrek")
console.log(Shrek)
//filter y map
let peliculas2010=peliculas.filter(Obj=>{
        if(Obj.año>=2010){
            return true
        }else{
             return false
        }
})
console.log(peliculas2010)
let pelicula=peliculas.filter(obj=>obj.año<2010)
console.log(pelicula)
let director=peliculas.map((valor)=>{return valor.director})
console.log(director)
let titulo=peliculas.map((valor)=>{return valor.titulo})
console.log(titulo)
//concat y factor de propagacion
let p=titulo.concat(director)
console.log(p)

let a=[...titulo,...director]
console.log(a)

//Probando otras cosas
//sort()
peliculas.sort((a,b) =>{
    if (a.año< b.año){
        return -1
    }else{
        return +1}})
console.log(peliculas)    
//some
let existe=peliculas.some(vlaor=>vlaor.titulo==="Shrek")
console.log(existe)