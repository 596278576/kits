function Kits() {
  //获取随机整数
  this.r_Int = function(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
  };

  //随机获取rgb
  this.rgb = function() {
    var r = this.r_Int(0, 255);
    var g = this.r_Int(0, 255);
    var b = this.r_Int(0, 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  //随机16进制
  this.color_16 = function() {
    var color = ["#", "c"];
    for (var i = 1; i < 6; i++) {
      var r = Math.floor(Math.random() * 16).toString(16);
      color.push(r);
    }
    return color.join("");
  };
}
