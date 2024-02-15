const express = require("express");
const {
  initializePayment,
  verifyPayment,
  getPaymentReceipt,
  webhook,
} = require("../controllers/payment");
const router = express.Router();

router.post("/", initializePayment);

router.get("/create-payment", verifyPayment);

router.get("/receipt", getPaymentReceipt);

router.post("/webhook", webhook);

module.exports = router;
