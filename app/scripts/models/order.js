App.Order = DS.Model.extend({
  cart: DS.belongsTo('cart', {async: true }),
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  status: DS.attr('string'),
  credit_card: DS.attr('string'),
  cvv: DS.attr('string'),
  zip_code: DS.attr('string'),
  expiration: DS.attr('string'),
  customer_name: function(){
    return this.get('first_name') + " " + this.get('last_name')
  }.property('first_name', 'last_name')
});

App.Order.FIXTURES = [
  {
    id: 1,
    cart: 1,
    first_name: "Ada",
    last_name: "Lovelace",
    email: 'adarocks@lovelace.com',
    status: 'pending',
    credit_card: '1234123412341234',
    cvv: '123',
    zip_code: '12345',
    expiration: '07/2017'
  }, {
    id: 2,
    cart: 2,
    first_name: "Eric",
    last_name: "Hodel",
    email: 'eric@hodel.com',
    status: 'paid',
    credit_card: '1234123412341234',
    cvv: '123',
    zip_code: '12345',
    expiration: '07/2017'
  }
]