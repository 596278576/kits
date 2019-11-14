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

  // 本地存储与json数据转换的封装
  //arr 是要存储的数组，key是存入本地存储自定义的键，一定要字符串格式
  this.storage = function(arr, key) {
    let json = JSON.stringify(arr);
    return localStorage.setItem(key, json);
  };

  // 从本地缓存中取出来
  //arr 是拿出来的数组，key本地存储中自定义的键，一定要字符串格式
  this.storage = function(key) {
    let data = localStorage.getItem(key);
    let arr = !data ? [] : JSON.parse(data);
    return arr;
  };
}
