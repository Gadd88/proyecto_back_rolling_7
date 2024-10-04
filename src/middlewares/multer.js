// multer-config.js
const multer = require('multer');
const path = require('path');
const fs = require('fs')

if(!fs.existsSync('../uploads')){
  fs.mkdirSync('../uploads')
}

// const storage = multer.memoryStorage()
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.webp'){
    return cb(new Error('Formato incorrecto'), false);
  }
  cb(null, true);
};

module.exports = uploadFile = multer({
  storage,
  fileFilter
});

