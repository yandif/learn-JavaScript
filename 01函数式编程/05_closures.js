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
