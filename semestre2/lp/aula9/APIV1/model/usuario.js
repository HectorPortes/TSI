// model mexe com o banco diretamente
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  criacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
