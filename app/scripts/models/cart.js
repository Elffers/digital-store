App.Cart = DS.Model.extend({
  items: DS.hasMany('item'),
  order: DS.belongsTo('order')
})

App.Cart.FIXTURES = [
  {
    id: 1,
    order: 1,
    items: [1, 3, 5]
  }, {
    id: 2,
    order: 2,
    items: [2, 4, 6]
  }
]