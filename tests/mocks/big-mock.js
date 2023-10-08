const mongoose = require("mongoose");
const helper = require("../../src/helpers/db");

// const mongodbUrl = config.MONGODB_URL;
const mongodbUrl = "mongodb://127.0.0.1:27017/mercadotech-tests";

mongoose
  .connect(mongodbUrl)
  .catch((error) => console.log(error.reason));

async function createClients() {
  const clients = [
    helper.insertNewDocument("client", { fullname: "Juan Pérez" }),
    helper.insertNewDocument("client", { fullname: "Juan Paéz" }),
    helper.insertNewDocument("client", { fullname: "Santiago Domínguez" }),
    helper.insertNewDocument("client", { fullname: "Juana Lúquez" }),
    helper.insertNewDocument("client", { fullname: "Josefina Chagnauld" }),
    helper.insertNewDocument("client", { fullname: "Guadalupe Gómez" }),
    helper.insertNewDocument("client", { fullname: "Ana Álvarez" }),
    helper.insertNewDocument("client", { fullname: "Juana Banana" }),
    helper.insertNewDocument("client", { fullname: "Esteban Dido" }),
    helper.insertNewDocument("client", { fullname: "Alan Britos" }),
  ];

  return new Promise((resolve, reject) => {
    Promise.all(clients)
      .then((res) => resolve(res), (error) => reject(error));
  });
}

async function createCards(clients) {
  const cards = [
    helper.insertNewDocument("card", { num: "1234123412343242", client: clients[0] }),
    helper.insertNewDocument("card", { num: "3412341235443905", client: clients[1] }),
    helper.insertNewDocument("card", { num: "5434123414343342", client: clients[2] }),
    helper.insertNewDocument("card", { num: "5324123412487443", client: clients[3] }),
    helper.insertNewDocument("card", { num: "8654126512343246", client: clients[4] }),
    helper.insertNewDocument("card", { num: "8234123412353422", client: clients[5] }),
    helper.insertNewDocument("card", { num: "9234123413214322", client: clients[6] }),
    helper.insertNewDocument("card", { num: "1643754655764665", client: clients[7] }),
    helper.insertNewDocument("card", { num: "6257567865687876", client: clients[8] }),
    helper.insertNewDocument("card", { num: "8483254392895434", client: clients[9] }),
  ];

  return new Promise((resolve, reject) => {
    Promise.all(cards)
      .then((res) => resolve(res), (error) => reject(error));
  });
}

async function createPaymentStatuses() {
  const paymentStatuses = [
    helper.insertNewDocument("paymentStatus", { name: "Aprobado" }),
    helper.insertNewDocument("paymentStatus", { name: "En disputa" }),
    helper.insertNewDocument("paymentStatus", { name: "Pendiente" }),
    helper.insertNewDocument("paymentStatus", { name: "Cancelado" }),
  ];

  return new Promise((resolve, reject) => {
    Promise.all(paymentStatuses)
      .then(
        (res) => resolve(res),
        (error) => reject(error),
      );
  });
}

async function createPayments(cards, paymentStatuses) {
  const payments = [
    helper.insertNewDocument("payment", {
      amount: 4000, state: paymentStatuses[0], card: cards[0], date: new Date(2001, 2, 16),
    }),
    helper.insertNewDocument("payment", {
      amount: 33000, state: paymentStatuses[0], card: cards[0], date: new Date(2001, 2, 12),
    }),
    helper.insertNewDocument("payment", {
      amount: 3000, state: paymentStatuses[0], card: cards[0], date: new Date(2001, 2, 12),
    }),
    helper.insertNewDocument("payment", {
      amount: 3300, state: paymentStatuses[0], card: cards[0], date: new Date(2001, 2, 12),
    }),
    helper.insertNewDocument("payment", {
      amount: 54000, state: paymentStatuses[0], card: cards[1], date: new Date(2003, 3, 14),
    }),
    helper.insertNewDocument("payment", {
      amount: 532000, state: paymentStatuses[1], card: cards[1], date: new Date(2001, 4, 13),
    }),
    helper.insertNewDocument("payment", {
      amount: 100, state: paymentStatuses[2], card: cards[2], date: new Date(2001, 2, 22),
    }),
    helper.insertNewDocument("payment", {
      amount: 400000, state: paymentStatuses[3], card: cards[2], date: new Date(2001, 2, 5),
    }),
    helper.insertNewDocument("payment", {
      amount: 30000, state: paymentStatuses[0], card: cards[3], date: new Date(1988, 2, 12),
    }),
    helper.insertNewDocument("payment", {
      amount: 321400, state: paymentStatuses[0], card: cards[3], date: new Date(1986, 2, 12),
    }),
    helper.insertNewDocument("payment", {
      amount: 430000, state: paymentStatuses[1], card: cards[3], date: new Date(1999, 2, 12),
    }),
    helper.insertNewDocument("payment", {
      amount: 80000, state: paymentStatuses[0], card: cards[4], date: new Date(2005, 2, 12),
    }),
    helper.insertNewDocument("payment", {
      amount: 30000, state: paymentStatuses[3], card: cards[5], date: new Date(1921, 2, 12),
    }),
    helper.insertNewDocument("payment", {
      amount: 7000, state: paymentStatuses[2], card: cards[6], date: new Date(2005, 2, 12),
    }),
    helper.insertNewDocument("payment", {
      amount: 800000, state: paymentStatuses[3], card: cards[7], date: new Date(2007, 2, 17),
    }),
    helper.insertNewDocument("payment", {
      amount: 10000, state: paymentStatuses[3], card: cards[8], date: new Date(2009, 2, 16),
    }),
    helper.insertNewDocument("payment", {
      amount: 10000, state: paymentStatuses[0], card: cards[8], date: new Date(2001, 2, 12),
    }),
    helper.insertNewDocument("payment", {
      amount: 10400, state: paymentStatuses[0], card: cards[8], date: new Date(2011, 2, 15),
    }),
    helper.insertNewDocument("payment", {
      amount: 220000, state: paymentStatuses[0], card: cards[8], date: new Date(2015, 4, 12),
    }),
  ];

  return new Promise((resolve, reject) => {
    Promise.all(payments)
      .then(
        (res) => resolve(res),
        (error) => reject(error),
      );
  });
}

async function createMock() {
  createClients().then((clients) => {
    createCards(clients).then((cards) => {
      createPaymentStatuses().then(
        (paymentStatuses) => createPayments(cards, paymentStatuses).then((payments) => console.log(
          "created ",
          clients.length,
          " cards\n",
          "created ",
          cards.length,
          " cards\n",
          "created ",
          paymentStatuses.length,
          " payment statuses\n",
          "created ",
          payments.length,
          " payments\n",
        )),

        (error) => console.log(error),
      );
    });
  });
}

createMock();
