const colors = [{ name: "red" }, { name: "green" }, { name: "blue" }];

var names = colors.map(color => {
  return color.name;
});

console.log(names); //[ 'red', 'green', 'blue' ]
