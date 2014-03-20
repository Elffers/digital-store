App.CartRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor("application")
  },
  actions: {
    removeItem: function(item) {
      var store = this.store;
      var cart = this.modelFor('application');
      cart.get("items").then(function(items){
        items.removeObject(item);
        item.deleteRecord(item);
        item.save();
      });
    },

    add: function(item){
      item.incrementProperty("quantity");
      item.save();
    }
  }
})

// purchase: function(proxy){
    //   var self = this
    //   var order = this.store.createRecord("order", proxy);
    //   debugger;
    //   order.set('status', 'pending');
    //   order.set('cart', this.modelFor('cart'));
    //   order.save().then(
    //     function(order){
    //       self.transitionTo("order", order)
    //     },
    //     function(error){
    //       console.log('OOPS');
    //       order.deleteRecord();
    //       alert(error.responseText)
    //     }
    //   );
    // }