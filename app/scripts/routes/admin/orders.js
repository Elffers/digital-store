App.AdminOrdersRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("order");
  }
})