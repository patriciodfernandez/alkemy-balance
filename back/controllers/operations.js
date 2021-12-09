const { Operations } = require("../models/Index");

const operationsController = {
  addOne(req, res, next) {
    Operations.create(req.body)
      .then((operation) => {
        res.status(200).send(operation);
      })
      .catch((err) => console.log(err));
  },
  getAll(req, res, next) {
    console.log(req.params);
    Operations.findAll()
      .then((operation) => res.send(operation))
      .catch((err) => next(err));
  },

  getById(req, res, next) {
    Operations.findByPk(Number(req.params.id))
      .then((operation) => res.send(operation))
      .catch(next);
  },
  editOne(req, res, next) {
    console.log("ENTRE A ESTE CONTROLLER", req.body);
    Operations.findByPk(req.params.id)
      .then((operation) => {
        console.log(operation);
        return operation.update(req.body);
      })
      .then((operation) => {
        res.send(operation);
      })
      .then((operation) =>
        Operations.findAll().then((operations) => res.send(operations))
      )
      .catch((err) => next(err));
  },

  deleteOne(req, res, next) {
    Operations.findByPk(req.params.id)
      .then((operation) =>
        operation
          .destroy()
          .then((operation) =>
            Operations.findAll().then((operations) => res.send(operations))
          )
      )
      .catch((err) => next(err));
  },
};

module.exports = operationsController;
