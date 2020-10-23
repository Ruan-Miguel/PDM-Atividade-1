//Ruan Miguel

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

const idades = usuarios.map((usuario) => usuario.idade);

const trabalhamRocketseat = usuarios.filter((usuario) => usuario.empresa === 'Rocketseat' && usuario.idade > 18);

const trabalhaGoogle = usuarios.find((usuario) => usuario.empresa === 'Google');

const usuariosIdadeDobrada = usuarios.map((usuario) => Object.assign(usuario, usuario.idade * 2));

const menor50 = usuariosIdadeDobrada.filter((usuario) => usuario.idade <= 50);