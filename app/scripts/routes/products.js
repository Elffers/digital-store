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
          current_price:
          product.get('price')
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

// get cart
        // create an item
        // add item to cart
        // save item
      // transition to cart (redirect to cart show)

      // var store = this.store;
      // var newItem = store.createRecord("item", { quantity: 1 });
      // newItem.save();

      // var currentCart = store.find("cart", 1).then(function(cart) {
      //   newItem.set('cart', cart);
      // });

      // console.log(currentCart);
      // console.log(newItem);

      // currentCart.get("items").then(function(items) {
      //   items.pushObject(newItem);
      // });

// store.find('product', 2).then(function(product){
      //   newItem.set('product', product);
      // });