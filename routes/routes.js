const { Router } = require("express");
const homeCtrl = require("../controllers/homeCtrl");

const router = Router();

router.get("/home/get", homeCtrl.find);

module.exports = router;
