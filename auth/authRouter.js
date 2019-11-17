const db = require("./authModel");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", handleUserRegistration);
router.post("/login", handleUSerLogin);
router.get("/stories", handleUsersGet);

function handleUsersGet(req, res) {
  db.find()
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: error });
    });
}

function handleUSerLogin(req, res) {
  const { username, password } = req.body;
  db.findBy(username)
    .then(user => {
      if (bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res
          .status(200)
          .json({ success: `Welcome ${user.username}`, token: token });
      } else {
        res.status(403).json({ warning: "Please provide a valid password" });
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: error.message });
    });
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };

  const result = jwt.sign(payload, process.env.SECRET, options);
  return result;
}

function handleUserRegistration(req, res) {
  const user = {
    username: req.body.username,
    age: req.body.age,
    password: req.body.password
  };
  const hash = bcrypt.hashSync(user.password);
  user.password = hash;
  db.add(user)
    .then(data => {
      res
        .status(201)
        .json({ success: `REgistration successful for user ${user.username}` });
      console.log(data);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: error.message });
      console.log(error);
    });
}
module.exports = router;
