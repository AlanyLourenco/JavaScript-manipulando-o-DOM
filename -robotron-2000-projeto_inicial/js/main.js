const robotron = document.querySelector("#robotron")

const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")
const subtrair = document.querySelector("#subtrair")

const controle=document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContend)
    } )
})

function manipulaDados(operacao){
    if(operacao =="-"){
        braco.value= parseInt(braco.value)-1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}