const db = require("../db/index");
const Categories = require("./Categories");
const Operations = require("./Operations");
const User = require("./Users");

Operations.belongsTo(User);
Categories.hasOne(Operations);


module.exports = { db, Categories, Operations, User };
