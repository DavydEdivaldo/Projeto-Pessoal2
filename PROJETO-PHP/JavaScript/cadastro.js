
const animaCad = document.getElementById('animação-cadastro');
const clicado = document.getElementById('login');
document.getElementById('login').addEventListener('click', function(){
    clicado.classList.toggle('clicado');
    if(clicado.classList == 'clicado'){
        animaCad.classList.remove('esconder');
        animaCad.classList.remove('esconder2');
        animaCad.classList.add('cadastro');
    }else if(clicado != ('clicado')){
        animaCad.classList.add('esconder2');
        animaCad.classList.remove('cadastro');
    }
});