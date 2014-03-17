App.CartRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("cart", params.cart_id);
  },
  actions: {
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
    purchase: function(proxy){
      var self = this
      var order = this.store.createRecord("order", proxy);
      order.save().then(
        function(order){
          self.transitionTo("order", order)
        },
        function(error){
          console.log('OOPS')
        }
      );
    }
  }

})