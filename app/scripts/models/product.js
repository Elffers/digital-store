App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("integer"),
  avatar: DS.attr("string"),
  description: DS.attr("string"),
  image: DS.attr("string"),
})

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Chrysanthemum",
    price: 1000,
    image: "http://placekitten.com/800/600",
    avatar: 'http://placekitten.com/50/50',
    description: "This one comes with extra fluff",
  }, {
    id: 2,
    name: "Astrid",
    price: 1000,
    image: "http://placekitten.com/700/600",
    avatar: 'http://placekitten.com/50/50',
    description: "This one comes with the average amount of fluff"
  }
]