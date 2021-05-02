# 函数式编程

优点：

- bug 较少
- 编码的时间少
- 易于推理
- 可重用更多代码

###### 什么是易于推理？

1. 没有意外的副作用
2. 不依赖或不影响外部状态
3. 给定相同的参数，它将始终返回相同的对应输出

### 高阶函数

接收函数作为参数或将函数作为输出返回的函数

```javascript
function double(f) {
  return x => {
    return f(f(x));
  };
}

function add1(x) {
  return x + 1;
}

const double_double = double(double);

const double_add1 = double(add1);

const double_double_add1 = double_double(add1);

console.log(double_add1(1)); //3
console.log(double_double_add1(1)); //5
```

#### 组合

将小函数组合成大函数

#### filter

返回一个新数组,它的元素是传入函数的返回值为真的元素。

```javascript
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

const red = colors.filter(isRed);
const others = colors.reject(isRed);

console.log(red); // [ { name: 'red' } ]
console.log(others); // [ { name: 'green' }, { name: 'blue' } ]
```

#### map

返回一个新数组，它的每个元素是传入函数的返回值。

```javascript
const colors = [{ name: "red" }, { name: "green" }, { name: "blue" }];

var names = colors.map(color => {
  return color.name;
});

console.log(names); //[ 'red', 'green', 'blue' ]
```

### reduce

对数组中的每个元素执行传入的的 reducer 函数，将其结果汇总为单个返回值。

```javascript
let numbers = [1, 5, 1, 6, 2, 7];

let sum = numbers.reduce(function (sum, val) {
  return sum + val;
}, 0);

console.log(sum); //22
```

#### 闭包

一个函数和可以访问到外层作用域捆绑一起。

```javascript
sentRequest();
function sentRequest() {
  var id = "123";
  ajax({
    url: "./url",
    success: function () {
      console.log("请求 " + id + " 返回成功");
    },
  });
}

function ajax(data) {
  setTimeout(() => {
    data.success();
  }, 1000);
}
```

#### 函数柯里化

把接受多个参数的函数转换成接受一个单一参数的函数

```javascript
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
```

#### 递归

一种函数调用自身的操作。

```javascript
let countDownFrom = num => {
  if (num == 0) {
    return;
  }
  console.log(num);
  countDownFrom(num - 1);
};

countDownFrom(2);
```

#### Promise

Promise 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5 ? resolve("success") : reject("error");
  }, 100);
});
promise
  .then(val => {
    console.log(val);
  })
  .catch(reason => {
    console.log(reason);
  })
  .finally(() => {
    console.log("finished");
  });
```

#### Factory

```javascript
class Dog {
  constructor() {
    this.sound = "woof";
  }
  take() {
    console.log(this.sound);
  }
}
const dot = new Dog();
dot.take();

function dog() {
  let sound = "woof";
  return {
    take: () => {
      console.log(sound);
    },
  };
}
const dos = dog();
dos.take();
```
