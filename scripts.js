function adicionarCaracteres(numero){
    const inpute = document.getElementById('input').value;
    document.getElementById('input').value = inpute + numero;

    if(inpute.length >= 15){
        document.getElementById('input').value = inpute;
    }

    document.getElementById('input').focus();
}

function limparInput(){
    document.getElementById('input').value = ''
    document.getElementById('input').focus();
}

function calcular(){
    let inpute = document.getElementById('input').value ;

    document.getElementById('input').value = eval(inpute);
    document.getElementById('input').focus();
}

function maisMenos(){
    let inpute = document.getElementById('input').value ;
    document.getElementById('input').value = inpute *-1;
}

onload = function(){
    document.getElementById('input').focus();
}
