const express = require('express');
const { petModel } = require("../models/pets");
const { validPet ,validEditPet } = require("../validation/pets");

const getPets = (req, res) => {
    try {
        petModel.find({})
            .limit(5)
            .then(data => {
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

const getPet = (req, res) => {
    try {
        let getuserId = req._id;
        petModel.find({ user_id: getuserId }, { user_id: 0 })
            .limit(5)
            .then(data => {
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

const getPetById = (req, res) => {
    try {
        let petId = req.params.id;
        petModel.find({ _id: petId }, { _id: 0 })
            .then(data => {
                res.json(data)
            })
            .catch(err => { //not found
                res.status(401).json(err)
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
                petModel.find({ name: req.body.name, user_id: getuserId }, async (err, data) => {
                    if (data.length >= 1) { // 1 meens found a match 
                        res.status(402).json({ message: "pet name already in system for the user", code: "duplicate" });
                    }
                    else {
                        //add pet
                        req.body.user_id = getuserId;
                        let data = await petModel.insertMany([req.body]);
                        res.json(data);
                    }
                });
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
            return res.status(401).json({ error: "User is not the pets owner,Unauthorized to edit" })
        }

        let valid = validEditPet(req.body);
        if (!valid.error) {
            try {
                req.body.user_id = getuserId;
                let data = await petModel.updateOne({ _id: req.body.id }, req.body);
                res.json(data)
            }
            catch (err) {
                res.status(402).json({ message: "Error try again", code: "error" });
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

const editPetElements = async (req, res) => {
    try {
        let getuserId = req._id;
        let checkPetUserToToken = await petModel.findOne({ _id: req.body.id, user_id: getuserId })
        console.log(checkPetUserToToken)
 
        if (!checkPetUserToToken) {
            return res.status(401).json({ error: "User is not the pets owner,Unauthorized to edit" })
        }

        let valid = validEditPet(req.body);
        if (!valid.error) {
            try {
                req.body.user_id = getuserId;
                let data = await petModel.updateOne({ _id: req.body.id }, req.body);
                console.log(data);
                res.json(data)
            }
            catch (err) {
                console.log(err);
                console.log(valid.error);
                res.status(402).json({ message: "Error try again", code: "error" });
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

        let checkPetUserToToken = await petModel.findOne({ _id: idDel, user_id: getuserId })
        console.log(checkPetUserToToken)
        if (!checkPetUserToToken) {
            return res.status(400).json({ error: "User is not the pets owner,Unauthorized to delete" })
        }

        petModel.deleteOne({ _id: idDel }, (err, data) => {
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

const searchPet = (req, res) => {
    try {
        let searchQ = req.query.q;
        let mySearch = new RegExp(searchQ);

        petModel.find({ $or: [{ name: mySearch }, { gender: mySearch }] })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json({ err });
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
    getPetById,
    addPet,
    editPet,
    deletePet,
    searchPet,
    editPetElements
};