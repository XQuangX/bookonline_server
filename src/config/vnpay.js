const vnpayConfig = {
  vnp_TmnCode: "EDDYBOIG",
  vnp_HashSecret: "HETRKGDYEHAKNONNGHZEUMUNNUCDHCXR",
  vnp_Url: "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html",
  vnp_Api: "https://sandbox.vnpayment.vn/merchant_webapi/api/transaction",
  vnp_ReturnUrl: "https://bookonline-client.vercel.app/order/checkoutSuccess",
};

module.exports = { vnpayConfig };
