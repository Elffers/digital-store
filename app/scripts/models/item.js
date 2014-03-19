App.Item = DS.Model.extend({
  product: DS.belongsTo('product', {async: true }),
  quantity: DS.attr('number'),
  cart: DS.belongsTo('cart', {async: true }),
  order: DS.belongsTo('order', {async: true }),
  current_price: DS.attr('number'),
  subtotal: function(){
    return this.get('quantity') * this.get('current_price')
  }.property('quantity', 'current_price')
});

// App.Item.FIXTURES = [
//   {
//     id: 1,
//     product: 1,
//     quantity: 1,
//     cart: 1,
//     current_price: 1000
//   }, {
//     id: 2,
//     product: 2,
//     quantity: 5,
//     cart: 2,
//     current_price: 2550
//   }, {
//     id: 3,
//     product: 3,
//     quantity: 1,
//     cart: 1,
//     current_price: 2550
//   }, {
//     id: 4,
//     product: 4,
//     quantity: 1,
//     cart: 2,
//     current_price: 2550
//   }, {
//     id: 5,
//     product: 5,
//     quantity: 1,
//     cart: 1,
//     current_price: 2550
//   }, {
//     id: 6,
//     product: 6,
//     quantity: 1,
//     cart: 2,
//     current_price: 2550
//   }
// ]