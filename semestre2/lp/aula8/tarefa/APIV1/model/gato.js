const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GatoSchema = new Schema({
    nome: { type: String, required: true, unique: true },
    idade: { type: Number, required: true },
    cor: { type: String, required: true},
    humor: { type: String, required: true },
    gordo: { type: Boolean, required: true }
});

module.exports = mongoose.model('Gatos', GatoSchema);