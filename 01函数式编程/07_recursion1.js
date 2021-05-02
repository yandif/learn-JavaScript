let looper = () =>
  (() => {
    let option = {
      fn: null,
      millisecond: 1000,
      i: 0,
      flag: 0,
    };

    function start(fn, i, millisecond) {
      option.fn = fn;
      option.i = i;
      option.millisecond = millisecond || option.millisecond;
      option.flag = setTimeout(next, option.millisecond);
    }

    function next() {
      option.fn(option);

      option.i--;

      if (option.i > 0) {
        option.flag = setTimeout(next, option.millisecond);
      }
    }

    function stop() {
      if (option.flag) {
        clearTimeout(option.flag);
      }
    }

    return { start, next, stop };
  })();

let loop1 = looper();

loop1.start(
  option => {
    console.log("1: " + option.i);
  },
  10,
  1000
);
