const S = require("sequelize");
const db = require("../db/index");

class Operations extends S.Model {}

Operations.init(
  {
    concept: {
      type: S.TEXT,
      allowNull: false,
    },
    amount: {
      type: S.FLOAT,
      allowNull: false,
    },
    date: {
      type: S.STRING,
      allowNull: false,
    },
    type: {
      type: S.ENUM("ingreso", "egreso"),
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "operations" }
);

module.exports = Operations;
