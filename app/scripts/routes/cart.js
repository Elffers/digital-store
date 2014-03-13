App.CartRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("cart", params.cart_id);
  },
  actions: {
    checkout: function(cart){
      this.transitionTo('cart.checkout', cart);
    },

    removeItem: function(item) {
      var store = this.store
      this.store.find('cart', 1).then(function(cart){
        store.deleteRecord(item);
        cart.get("items").then(function(items){
          items.removeObject(item);
        });
        item.save();
      });
    },
  }

})