const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const { uploadImage } = require('../utils/storage');
const { getCoordinates } = require('../utils/geocoding');
const authenticateToken = require('../middlewares/authenticateToken');
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

// Criar report
router.post('/', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    const { title, description, location, category } = req.body;
    
    // Upload da imagem
    const imageUrl = await uploadImage(req.file);
    
    // Obter coordenadas
    const coordinates = await getCoordinates(location);
    
    const status = category === 'Ambiental' ? 'urgente' : 'avaliação';
    
    const report = new Report({
      title,
      description,
      location: {
        address: location,
        coordinates
      },
      imageUrl,
      category,
      status,
      userId: req.user._id
    });

    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Listar reports do usuário
router.get('/', authenticateToken, async (req, res) => {
  try {
    const reports = await Report.find({ userId: req.user._id });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Atualizar status e categoria
router.patch('/:id', authenticateToken, async (req, res) => {
  try {
    const { status, category } = req.body;
    const report = await Report.findOne({ _id: req.params.id, userId: req.user._id });
    
    if (!report) {
      return res.status(404).json({ message: 'Report não encontrado' });
    }
    
    if (status) report.status = status;
    if (category) report.category = category;
    
    await report.save();
    res.json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Deletar report
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const report = await Report.findOneAndDelete({ 
      _id: req.params.id, 
      userId: req.user._id 
    });
    
    if (!report) {
      return res.status(404).json({ message: 'Report não encontrado' });
    }
    
    res.json({ message: 'Report deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 