App.Cart = DS.Model.extend({
  items: DS.hasMany('item', { async: true }),
});

App.Cart.FIXTURES = [
  {
    id: 1,
    items: [1, 3, 5]
  }, {
    id: 2,
    items: [2, 4, 6]
  }
]