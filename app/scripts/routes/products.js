App.ProductsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("product");
  },
  actions: {
    addToCart: function(product) {
      var store = this.store
      this.store.find('cart', 1).then(function(cart){
        var newItem = store.createRecord('item', {
          product: product,
          cart: cart,
          quantity: 1,
          current_price: product.get('price')
        });

        cart.get("items").then(function(items){
          items.pushObject(newItem);
        });

        newItem.save();
      });

      this.transitionTo('cart', 1);
    },
  },

  // setupController: function(controller, model) {
  //   this.controllerFor('cart').set('model', this.store.find('cart', 1));
  //   controller.set('model', model);
  // },
})
      // var store = this.store;
      // var newItem = store.createRecord("item", { quantity: 1 });
      // newItem.save();

      // var currentCart = store.find("cart", 1).then(function(cart) {
      //   newItem.set('cart', cart);
      // });

      // currentCart.get("items").then(function(items) {
      //   items.pushObject(newItem);
      // });

      // store.find('product', 2).then(function(product){
      //   newItem.set('product', product);
      // });