Ember.Handlebars.helper('last-four', function(cc){
  var lastFour = cc.slice(-4, cc.length);
  return "**** **** ****" + lastFour;
});