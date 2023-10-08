const mongoose = require("mongoose");
const helper = require("../../src/helpers/db");

const mongodbUrl = "mongodb://127.0.0.1:27017/mercadotech-tests";

mongoose
  .connect(mongodbUrl)
  .catch((error) => console.log(error.reason));

async function createMock() {
  const client = await helper.insertNewDocument("client", { fullname: "Juan Pérez" });
  const card = await helper.insertNewDocument("card", { num: "1234123412343242", client });
  const paymentStatus = await helper.insertNewDocument("paymentStatus", { name: "Aprobado" });

  const promises = [
    helper.insertNewDocument("payment", {
      amount: 4000, state: paymentStatus, card, date: new Date(2001, 2, 16),
    }),
    helper.insertNewDocument("payment", {
      amount: 5000, state: paymentStatus, card, date: new Date(2001, 2, 16),
    }),
    helper.insertNewDocument("payment", {
      amount: 6000, state: paymentStatus, card, date: new Date(2001, 2, 16),
    }),

  ];

  return new Promise((resolve, reject) => {
    Promise.all(promises)
      .then(() => resolve("done"), (error) => reject(error));
  });
}

createMock().then((res) => {
  console.log(res);
});
