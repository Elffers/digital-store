App.Router.map(function(){
  this.route('products', { path: '/'});

  this.resource('products', function(){
    this.resource('product', { path: ':product_id' })
  });

  this.resource('orders');
  this.resource('order', { path: '/orders/:order_id' });

  this.resource('cart',function(){
    this.route('checkout')
  });

  this.route('admin');

});