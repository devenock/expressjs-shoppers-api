const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Shopper Express Public API",
      version: "1.0.0",
      description:
        "The Shopper Express API allows developers to build applications that interact with the Shopper Express e-commerce platform. It supports operations such as managing products, categories, users, and orders.",
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
        url: "https://api.shopperexpress.com/v1",
        description: "Production server",
      },
      {
        url: "https://staging.api.shopperexpress.com/v1",
        description: "Staging server",
      },
      {
        url: "http://localhost:5000/v1",
        description: "Local development server",
      },
    ],
  },
  apis: ["./docs/**/*.js"],
};

module.exports = options;
