require("dotenv").config();
const {
  beginPayment,
  createPayment,
  generateReceipt,
  paymentWebhook,
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

// const verifySignature = (eventData, signature) => {
//   const hash = crypto
//     .createHmac("sha512", process.env.MYSECRETKEY)
//     .update(JSON.stringify(eventData))
//     .digest("hex");
//   return hash === signature;
// };

const webhook = async (req, res) => {
  try {
    const event = req.body;
    if (event?.event === "charge.success" && event?.data?.reference) {
      return res.status(200).json({ status: "Transaction successful" });
    }
  } catch (error) {
    console.error("Webhook processing error:", error);
    return res
      .status(500)
      .json({ status: "Webhook processing error", message: error.message });
  }
};

module.exports = {
  initializePayment,
  getPaymentReceipt,
  verifyPayment,
  webhook,
};
