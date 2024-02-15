require("dotenv").config();
const {
  beginPayment,
  createPayment,
  generateReceipt,
} = require("../services/payment.service");
const crypto = require("crypto");

const initializePayment = async (req, res) => {
  try {
    const response = await beginPayment(req.body);
    return res.status(201).json({ status: "success", data: response });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const response = await createPayment(req.query);
    res.status(200).json({ status: "success", data: response });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

const getPaymentReceipt = async (req, res) => {
  try {
    const response = await generateReceipt(req.body);
    res.status(201).json({ status: "success", data: response });
  } catch (error) {
    res.status(500).json({ status: "failed", message: error.message });
  }
};

const webhook = async (req, res) => {
  try {
    const hash = crypto
      .createHmac("sha512", process.env.MYSECRETKEY)
      .update(JSON.stringify(req.body))
      .digest("hex");
    if (hash === req.headers["x-paystack-signature"]) {
      const event = req.body;
      if (event && event.event === "transfer.success") {
        return res.status(200).json({ status: "Transfer successful" });
      }
    }
  } catch (error) {
    res.status(500).json({ status: "transfer failed", message: error.message });
  }
};

module.exports = {
  initializePayment,
  getPaymentReceipt,
  verifyPayment,
  webhook,
};
