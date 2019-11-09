function kits() {
  //获取随机整数
  this.r_Int = function(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
  };

  //随机获取rgb
  this.rgb = function() {
    var r = this.hqzs(0, 255);
    var g = this.hqzs(0, 255);
    var b = this.hqzs(0, 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  //随机16进制
  this.jinZhi_16 = function() {
    var arr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e"
    ];
    var color = ["#"];
    for (var i = 0; i <= 6; i++) {
      var r = Math.floor(Math.random() * arr.length);
      color.push(arr[i]);
    }
    return color.join("");
  };
}
