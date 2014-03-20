App.Router.map(function(){
  this.route('home', { path: '/'});

  this.resource('products', function(){
    this.resource('product', { path: ':product_id' })
  });

  this.resource('orders');
  this.resource('order', { path: '/order' });

  this.resource('cart',function(){
    this.route('checkout')
  });

  this.route('admin');

});