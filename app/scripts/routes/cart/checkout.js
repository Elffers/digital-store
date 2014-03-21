App.CartCheckoutRoute = Ember.Route.extend({
  model: function () {
    return {};
  },

  actions: {
    purchase: function(proxy){
      var self = this;
      var order = this.store.createRecord("order", proxy);
      // var cart = this.modelFor('application');
      self.store.find("cart", localStorage.cart_id).then(function(cart){
        order.set('status', 'pending');
        order.set('cart', cart);
        order.set('total', cart.get('total'));
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
      });
    }
  },

  renderTemplate: function() {
    this.render({ outlet: 'checkout' });
  }

})