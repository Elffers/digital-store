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
})
