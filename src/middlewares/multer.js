// multer-config.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  console.log("FILEE!")
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.webp'){
    return cb(new Error('Formato incorrecto'), false);
  }
  cb(null, true);
};

module.exports = multerConfig = multer({
  storage,
  fileFilter,
  // limits: {
  //   fileSize: 100 * 1024 * 1024
  // }
});