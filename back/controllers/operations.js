const { Operations, Categories } = require("../models/Index");
const { Op } = require("sequelize");

const operationsController = {
  getAll(req, res, next) {
    const limit = req.query.limit || null;
    const page = req.query.page || 0;
    const offset = limit * (page - 1) || 0;

    if (!limit) {
      console.log("no limit");
      Operations.getAllWithReview()
        .then((products) => res.send(products))
        .catch((err) => next(err));
    } else {
      Operations.count()
        .then((n) => {
          const numOfPages = n / limit || 1;
          return { totalPages: numOfPages, currentPage: Number(page) };
        })
        .then((pages) => {
          console.log("hola");

          console.log("offset: ", offset, "page: ", page, "limit ", limit);
          Operations.getAllWithReview(limit, offset).then((products) =>
            res.send([products, pages])
          );
        });
    }
  },
  getOne(req, res, next) {
    console.log("REQ PARAAAAMS", req.params);
    const queryUser = req.params.name;
    Operations.findAll({
      where: {
        name: { [Op.iLike]: `%${queryUser}%` },
      },
    })
      .then((user) => res.send(user))
      .catch((err) => next(err));
  },

  byCategory(req, res, next) {
    Categories.findOne({
      where: { id: req.params.id },
      include: [{ model: Operations }],
    })
      .then((category) => res.send(category.dataValues.products))
      .catch((err) => next(err));
  },

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

  getProductsByKeyword(req, res, next) {
    const baseQuery = req.query.name;
    const splitQuery = req.query.name.split(" ");
    console.log("SPLITEADO", splitQuery);
    Operations.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${baseQuery}%` } },
          {
            name: {
              [Op.and]: [
                { [Op.iLike]: `%${splitQuery[0]}%` },
                { [Op.iLike]: `%${splitQuery[1]}%` },
              ],
            },
          },
          { name: { [Op.in]: splitQuery } },
        ],
      },
    })
      .then((productsByKeyword) => {
        console.log("LO ENCONTRADO", productsByKeyword);
        res.send(productsByKeyword);
      })
      .catch((err) => next(err));
  },

  getById(req, res, next) {
    Operations.findByPk(Number(req.params.id))
      .then((product) => res.send(product))
      .catch(next);
  },

  findOneProduct(req, res, next) {
    const query = req.params.name;
    Operations.findAll({
      where: {
        name: { [Op.iLike]: `%${query}%` },
      },
    })
      .then((user) => res.send(user))
      .catch((err) => next(err));
  },

  getAllProductsByPages(req, res, next) {
    const limit = req.query.limit || null;
    const offset = req.query.offset || null;
    Operations.count()
      .then((n) => {
        const numOfPages = n / limit || 1;
        const currentPage = offset / limit || 1;
        return { total: numOfPages, currentPage };
      })
      .then((pages) => {
        Operations.getAllWithReview(limit, offset).then((products) =>
          res.send({ pages, products })
        );
      });
  },
};

module.exports = operationsController;
