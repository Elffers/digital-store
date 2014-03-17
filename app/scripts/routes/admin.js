App.AdminRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("order");
  },
  actions: {
    update_status: function(order){
      console.log('paid');
      order.set('status', 'paid')
    }

  }

  // renderTemplate: function() {
  //   // var productsController = this.controllerFor('products');
  //   // var ordersController = this.controllerFor('orders');

  //   // this.render('products', {   // the template to render
  //   //   into: 'admin',                // the route to render into
  //   //   outlet: 'products',           // the name of the outlet in the route's template
  //   //   controller: productsController        // the controller to use for the template
  //   // });
  //   this.render('orders', {
  //     outlet: 'orders'
  //   });
  // }

})