class Estudiante {
    constructor(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
}
    asignaturas=["Javascript", "Html","CSS"];
    ObtenDato(){
        return {
            nombre:nombre,
            edad:edad,
        asignaturas:this.asignaturas,
              }
        }
}
const Adrian= new Estudiante("Adrian",27)
console.log(Adrian.ObtenDato())
const Manolo=new Estudiante("Manolo",34)
console.log(Manolo.ObtenDato())