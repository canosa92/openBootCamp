
//Funcion sin parametro que da true
function imprimeTrue(){
    return true
  }
  imprimeTrue()
  console.log(imprimeTrue())
// Funcion asincrona que utilica SetTimeout
async function Promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

  
  //Funciones generadores. Funcion que da numero par
  function* pares(){
      let id=0
      while(true){
       yield id +=2
    };
  }
  let a =pares()
  console.log(a.next())
  console.log(a.next())
  console.log(a.next())
