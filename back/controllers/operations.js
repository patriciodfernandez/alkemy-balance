const { Operations } = require("../models/Index");

const operationsController = {
  addOne(req, res, next) {
    Operations.create(req.body)
       .then((operation) => {
        res.status(200).send(operation);
       })
      .catch((err) => console.log(err));
  },
  getAll(req,res,next){
    console.log(req.params)
    Operations.findAll()
    .then((operation) => res.send(operation))
    .catch((err) => next(err));
  }
 
};

module.exports = operationsController;
