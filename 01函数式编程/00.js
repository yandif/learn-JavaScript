const fs = require("fs");
fs.readdir("./", function (err, files) {
  if (err) {
    return console.log("目录不存在");
  }
  const fileList = files
    .filter(x => /^(?!00)(.*)(\.js)$/.test(x))
    .map(item => "./" + item);

  run(fileList);
});

function run(fileList) {
  fileList.forEach(el => {
    item(el);
  });
}

function item(name) {
  const flag = "-";
  const title = name.split("").slice(5, -3).join("");
  const count = Math.floor((30 - title.length) / 2) - 1;
  const pre =
    flag.repeat(count) + " " + title + " " + flag.repeat(count) + "\n";
  const after = "\n" + flag.repeat(pre.length - 1) + "\n\n\n";

  console.log(pre);
  require(name);
  console.log(after);
}
