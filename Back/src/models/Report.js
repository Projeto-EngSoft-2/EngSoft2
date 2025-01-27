const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    address: { type: String, required: true },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    }
  },
  imageUrl: { type: String, required: true },
  category: {
    type: String,
    enum: ['Animal', 'Infraestrutura', 'Energia', 'Água', 'Sujeira', 'Ambiental'],
    required: true
  },
  status: {
    type: String,
    enum: ['avaliação', 'aberto', 'solucionado', 'recusado', 'concluído', 'urgente'],
    default: 'avaliação'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Report', reportSchema); 