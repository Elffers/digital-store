App.Router.map(function(){
  this.route('home', { path: '/'})
  this.resource('products', function(){
    this.resource('product', { path: ':product_id'})
  })
  this.resource('cart', { path: '/cart/:cart_id'})
});