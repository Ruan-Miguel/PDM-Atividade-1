/* Feito por José David Emanoell Feitoza Braga
a apresentação das soluções será em aula.
Para executar a questão desejada, 
basta descomentar o código da mesma. */

//questao 4.1

/*const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const {nome, endereco:{cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);*/

//questao 4.2

/*function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}

const usuario = { nome: 'Diego', idade: 23 };
console.log(mostraInfo(usuario));*/

// questao 5.1

/*function somar (...elementos){
    const juncao = [].concat(...elementos);
    return(juncao.reduce((a, b) => a + b, 0))
}

const arr = [1, 2, 3, 4, 5, 6]

const x = arr[0];
const y = arr.splice(1);

//console.log(x);
//console.log(y);
console.log(somar(x,y));*/

// questao 5.2

/*const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {
    ...usuario,
    nome: 'Gabriel',
}

const usuario3 = {
    ...usuario,
    endereco: {
        ...usuario.endereco,
        cidade: 'Lontras',
    }
}

console.log(usuario);
console.log(usuario2);
console.log(usuario3);*/