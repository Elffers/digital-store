App.AdminRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("product");
  },

  actions: {
    deleteProduct: function(product){
      product.deleteRecord();
      product.save();
    }

  }
})