// App.ApplicationRoute = Ember.Route.extend({
//   model: function () {
//     if (typeof(localStorage.cartId) === "undefined") {
//       var cart = this.store.createRecord("cart");
//       cart.save().then(function (cart) {
//         localStorage.cartId = cart.get('id');
//         return cart;
//       });
//     }
//   },
//   model: function () {
//     return this.store.find("cart", localStorage.cartId);
//   }
// });

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    if (typeof(localStorage.cart_id) === "undefined") {
      var cart = this.store.createRecord("cart");
      cart.save().then(function(cart) {
        localStorage.cart_id = cart.get('id');
        return cart;
        });
      } else {
        return this.store.find("cart", localStorage.cart_id);
    }
  }
});