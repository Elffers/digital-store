App.CheckoutRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("cart", params.cart_id);
  },

  renderTemplate: function() {
    this.render({
      outlet: 'checkout',
      into: 'cart'
    });
  }

})