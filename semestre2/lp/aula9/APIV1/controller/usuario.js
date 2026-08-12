const Usuario = require('../model/usuario.js');
const bcrypt = require('bcrypt');

exports.registrarUsuario = async (req, res) => {
  // const { nome, email, senha } = req.body;
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;

  if(!nome || !senha || !email) {
    return res.send('[ERRO]: Informar nome, email, senha!');
  }

  try {
    const usuarioJahExiste = await Usuario.findOne({ email: email });
    if(usuarioJahExiste) {
      return res.send('[ERRO]: Usuario já cadastrado!');
    }
    const senhaEncriptada = await bcrypt.hash(senha, 10);
    const novoUsuario = {
      nome: nome,
      email: email,
      senha: senhaEncriptada
    }
    await Usuario.create(novoUsuario);
    delete novoUsuario.senha;
    res.send('[SUCESSO]: Usuario com sucesso');
  } catch (erro) {
    console.log(erro);
    res.send('[ERRO]: Erro ao cadastrar o usuario');
  }
}