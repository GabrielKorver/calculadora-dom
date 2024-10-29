let t1 = document.querySelector('#txt1');
let t2 = document.querySelector('#txt2');
let opr = document.querySelector('#operacao')
let res = document.querySelector('#res');

function conta() {
    let n1 = Number(txt1.value);
    let n2 = Number(txt2.value);
    let op = (operacao.value);

    if(op === '+'){
        res.innerHTML = `O Resultado é <strong>${n1 + n2}</strong>.`
    } else if( op === '-'){
        res.innerHTML = `O Resultado é <strong>${n1 - n2}</strong>.`
    } else if(op === '*'){
        res.innerHTML = `O Resultado é <strong>${n1 * n2}</strong>.`
    } else if (op === '/'){
        res.innerHTML = `O Resultado é <strong>${n1 / n2}</strong>.`
    }
}