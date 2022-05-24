// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {
    code : 10,
    name : 'john',
};
employee.code = 10;
employee.name = "John";

// Como podemos melhorar o esse código usando TS? 

type humano = {
    nome : string,
    idade : number,
}

enum Trabalho {
    atriz,
    padeiro
}

let maria = {
    nome : "maria",
    idade : 29,
    profissao : 'atriz'
};

let roberto = {
    nome : "roberto",
    idade : 19,
    profissao : "Padeiro"
};

let laura = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let carlos = {
    nome : "carlos",
    idade : 19,
    profissao : "padeiro"
}


/** 
    Em todos os casos abaixo de uso do getElementById(), o elemento é potencialmente nulo e ifs são necessários para garantir que seu código vai funcionar da melhor forma.
    No entanto, vão existir situações em que o desenvolvedor vai ter certeza de que o campo está lá e ele pode escrever o código da seguinte maneira:
        document.getElementById('limpar-saldo')!;
    A exclamação no fim é um sinal de que aquele campo não é nulo e que essa função realmente vai trazer algo. Assim, os ifs não são necessários.
    Como exemplo, vou seguir essa metodologia no campo 'botaoLimpar'.
*/

export {}

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});