const { Storage } = require('@google-cloud/storage');
const path = require('path');
require('dotenv').config();

const storage = new Storage({
  keyFilename: path.join(__dirname, '../config/google-cloud-key.json'),
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID
});

const bucketName = process.env.GOOGLE_CLOUD_BUCKET_NAME;

if (!bucketName) {
  throw new Error('GOOGLE_CLOUD_BUCKET_NAME não está definido no arquivo .env');
}

const bucket = storage.bucket(bucketName);

const uploadImage = async (file) => {
  try {
    if (!file) {
      throw new Error('Nenhum arquivo foi enviado');
    }

    // Gerar nome único para o arquivo usando timestamp
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.originalname}`;

    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.mimetype
      }
    });

    return new Promise((resolve, reject) => {
      blobStream.on('error', (error) => {
        reject(error);
      });

      blobStream.on('finish', async () => {
        // Tornar o arquivo público
        await blob.makePublic();
        
        // Gerar URL pública
        const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
        resolve(publicUrl);
      });

      blobStream.end(file.buffer);
    });
  } catch (error) {
    throw new Error(`Erro ao fazer upload da imagem: ${error.message}`);
  }
};

module.exports = { uploadImage }; 