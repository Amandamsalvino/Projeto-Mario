const botaoContato = document.querySelector(".botao-contato")

const form = document.querySelector(".formulario")

const mascara = document.querySelector(".mascara-video")



function formulario (){

    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
   
    
    
    
}

function mask() {

    form.style.left = "-290px"
    mascara.style.visibility = "hidden"

    
}












botaoContato.addEventListener("click", formulario)