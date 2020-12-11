const express = require('express');
const { socialModel } = require("../models/social_model");
const { validSocial, validEditSocial } = require("../validation/social");

const getSocials = async (req, res) => {
    try {
        socialModel.find({}, { img: 1, title: 1, date_time: 1 })
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

const getSocial = async (req, res) => {
    try {
        let getuserId = req._id;
        socialModel.find({ user_id: getuserId }, { img: 1, title: 1, date_time: 1 })
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

const searchSocials = async (req, res) => {
    try {
        let searchQ = req.query.q;
        let mySearch = new RegExp(searchQ);

        socialModel.find({ $or: [{ title: mySearch }, { type: mySearch }, { pet_id: mySearch }, { user_id: mySearch }] })
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

const addSocial = async (req, res) => {
    console.log("add social");
    try {
        let getuserId = req._id;
        let valid = validSocial(req.body);
        if (!valid.error) {
            try {
                req.body.user_id = getuserId;
                let data = await socialModel.insertMany([req.body]);
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

const editSocial = async (req, res) => {
    try {
        let getuserId = req._id;

        let checkPetUserToToken = await socialModel.findOne({ _id: req.body.id, user_id: getuserId })
        console.log(checkPetUserToToken)
        if (!checkPetUserToToken) {
            return res.status(400).json({ error: "User is not the image owner,Unauthorized to edit" })
        }

        let valid = validEditSocial(req.body);
        if (!valid.error) {
            try {
                // req.body.user_id = getuserId;
                let data = await socialModel.updateOne({ _id: req.body.id }, req.body);
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

const deleteSocial = async (req, res) => {
    try {
        let getuserId = req._id;
        let idDel = req.params.idDel;
    
        let checkPetUserToToken = await socialModel.findOne({ _id: idDel, user_id: getuserId })
        console.log(checkPetUserToToken)
        if (!checkPetUserToToken) {
            return res.status(400).json({ error: "Unauthorized to delete" })
        }
    
        socialModel.deleteOne({ _id: idDel }, (err, data) => {
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


module.exports = {
    getSocials,
    getSocial,
    searchSocials,
    addSocial,
    editSocial,
    deleteSocial
};