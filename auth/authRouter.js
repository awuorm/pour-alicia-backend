const db = require("./authModel");
const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/register",handleUserRegistration);

function handleUserRegistration(req,res) {
    const user = {
        username: req.body.username,
        age: req.body.age,
        password: req.body.password
    }
    const hash  = bcrypt.hashSync(user.password);
    user.password = hash;
    db.add(user).then(user => {
        res.status(201).json({success: `Hello ${user.username}`});
        console.log(user);
    }).catch(error => {
        res.status(500).json({errorMessage: error.message});
        console.log(error);
    }

    module.exports = router;

    )
}