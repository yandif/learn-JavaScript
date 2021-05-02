const _ = require("loadsh");
let animal = (species, name, size) => {
  return name + " is a " + size + " " + species;
};

console.log(animal("dog", "dot", "tiny"));

animal = species => name => size => {
  return name + " is a " + size + " " + species;
};
console.log(animal("dog")("dot")("tiny"));

animal = _.curry(animal, 1);

console.log(animal("dog")("dot")("tiny"));
