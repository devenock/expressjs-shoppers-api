const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Shopper Express API with Swagger",
      version: "0.1.0",
      description:
        "An Express.js version of the Shopper API documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Enock Omondi",
        url: "https://github.com/Trend20/expressjs-shoppers-api",
        email: "enockomondi305@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js", "./docs/*.js"],
};

module.exports = options;
