App.CartCheckoutRoute = Ember.Route.extend({
  model: function () {
    return {};
  },

  actions: {
    purchase: function(proxy){
      var self = this;
      var order = this.store.createRecord("order", proxy);
      order.set('status', 'pending');
      this.controllerFor('application').get('cart').then(function(cart){
        order.set('cart', cart);
        order.set('total', cart.get('total'));
      }).then(function(){

        order.save().then(function(order){
            var cart = self.store.createRecord('cart');
            cart.save().then(function(cart){
              localStorage.cart_id = cart.cart_id;
              self.controllerFor('application').set('cart', self.store.find("cart", localStorage.cart_id))
            })
          },

          function(error){
            console.log('OOPS');
            order.deleteRecord();
            alert(error.responseText)
          })

        self.transitionTo("order", order)
        });

      }
    },

  renderTemplate: function() {
    this.render({ outlet: 'checkout' });
  }

})