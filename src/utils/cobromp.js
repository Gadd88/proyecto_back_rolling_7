const { MercadoPagoConfig, Preference } = require("mercadopago");

const cobroConMp = async (data) => {
  const client = new MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN_MP,
  });
  const preference = new Preference(client);
  try {
    const result = await preference.create({
      body: {
        items: data.map(({ title, quantity, unit_price }) => {
          return {
            title: title,
            quantity: +quantity,
            unit_price: +unit_price,
            currency_id: "ARS",
          };
        }),
        back_urls: {
          success: "http://onlypan.netlify.app/",
          failure: "http://onlypan.netlify.app/",
          pending: "http://onlypan.netlify.app/",
        },
        auto_return: "approved",
      },
    });
    return {
      urlPay: result.id,
      statusCode: 200,
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = cobroConMp;
