App.CheckoutRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("cart", params.cart_id);
  },

  actions: {

  }
})