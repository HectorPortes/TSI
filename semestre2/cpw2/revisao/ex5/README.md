5) A função a seguir pode ser usada para criar uma senha, utilize ela e crie uma página web, onde o
usuário possa escolher o tamanho da senha a ser gerada e depois exiba ela:
function gerarSenha(tamanho) {
const caracteres =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
let senha = "";
for (let i = 0; i < tamanho; i++) {
const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
senha += caracteres[indiceAleatorio];
}
return senha;
}