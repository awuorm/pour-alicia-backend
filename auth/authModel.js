const db = require("../data/dbConfig");

module.exports = {
    add,
    findBy,
    find
}

function find() {
    return db("users");
}

function add(user) {
   return db("users").insert(user);
}

function findBy(username) {
    return db("users").where({username}).first();
}