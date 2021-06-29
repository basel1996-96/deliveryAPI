const { Service,Product} = require("../db/models");

exports.fetchService = async (serviceId, next) => {
  try {
    const foundService = await Service.findByPk(serviceId);
    return foundService;
  } catch (error) {
    next(error);
  }
};

exports.servicesList = async (req, res, next) => {
  try {
    const allServices = await Service.findAll({
      attributes: { exclude: ["creatAt", "updateAt"] },
      include: {
        model: Product,
        as: "product",
        attributes: ["id"],
      },
    });
    res.json(allServices);
  } catch (error) {
    next(error);
  }
};



exports.servicesCreate = async (req, res, next) => {
  try {
    if (req.file)
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    // req.body.url = `http://${req.get("host")}/${req.file.path}`; work the same

    const newService = await Service.create(req.body);
    res.status(201).json(newService);
  } catch (error) {
    next(error);
  }
};
exports.productsCreat = async (req, res, next) => {
    try {
      if (req.file)
        req.body.url = `http://${req.get("host")}/media/${req.file.filename}`;
      // req.body.url = `http://${req.get("host")}/${req.file.path}`; work the same
      req.body.serviceId = req.service.id;
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  };

