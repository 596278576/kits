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

  // 水仙花数封装
  // 100到1000水仙花数
  this.narcissus = function() {
    for (var i = 100; i < 1000; i++) {
      //百位
      var a = Math.floor(i / 100);
      // 十位
      var b = Math.floor((i - a * 100) / 10);
      // 个位
      var c = i % 10;
      if (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) === i) {
        return console.log(i + "是一个水仙花数");
      }
    }
  };

  // 去掉数组的0项
  this.removeZero = function(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        temp[temp.length] = arr[i];
      }
    }
    return temp;
  };

  //冒泡排序
  this.Bubbling = function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return temp;
  };
}
