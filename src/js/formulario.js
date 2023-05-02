const dadosForm = document.querySelectorAll(".input");
const botaoEnviar = document.getElementsByClassName("botao");

botaoEnviar[0].addEventListener('click', function() {
    dadosForm.forEach(element => {
        if(element.value) {
            element.classList.remove('bordaVermelha');
            element.parentElement.children[1].classList.remove('positionSpan')
            element.classList.add('bordaVerde');
            
            element.parentElement.children[1].setAttribute('hidden', true);
        }else{
            element.classList.add('bordaVermelha')
            element.classList.remove('bordaVerde')
            element.parentElement.children[1].removeAttribute('hidden');
            element.parentElement.children[1].classList.add('positionSpan')
        }
    })
})
