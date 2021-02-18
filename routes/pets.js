const express = require('express');
const { authToken } = require('../middleware/auth');
const router = express.Router();
const control = require('../controllers/pets');
const multer =require('multer');
var upload = multer({ dest: 'image/' })

router.get('/', (req, res, next) => {
  control.getPets(req, res);
});

router.get('/ofUser',authToken ,(req, res, next) => {
  control.getPet(req, res);
});

router.get('/ofUser/:id',authToken ,(req, res, next) => {
  control.getPetById(req, res);
});

router.post('/',authToken,upload.single('img'),async (req,res) => {
  req.body.img = `https://petwalkapp.herokuapp.com/${req.file.filename}`
  control.addPet(req, res);
})


router.put('/',authToken,upload.single('img'),async (req,res) => {
  req.body.img = `https://petwalkapp.herokuapp.com/${req.file.filename}`
  control.editPet(req, res);
})


router.delete("/:idDel",authToken, async(req,res) => {
  control.deletePet(req, res);
})

// localhost:5000/search/?q=...
router.get("/search", (req, res) => {
  control.searchPet(req, res);
});


module.exports = router;
