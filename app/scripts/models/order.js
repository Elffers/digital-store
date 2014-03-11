App.Order = DS.Model.extend({
  cart: DS.belongsTo('cart'),
  customer_name: DS.attr('string'),
  email: DS.attr('string'),
  status: DS.attr('string'),
  transaction: DS.attr('string')
})

App.Cart.FIXTURES = [
  {
    id: 1,
    cart: 1,
    customer_name: "Ada Lovelace",
    email: 'adarocks@lovelace.com',
    status: 'paid',
    transaction: 1
  }
]