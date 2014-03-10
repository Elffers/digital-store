Ember.Handlebars.helper('format-currency', function(price){
  var currency = parseFloat(price/100).toFixed(2);
  return "$" + currency.toString()
});