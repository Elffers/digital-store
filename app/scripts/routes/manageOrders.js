App.ManageOrders.Route = Ember.Route.extend({
  model: function(){
    return this.store.find('order')
  }
})