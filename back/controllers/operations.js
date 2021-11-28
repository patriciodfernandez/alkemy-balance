const { Operations, Categories } = require("../models/Index");
const { Op } = require("sequelize");

const operationsController = {
  
 

  

  addOne(req, res, next) {
    Operations.create(req.body)

      .then((product) => res.send(product))
      .catch((err) => console.log(err));
  },

  deleteOne(req, res, next) {
    Operations.findByPk(req.params.id)
      .then((product) =>
        product
          .destroy()
          .then((product) =>
            Operations.findAll().then((products) => res.send(products))
          )
      )
      .catch((err) => next(err));
  },
  editOne(req, res, next) {
    console.log("ENTRE A ESTE CONTROLLER", req.body);
    Operations.findByPk(req.params.id)
      .then((product) => {
        console.log(product);
        return product.update(req.body);
      })
      .then((product) => {
        res.send(product);
      })
      .catch((err) => next(err));
  },

   
 
   
};

module.exports = operationsController;
