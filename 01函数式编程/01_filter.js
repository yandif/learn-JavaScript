const foo = function (x) {
  return x * 3;
};

const fun = foo;
fun(30);

/**
 * @description 将断言函数返回值为假的数据返回
 * @param {*} fn 断言函数
 */
Array.prototype.reject = function (fn) {
  return this.filter(x => !fn(x));
};

const colors = [{ name: "red" }, { name: "green" }, { name: "blue" }];

const isRed = function (color) {
  return color.name == "red";
};

const red = colors.filter(isRed); // [ { name: 'red' } ]
const others = colors.reject(isRed); // [ { name: 'green' }, { name: 'blue' } ]

console.log(red);
console.log(others);
