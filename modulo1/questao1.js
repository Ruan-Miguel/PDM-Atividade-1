//Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
//extender uma segunda classe chamada "Usuario".
//A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
//em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
//repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
//true na classe.
//Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
//retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
class Usuario{
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        if(this.admin){
            console.log('é administrador');
        }else{
            console.log('não é adminsitrador');
        } 
    }
}
class Admin extends Usuario{
    constructor(email,senha){
        super(email,senha);
        this.admin = true;
    }
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('emaill@teste.com', 'senha123');
const Adm2 = new Admin('emailll@teste.com', 'senha123');
const Adm3 = new Admin('emaillll@teste.com', 'senha123');
const Adm4 = new Admin('emaillllll@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
console.log(Adm2.isAdmin());
console.log(Adm3.isAdmin());
console.log(Adm4.isAdmin());
