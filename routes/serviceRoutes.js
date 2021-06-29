const express = require("express");
const router = express.Router();

const {
  servicesList,
  servicesCreate,
  fetchService,
  productsCreat,
} = require("../controllers/servicesControllers");

const upload = require("../middleware/multer");

router.param("serviceId", async (req, res, next, serviceId) => {
  const service = await fetchService(serviceId, next);
  if (service) {
    req.service = service;
    next();
  } else next({ message: "Service Not found", status: 404 });
});
router.post("/:serviceId/products", upload.single("url"), productsCreat);
router.get("/", servicesList);
router.post("/", upload.single("image"), servicesCreate);
module.exports = router;

