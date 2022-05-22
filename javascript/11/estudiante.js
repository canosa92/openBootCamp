class Estudiante {
    constructor(nombre,edad){
    nombre;
    edad;}
    asignturas=["Javascript", "Html","CSS"];
    ObtenDato(){
        return {
            nombre:this.nombre,
            edad:this.edad,
        asignaturas:this.asignaturas,
              }
        }
    
}
const Adrian= new Estudiante(Adrian,27)
console.log(Adrian.ObtenDato())