//Exercícios: Módulo 01
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(a => {
    return a + 10;
});

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => {
    return usuario.idade;
}
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const  mostraUsuario = (nome = 'Diogo', idade = 18) => {
return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = () => {
return new Promise((resolve, reject) => {
return resolve();
})
};
// 6
const user = 'Diego';
const age = 23;
console.log(`O usuário ${user} possui ${age} anos`);


//Francisco Wernnevon Vieira Estrela;
// Irei apresentar na aula;