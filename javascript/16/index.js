const parrafo = document.querySelectorAll(".parrafo")

parrafo.forEach(parrafo => {
    parrafo.addEventListener("dragstart",event=>{
    console.log("Estoy arrastrando" +" "+ parrafo.innerText )
    parrafo.classList.add("desplazando")
    event.dataTransfer.setData("id",parrafo.id)    
})

parrafo.addEventListener("dragend",()=>
parrafo.classList.remove("deslazando"))
})

const secciones = document.querySelectorAll(".seccion")

secciones.forEach(seccion => {
    seccion.addEventListener("dragover",event =>{
    event.preventDefault() 
    event.dataTransfer.dropEffect="copy"
   })
seccion.addEventListener("drop",event => {
console.log("Drop")
const id_parrafo = event.dataTransfer.getData("id")
const parrafo = document.getElementById(id_parrafo)
seccion.appendChild(parrafo)}
)})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "none"
})
papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})