//José Klihsman

import axios from "axios";


const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay();
  console.log("1s");
  await delay();
  console.log("2s");
  await delay();
  console.log("3s");
}
umPorSegundo();

async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`http://api.github.com/users/${user}`);
    console.log(response.data.avatar_url);
  } catch (e) {
    await console.warn('Usuário não existe');
  }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');



class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.warn("Repositório não existe");
    }
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

// ________________________

// const buscaUsuario = usuario => {
//   axios.get(`https://api.github.com/users/${user}`)
//   .then(response => {
//   console.log(response.data);
//   })
//   .catch(err => {
//   console.log('Usuário não existe');
//   });
//  }
//  buscaUsuario('diego3g');

async function buscaUsuario(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (e) {
    console.warn('Usuário não existe');
  }
}
buscaUsuario("diego3g");