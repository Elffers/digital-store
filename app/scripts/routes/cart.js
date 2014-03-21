App.CartRoute = Ember.Route.extend({
  model: function () {
    return this.controllerFor("application").get('cart')
  },
  actions: {
    removeItem: function(item) {
      var store = this.store;

      this.controllerFor('application').get('cart').then(function(cart){
        cart.get("items").then(function(items){
          items.removeObject(item);
          item.deleteRecord(item);
          item.save()
        })
      })
    },

    add: function(item){
      item.incrementProperty("quantity");
      item.save();
    },

    subtract: function(item){
      var quantity = item.get('quantity');
      if(quantity > 1) {
        item.decrementProperty("quantity");
        item.save();
      }
    }
  }
})

