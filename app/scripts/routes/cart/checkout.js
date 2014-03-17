App.CartCheckoutRoute = Ember.Route.extend({
  model: function () {
    return {};
  },

  actions: {
    purchase: function(proxy){
      var self = this
      var order = this.store.createRecord("order", proxy);
      order.set('status', 'pending');
      order.set('cart', this.modelFor('cart'));
      order.save().then(
        function(order){
          self.transitionTo("order", order)
        },
        function(error){
          console.log('OOPS');
          order.deleteRecord();
          alert(error.responseText)
        }
      );
    }
  }
})