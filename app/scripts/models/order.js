App.Order = DS.Model.extend({
  cart: DS.belongsTo('cart', {async: true }),
  customer_name: DS.attr('string'),
  email: DS.attr('string'),
  status: DS.attr('string'),
});

App.Order.FIXTURES = [
  {
    id: 1,
    cart: 1,
    customer_name: "Ada Lovelace",
    email: 'adarocks@lovelace.com',
    status: 'pending',
  }, {
    id: 2,
    cart: 2,
    customer_name: "Eric Hodel",
    email: 'eric@hodel.com',
    status: 'paid',
  }
]