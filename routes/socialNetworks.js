const express = require('express');
const { authToken } = require('../middleware/auth');
const router = express.Router();
const control = require('../controllers/social');
const multer =require('multer');
var upload = multer({ dest: 'image/' })


router.get('/', (req, res, next) => {
    control.getSocials(req, res);
});

router.get('/ofUser', authToken, (req, res, next) => {
    control.getSocial(req, res);
});

// localhost:5000/search/?q=...
router.get("/search", (req, res) => {
    control.searchSocials(req, res);
});

router.post('/', authToken,upload.single('img'), async (req, res) => {
    req.body.img = `https://petwalkapp.herokuapp.com/${req.file.filename}`
    control.addSocial(req, res);
})

router.put('/', authToken,upload.single('img'), async (req, res) => {
    req.body.img = `https://petwalkapp.herokuapp.com/${req.file.filename}`
    control.editSocial(req, res);
})

router.delete("/:idDel", authToken, async(req, res) => {
    control.deleteSocial(req, res);
})

module.exports = router;
