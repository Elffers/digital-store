App.Router.map(function(){
  this.route('home', { path: '/'});

  this.resource('products', function(){
    this.resource('product', { path: ':product_id' })
  });

  this.resource('orders');
  this.resource('order', { path: '/order/:order_id' });

  this.resource('cart', { path: 'cart/:cart_id' }, function(){
    this.route('checkout')
  });

  this.route('admin');

});