import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

export const upload = multer({ 
  storage,
  limits: {
    fieldSize: 10 * 1024 * 1024 // 👈 increase to 10MB (adjust if needed)
  }
});
