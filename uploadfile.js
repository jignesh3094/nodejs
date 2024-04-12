const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,"images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
let uploadFile = multer({
  storage: storage,
}).single("image");

module.exports = uploadFile;