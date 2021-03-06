App.Router.map(function(){
  this.route('products', { path: '/'});

  this.resource('products', function(){
    this.resource('product', { path: ':product_id' })
  });

  this.resource('order', { path: '/orders/:order_id' });

  this.resource('cart',function(){
    this.route('checkout')
  });

  this.route('admin');
  this.route('productNew', { path:'products/new' });
  this.route('productEdit', { path:'products/:product_id/edit' });
  this.resource('orders', { path: '/admin/orders' });

});