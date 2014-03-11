App.Item = DS.Model.extend({
  product: DS.belongsTo('product'),
  quantity: DS.attr('integer'),
  cart: DS.belongsTo('cart'),
  current_price: DS.attr('string')
})

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    quantity: 2,
    cart: 1,
    current_price: "1099"
  }, {
    id: 2,
    product: 2,
    quantity: 5,
    cart: 2,
    current_price: "2550"
  }, {
    id: 3,
    product: 3,
    quantity: 1,
    cart: 1,
    current_price: "2550"
  }, {
    id: 4,
    product: 4,
    quantity: 1,
    cart: 2,
    current_price: "2550"
  }, {
    id: 5,
    product: 5,
    quantity: 2,
    cart: 1,
    current_price: "2550"
  }, {
    id: 6,
    product: 6,
    quantity: 1,
    cart: 2,
    current_price: "2550"
  }
]