//Exercícios: Módulo 01
// 3.1
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(a => a + 10));

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const  mostraUsuario = (nome = 'Diogo', idade = 18) => {
return { nome, idade };
}
mostraUsuario(nome, idade);
console.log(mostraUsuario());

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise);
// 6
const user = 'Diego';
const age = 23;
console.log(`O usuário ${user} possui ${age} anos`);

//Francisco Wernnevon Vieira Estrela;
// Irei apresentar na aula;