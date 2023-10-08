module.exports = class PaymentDTO {
  constructor(payment) {
    // eslint-disable-next-line no-underscore-dangle
    this.id = String(payment._id);
    this.amount = Number(payment.amount);
    this.date = Date(payment.date);

    if (payment.state.name) { this.state = String(payment.state.name); }

    if (payment.card.num) { this.card_num = String(payment.card.num.slice(12, 16)); }

    if (payment.card.client.fullname) { this.client = String(payment.card.client.fullname); }
  }
};
