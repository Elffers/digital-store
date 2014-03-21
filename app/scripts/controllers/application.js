App.ApplicationController = Ember.ObjectController.extend({
  cart: null,
  init: function () {
    if (typeof(localStorage.cart_id) === "undefined") {
      var cart = this.store.createRecord("cart");
      cart.save().then(function(cart) {
        localStorage.cart_id = cart.get('id');
        return cart;
        });
      } else {
        return this.store.find("cart", localStorage.cart_id);
    };

    var cart = this.store.find("cart", localStorage.cart_id);
    this.set("cart", cart);
  }

})