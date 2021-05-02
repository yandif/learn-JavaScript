const fs = require("fs");
const args = require("minimist")(process.argv.slice(2));
const mode = args["mode"];

fs.readdir("./", function (err, files) {
  if (err) {
    return console.log("目录不存在");
  }
  const regulex = /^(?!00)(.*)(\.js)$/;
  const fileList = files.filter(x => regulex.test(x)).map(item => "./" + item);
  run(fileList, mode);
});

function run(fileList, mode) {
  switch (mode) {
    case 0:
      fileList.forEach(el => {
        item(el);
      });
      break;
    case 1:
      item(fileList[fileList.length - 1]);
  }
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
