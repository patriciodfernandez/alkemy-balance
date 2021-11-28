const { Operations } = require("../models/Index");
 
const operationsController = {
  addOne(req, res, next) {
    Operations.create(req.body)

      .then((operation) => res.send(operation))
      .catch((err) => console.log(err));
  },
};

module.exports = operationsController;
