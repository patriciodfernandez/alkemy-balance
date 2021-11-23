const S = require("sequelize");
const db = require("../db/index");

class Categories extends S.Model {}

Categories.init(
  {
    insumos: {
      type: S.BOOLEAN,
      allowNull: false,
    },
    comida: {
      type: S.BOOLEAN,
      allowNull: false,
    },
    servicios: {
      type: S.BOOLEAN,
      allowNull: false,
    },
    impuestos: {
      type: S.BOOLEAN,
      allowNull: false,
    },
    gastosgenerales: {
      type: S.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "categories" }
);

module.exports = Categories;
