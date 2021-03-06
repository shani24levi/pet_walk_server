const express = require('express');
const { authToken } = require('../middleware/auth');
const router = express.Router();
const control = require('../controllers/users')


/* GET all users */
router.get('/', (req, res) => {
  control.getUsers(req,res);
});

router.get('/auth',authToken,(req,res) => {
  res.json({status:"ok"}) 
})


/* GET user by id after login*/
router.get('/user/',authToken, (req, res) => {
  control.getUser(req, res);
})

// authToken 
router.get('/admin',authToken, (req, res) => {
  userModel.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

router.post("/login", async (req, res) => {
  control.userLogin(req, res);
})

//register
router.post("/add", async (req, res) => {
  control.userRegister(req, res);
})

router.put("/",authToken, async (req, res) => {
  control.editUser(req, res);
})

router.delete("/",authToken, (req,res) => {
  control.deleteUser(req, res);
})

module.exports = router;
