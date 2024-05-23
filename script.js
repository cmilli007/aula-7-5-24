const exibeUsuario = (usuario) => {
    console.log(`o usuário ${usuario.login} possui ${usuario.public_repos} seguidores!`);
};
 
// const iniciar = async (user) => {
//     const response = await fetch(`https://api.github.com/users/${user}`);
//     const result = await response.json();
//     exibeUsuario(result);
// };
 
 
const iniciar = async (user) => {
 console.log("Buscando dados do usuário...");
 
 try {
    const response = await fetch(`https://api.github.com/users/${user}`);
   
        if (response.ok) {
            const result = await response.json();
            exibeUsuario(result);
        } else {
            throw new Error (`Erro ao acessar o URL: ${response.statusText}`);
        }
     } catch (error) {
        console.log(`Algo deu errado.... O que rolou: ${error.message}`);
     }
     console.log("Operação Finalizada!");
    };
 
document.addEventListener("DOMContentLoaded", iniciar("xxx"));
 
// fetch(`https://api.github.com/users/${user}`)
// .then((response) => {
 
// .then((result) => exibeUsuario(result))
// .catch((errro) => console.log(`Um erro foi encontrado: ${error.message}`))
// .then(() => console.log("operação concluída"));