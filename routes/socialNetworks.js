const express = require('express');
const { authToken } = require('../middleware/auth');
const router = express.Router();
const control = require('../controllers/social')


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

router.post('/add', authToken, async (req, res) => {
    control.addSocial(req, res);
})

router.put('/', authToken, async (req, res) => {
    control.editSocial(req, res);
})

router.delete("/:idDel", authToken, async(req, res) => {
    control.deleteSocial(req, res);
})

module.exports = router;
