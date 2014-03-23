App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("number"),
  avatar: DS.attr("string"),
  description: DS.attr("string"),
  image: DS.attr("string")
});