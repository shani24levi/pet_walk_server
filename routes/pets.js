const express = require('express');
const { authToken } = require('../middleware/auth');
const router = express.Router();
const control = require('../controllers/pets')


router.get('/', (req, res, next) => {
  control.getPets(req, res);
});

router.get('/ofUser',authToken ,(req, res, next) => {
  control.getPet(req, res);
});

//can add dog in the same name 
router.post('/add',authToken,async (req,res) => {
  control.addPet(req, res);
})

router.put('/',authToken,async (req,res) => {
  control.editPet(req, res);
})

router.delete("/:idDel",authToken, async(req,res) => {
  control.deletePet(req, res);
})

// localhost:3000/search/?q=...
router.get("/search", (req, res) => {
  control.searchPet(req, res);
});

module.exports = router;
