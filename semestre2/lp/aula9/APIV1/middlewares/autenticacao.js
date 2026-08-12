const Usuario = require("../model/usuario.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const chavePrivada = process.env.CHAVE_JWT || "";

exports.autenticar = async (req, res, next) => {
  // receber um token (chave)
  // verificar se é valido
  // se for valido "continua para a proxima função" NEXT()
  // se não for valido "res.send("Sem permissão")"
  const token = req.headers["authorization"].replace("Bearer ", "");
  if(!token) {
    return res.send("[ERRO]: Enviar token JWT!")
  }
  
  jwt.verify(token, chavePrivada, (erro, informacoesUsuario) => {
    if(erro) {
      return res.send("[ERRO]: Token invalido ou expirado")
    }
    // caso queira info do usuario só pegar no informacoesUsuario
    next();
  });
}

exports.logar = async (req, res) => {
  // const email = req.body.email;
  // const senha = req.body.senha;
  // ou
  const { email, senha } = req.body;

  if(!email || !senha) {
    return res.send("[ERRO]: Informar email e senha");
  }

  const usuarioBD = await Usuario.findOne({ email: email });
  if(!usuarioBD) {
    return res.send("[ERRO]: Usuário não existe!");
  }

  const senhaCorreta = await bcrypt.compare(senha, usuarioBD.senha)
  if(senhaCorreta) { // senhaCorreta == true da na mesma
    delete usuarioBD.senha;
    jwt.sign(usuarioBD.toJSON(), chavePrivada, { expiresIn: '1d' }, (erro, token) => {
      if(erro) {
        return res.send("[ERRO]: geração JWT");
      }
      res.send({ token: token });
    });
  } else {
    res.send("Usuário ou senha incorretos");
  }
}