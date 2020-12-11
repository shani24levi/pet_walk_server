const express = require('express');
const { petModel } = require("../models/pets_model");
const { validPet } = require("../validation/pets");

const getPets = async (req, res) => {
    try {
        petModel.find({})
            .limit(5)
            .then(data => {
                console.log(data);
                res.json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const getPet = async (req, res) => {
    try {
        let getuserId = req._id;
        //dont show user_id
        petModel.find({ user_id: getuserId }, { user_id: 0})
            .limit(5)
            .then(data => {
                console.log(data);
                res.json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const addPet = async (req, res) => {
    try {
        let getuserId = req._id;
        let valid = validPet(req.body);
        if (!valid.error) {
            try {
                //check if the dog name exixt for id_user
                // petModel.find({ name: req.body.name ,  user_id: req.body.user_id }, function(err, user) 
                // {
                //    if (err)
                //    {
                //        res.send(err);
                //    }
                //    console.log(user);
                //    res.json(user);

                // });

                // console.log(finder);   
                // if(finder){
                //   console.log(finder);
                //   res.status(400).json({message:"pet already in system ",code:"duplicate"});
                // }

                req.body.user_id = getuserId;
                let data = await petModel.insertMany([req.body]);
                res.json(data)
            }
            catch (err) {
                res.status(400).json({ message: "Erorr" });
            }
        }
        else {
            res.status(400).json(valid.error.details);
        }
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const editPet = async (req, res) => {
    try {
        let getuserId = req._id;
        //Check that a pet belongs to the user
        let checkPetUserToToken = await petModel.findOne({ _id: req.body.id, user_id: getuserId })
        console.log(checkPetUserToToken)
        if (!checkPetUserToToken) {
            return res.status(400).json({ error: "User is not the pets owner,Unauthorized to edit" })
        }

        let valid = validPet(req.body);
        if (!valid.error) {
            try {
                // מוסיף את האיי די של המשתמש
                // לפי הטוקן וככה יש אבטחה טובה יותר
                // req.body.user_id = getuserId;
                let data = await petModel.updateOne({ _id: req.body.id }, req.body);
                res.json(data)
            }
            catch (err) {
                res.status(400).json({ message: "Error try again", code: "error" });
            }
        }
        else {
            res.status(400).json(valid.error.details);
        }
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const deletePet = async (req, res) => {
    try {
        let getuserId = req._id;
        let idDel = req.params.idDel;
      
        let checkPetUserToToken = await petModel.findOne({_id:idDel,user_id:getuserId})
        console.log(checkPetUserToToken)
        if(!checkPetUserToToken){
          return res.status(400).json({error:"User is not the pets owner,Unauthorized to delete"})
        }
      
        petModel.deleteOne({_id:idDel},(err, data) => {
          if (err) { res.status(400).json(err) }
          res.json(data);
        })

    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}

const searchPet = async (req, res) => {
    try {
        let searchQ = req.query.q;
        let mySearch = new RegExp(searchQ);
      
        petModel.find({ $or: [{ name: mySearch }, { gender: mySearch }] })
          .then(data => {
            res.json(data)
          })
          .catch(err => {
            res.status(400).json({ err })
          })

    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message,
        })
    }
}



module.exports = {
    getPets,
    getPet,
    addPet,
    editPet,
    deletePet,
    searchPet
};