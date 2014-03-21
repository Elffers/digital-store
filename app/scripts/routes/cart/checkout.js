App.CartCheckoutRoute = Ember.Route.extend({
  model: function () {
    return {};
  },

  actions: {
    purchase: function(proxy){
      var self = this;
      this.controllerFor('application').get('cart').then(function(cart){
        var order = this.store.createRecord("order", proxy);
        // self.store.find("cart", localStorage.cart_id).then(function(cart){
        order.set('status', 'pending');
        order.set('cart', cart);
        order.set('total', cart.get('total')
        // })
        order.save().then(function(order){
        // if saves, success, and then
          // creates new cart
          var cart = self.store.createRecord('cart');

          // saves cart
          // resets localstorage
          cart.save().then(function(cart){
          localStorage.cart_id = cart.cart_id
          self.controllerFor('application').set('cart', self.store.find("cart", localStorage.cart_id))
        })
          // resets app controller cart attribute
          // transition to order

        function(error){
          console.log('OOPS');
          order.deleteRecord();
          alert(error.responseText)
        });
        self.transitionTo("order", order)
      });
    })
  },

  renderTemplate: function() {
    this.render({ outlet: 'checkout' });
  }

})