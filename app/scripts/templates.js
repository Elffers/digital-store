Ember.TEMPLATES["admin"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Manage Orders");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Add Product");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tr>\n          <td>\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-currency'] || (depth0 && depth0['format-currency']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "format-currency", "price", options))));
  data.buffer.push(" </td>\n          <td><button ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "productEdit", "", options) : helperMissing.call(depth0, "link-to", "productEdit", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n          <td><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteProduct", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Delete</button></td>\n        </tr>\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program8(depth0,data) {
  
  
  data.buffer.push("Edit");
  }

  data.buffer.push("<h1>ADMIN PAGE</h1>\n<div class='container'>\n  <div class='col-lg-8'>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-info")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "orders", options) : helperMissing.call(depth0, "link-to", "orders", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class='col-lg-8'>\n    <span class='row'><h2>\n      Products\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "productNew", options) : helperMissing.call(depth0, "link-to", "productNew", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </h2></span>\n    <table class='table table-hover'>\n      <thead>\n        <th>Name</th>\n        <th>Price</th>\n        <th>Edit</th>\n        <th>Remove</th>\n      </thead>\n      <tbody>\n      ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </tbody>\n    </table>\n  </div>\n\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src='http://placekitten.com/40/40'> ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("View your cart ");
  }

  data.buffer.push("<div class='container'>\n  <div class='row'>\n    <span class='col-md-11'>\n      <h1>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "products", options) : helperMissing.call(depth0, "link-to", "products", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        Welcome to the Digital Store\n      </h1>\n      </span>\n    <div class='col-md-1'>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary cart-button")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cart", options) : helperMissing.call(depth0, "link-to", "cart", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n  <hr>\n  <div>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["cart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tr>\n          <td>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "product", options) : helperMissing.call(depth0, "link-to", "product", "product", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n          <td>");
  stack1 = helpers._triageMustache.call(depth0, "quantity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "add", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">+</button>\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "subtract", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">-</button>\n          </td>\n          <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-currency'] || (depth0 && depth0['format-currency']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "current_price", options) : helperMissing.call(depth0, "format-currency", "current_price", options))));
  data.buffer.push("</td>\n          <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-currency'] || (depth0 && depth0['format-currency']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "subtotal", options) : helperMissing.call(depth0, "format-currency", "subtotal", options))));
  data.buffer.push("</td>\n          <td><button href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeItem", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-warning\">Remove</button></td>\n        </tr>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program4(depth0,data) {
  
  
  data.buffer.push("Checkout");
  }

  data.buffer.push("<h1> This is your cart</h1>\n<div class='cart'>\n  <table class='table table-hover'>\n    <thead>\n      <th>Product</th>\n      <th>Quantity</th>\n      <th>Price</th>\n      <th>Subtotal</th>\n      <th></th>\n    </thead>\n    <tbody>\n      ");
  stack1 = helpers.each.call(depth0, "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <tr>\n        <td><strong>Total</strong></td>\n        <td></td>\n        <td></td>\n        <td> ");
  data.buffer.push(escapeExpression((helper = helpers['format-currency'] || (depth0 && depth0['format-currency']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "total", options) : helperMissing.call(depth0, "format-currency", "total", options))));
  data.buffer.push(" </td>\n        <td></td>\n      </tr>\n    </tbody>\n  </table>\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-success")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "cart.checkout", options) : helperMissing.call(depth0, "link-to", "cart.checkout", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "checkout", options) : helperMissing.call(depth0, "outlet", "checkout", options))));
  return buffer;
  
});

