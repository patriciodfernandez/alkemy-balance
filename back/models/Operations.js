const S = require("sequelize");
const db = require("../db/index");

class Operations extends S.Model {}

Operations.init(
  {
    concept: {
      type: S.TEXT,
    },
    amount: {
      type: S.FLOAT,
    },
    date: {
      type: S.STRING,
    },
    type: {
      type: S.ENUM("ingreso", "egreso"),
    },
  },
  { sequelize: db, modelName: "operations" }
);

module.exports = Operations;
