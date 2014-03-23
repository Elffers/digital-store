App.ProductEditRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("product", params.product_id);
  },
  actions: {
    update: function(proxy) {
      var product = this.modelFor("productEdit");
      product.set('name', proxy.get('name'));
      product.set('description', proxy.get('description'));
      product.set('image', proxy.get('image'));
      product.set('avatar', proxy.get('avatar'));
      product.save();
      this.transitionTo('admin');
    }
  }
})