Ember.TEMPLATES["cart/checkout"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class= 'form'>\n  <div class='form-group'>\n    <label for=\"customer_name\">First name</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("first_name"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"last_name\">Last name</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("last_name"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"email\">Email</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("email"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"credit_card\">Credit Card</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("credit_card"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"cvv\">cvv</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("cvv"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"zip_code\">Zip Code</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("zip_code"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"expiration\">Expiration</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("expiration"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <button class='btn btn-success' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "purchase", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Purchase!</button>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});

Ember.TEMPLATES["order"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tr>\n          <td>");
  stack1 = helpers._triageMustache.call(depth0, "product.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n          <td>");
  stack1 = helpers._triageMustache.call(depth0, "quantity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n          <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-currency'] || (depth0 && depth0['format-currency']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "current_price", options) : helperMissing.call(depth0, "format-currency", "current_price", options))));
  data.buffer.push("</td>\n          <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-currency'] || (depth0 && depth0['format-currency']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "subtotal", options) : helperMissing.call(depth0, "format-currency", "subtotal", options))));
  data.buffer.push("</td>\n          <td></td>\n        </tr>\n      ");
  return buffer;
  }

  data.buffer.push("<div>\n  <h1>");
  stack1 = helpers._triageMustache.call(depth0, "customer_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <small>");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small></h1>\n  <ul>\n    <li>Total: ");
  data.buffer.push(escapeExpression((helper = helpers['format-currency'] || (depth0 && depth0['format-currency']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "total", options) : helperMissing.call(depth0, "format-currency", "total", options))));
  data.buffer.push("</li>\n    <li>Status: ");
  stack1 = helpers._triageMustache.call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    <li>credit card: ");
  data.buffer.push(escapeExpression((helper = helpers['last-four'] || (depth0 && depth0['last-four']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "credit_card", options) : helperMissing.call(depth0, "last-four", "credit_card", options))));
  data.buffer.push("</li>\n  </ul>\n  <h2>Cart Details</h2>\n  <table class='table table-hover'>\n    <thead>\n      <th>Product</th>\n      <th>Quantity</th>\n      <th>Price</th>\n      <th>Subtotal</th>\n      <th></th>\n    </thead>\n    <tbody>\n      ");
  stack1 = helpers.each.call(depth0, "cart.items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <tr>\n        <td><strong>Total</strong></td>\n        <td></td>\n        <td></td>\n        <td> ");
  data.buffer.push(escapeExpression((helper = helpers['format-currency'] || (depth0 && depth0['format-currency']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "cart.total", options) : helperMissing.call(depth0, "format-currency", "cart.total", options))));
  data.buffer.push(" </td>\n        <td></td>\n      </tr>\n    </tbody>\n  </table>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["orders"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <tr>\n            <td>\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "order", "", options) : helperMissing.call(depth0, "link-to", "order", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </td>\n            <td>\n              <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "update", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Update</button>\n            </td>\n            <td>\n              ");
  stack1 = helpers._triageMustache.call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </td>\n          </tr>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers._triageMustache.call(depth0, "customer_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  return buffer;
  }

  data.buffer.push("<h1>Orders Index</h1>\n<div class='row'>\n  <div class='col-lg-8'>\n    <table class='table table-hover'>\n      <thead>\n        <th>Customer</th>\n        <th>Update</th>\n        <th>Status</th>\n      </thead>\n      <tbody>\n        ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </tbody>\n    </table>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["product"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class='row'>\n  <span class='col-lg-6'>\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <small class='muted'>");
  data.buffer.push(escapeExpression((helper = helpers['format-currency'] || (depth0 && depth0['format-currency']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "format-currency", "price", options))));
  data.buffer.push("</small>\n    </h1>\n  </span>\n  <span class='col-lg-2'>\n    <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addToCart", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class='btn btn-success'>Add To Cart!</a>\n  </span>\n</div>\n\n<div class='row'>\n  <div class='col-lg-8'>\n    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class='thumbnail col-lg-12' />\n  </div>\n  <div class='col-lg-4'>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["productEdit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>Edit Product</h1>\n<div class='form'>\n  <div class='form-group'>\n    <label for=\"name\">Name:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("name")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"name\">Price:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("number"),
    'value': ("price")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"name\">Description:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("description"),
    'rows': (10),
    'cols': (100)
  },hashTypes:{'value': "ID",'rows': "INTEGER",'cols': "INTEGER"},hashContexts:{'value': depth0,'rows': depth0,'cols': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"name\">Image URL:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("image"),
    'rows': (1),
    'cols': (100)
  },hashTypes:{'value': "ID",'rows': "INTEGER",'cols': "INTEGER"},hashContexts:{'value': depth0,'rows': depth0,'cols': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"name\">Avatar URL:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("avatar"),
    'rows': (1),
    'cols': (100)
  },hashTypes:{'value': "ID",'rows': "INTEGER",'cols': "INTEGER"},hashContexts:{'value': depth0,'rows': depth0,'cols': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  </div>\n\n  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "update", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Save!</button>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["productNew"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>List New Product</h1>\n<div class='form'>\n  <div class='form-group'>\n    <label for=\"name\">Name:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("name")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"name\">Price:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("number"),
    'value': ("price")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"name\">Description:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("description"),
    'rows': (10),
    'cols': (100)
  },hashTypes:{'value': "ID",'rows': "INTEGER",'cols': "INTEGER"},hashContexts:{'value': depth0,'rows': depth0,'cols': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"name\">Image URL:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("image"),
    'rows': (1),
    'cols': (100)
  },hashTypes:{'value': "ID",'rows': "INTEGER",'cols': "INTEGER"},hashContexts:{'value': depth0,'rows': depth0,'cols': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  </div>\n  <div class='form-group'>\n    <label for=\"name\">Avatar URL:</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'value': ("avatar"),
    'rows': (1),
    'cols': (100)
  },hashTypes:{'value': "ID",'rows': "INTEGER",'cols': "INTEGER"},hashContexts:{'value': depth0,'rows': depth0,'cols': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n  </div>\n\n  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createProduct", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Save!</button>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["products"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "product", "", options) : helperMissing.call(depth0, "link-to", "product", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['format-currency'] || (depth0 && depth0['format-currency']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "price", options) : helperMissing.call(depth0, "format-currency", "price", options))));
  data.buffer.push("\n      </li>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatar")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class='thumbnail col-lg-12' />\n        ");
  return buffer;
  }

  data.buffer.push("<h1>Products Directory</h1>\n<div class='row'>\n  <div class='col-lg-2'>\n    <h4>All Products</h4>\n    <ul class='list-unstyled'>\n      ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </div>\n  <div class='col-lg-10'>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});