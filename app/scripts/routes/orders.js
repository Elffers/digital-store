App.OrdersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("order");
  },

  actions: {
    update: function(order){
      order.set('status', 'paid');
      order.save()
    }
  }
})