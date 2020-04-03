let listaDeTeclas = document.querySelectorAll('.btn');
let conteudoDoVisor = document.querySelector('.visor div');
let buttonResultado = document.querySelector('#resultado');
let buttonLimpar = document.querySelector("#limpar");


listaDeTeclas.forEach(btn => {
    btn.onclick = () =>{
    if(btn.textContent == "=" ||btn.textContent =="CE" ){
    return
    }
        conteudoDoVisor.innerHTML += btn.textContent
    }

})


buttonResultado.onclick =() =>{
    let resultadoDaOperacao = eval(conteudoDoVisor.textContent)
    conteudoDoVisor.innerHTML = resultadoDaOperacao
}

buttonLimpar.onclick = () =>{
    conteudoDoVisor.innerHTML = " "
}