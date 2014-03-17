App.CheckoutRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("cart", params.cart_id);
  }



  // actions: {
  //   billing: function(proxy){
  //     var order = this.store.createRecord("order", proxy);
  //     order.save().then(
  //       function(order){
  //         // render template
  //       },
  //       function(error){
  //         // stuff
  //       }
  //     );

  //   }
  // renderTemplate: function() {
  //   this.render('checkout',{
  //     outlet: 'checkout',
  //     into: 'cart'
  //   });
  // }

})