App.ProductsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("product");
  },
  actions: {
    addToCart: function(product){
      var store = this.store;
      this.controllerFor('application').get('cart').then(function(cart){
        cart.get('items').then(function(items){
          return items.find(function(item){
            return item.get("product").get('id') == product.get('id')
          })
        }).then(function(item){
          if (item) {
            item.incrementProperty("quantity");
            item.save();
          } else {
            var newItem = store.createRecord('item', {
                product: product,
                cart: cart,
                quantity: 1,
                current_price: product.get('price')
              });
            cart.get("items").pushObject(newItem);
            newItem.save();
          }
        })
      });
      this.transitionTo('cart');
    }
  }
})