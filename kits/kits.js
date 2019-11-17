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

  //阶乘
  this.Factorial = function(n) {
    var jiec = 1;
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      jiec = jiec * i;
      sum = sum + jiec;
    }
    return "阶乘是：" + jiec + "阶乘和是：" + sum;
  };

  //素数
  this.su = function(num) {
    var pd;
    if (num === 2) {
      pd = num + "是素数";
    } else {
      for (var i = 2; i < num; i++) {
        if (num % i === 0) {
          pd = num + "不是素数";
          break;
        } else {
          pd = num + "是素数";
        }
      }
    }
    return pd;
  };

  //时间差
  //console.log(getInterval(new Date(2019, 0, 1), new Date()));
  this.getInterval = function(start, end) {
    var day, hour, minute, second, interval;
    interval = end - start;
    interval /= 1000;
    day = Math.round(interval / 60 / 60 / 24);
    hour = Math.round((interval / 60 / 60) % 24);
    minute = Math.round((interval / 60) % 60);
    second = Math.round(interval % 60);
    return {
      day: day,
      hour: hour,
      minute: minute,
      second: second
    };
  };

  //统计某字符在字符串出现的位置
  this.char = function(chars, i) {
    var arr = [];
    do {
      var index = chars.indexOf(i, index + 1);
      if (index !== -1) {
        arr.push(index);
      }
    } while (index >= 0);
    return arr;
  };

  // 数组去重
  this.dels = function(arr) {
    var o = [];
    function del() {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (o[item]) {
          o[item]++;
        } else {
          o[item] = 1;
        }
      }

      var newarr = [];
      for (var key in o) {
        if (o[key] == 1) {
          newarr.push(key);
        } else {
          newarr.push(key);
        }
      }
      return newarr;
    }
    return del();
  };

  //轮播图封装
  this.swiper = function(inner, ul, icon, left, right) {
    // var inner = document.querySelector(".inner");
    // var ul = document.querySelector("ul");
    // var icon = document.querySelectorAll(".list>i");
    // var left = document.querySelector(".arrow-left");
    // var right = document.querySelector(".arrow-right");
    var inner, ul, icon, left, right;
    let currentImgIndex = 0;

    //序号轮播
    icon.forEach(function(e, i) {
      e.onmouseover = function() {
        currentImgIndex = i;
        let pstion = inner.offsetWidth * i * -1;
        ul.style.left = pstion + "px";

        icon.forEach(function(e) {
          e.classList.remove("current");
        });
        this.classList.add("current");
      };
    });

    //注册右击事件
    right.onclick = function() {
      if (currentImgIndex == 5) {
        currentImgIndex = -1;
      }
      currentImgIndex++;
      let pstion = inner.offsetWidth * currentImgIndex * -1;
      ul.style.left = pstion + "px";

      icon.forEach(function(e) {
        e.classList.remove("current");
      });
      icon[currentImgIndex].classList.add("current");
    };
    //注册左击事件
    left.onclick = function() {
      if (currentImgIndex == 0) {
        currentImgIndex = 6;
      }
      currentImgIndex--;
      let pstion = inner.offsetWidth * currentImgIndex * -1;
      ul.style.left = pstion + "px";

      icon.forEach(function(e) {
        e.classList.remove("current");
      });
      icon[currentImgIndex].classList.add("current");
    };

    //定时器实现自动轮播
    let timeId = setInterval(function() {
      right.onclick();
    }, 1500);
    //鼠标移入悬停
    inner.onmouseover = function() {
      clearInterval(timeId);
    };
    inner.onmouseout = function() {
      timeId = setInterval(function() {
        right.onclick();
      }, 1500);
    };
  };

  // 定时器验证码封装
  this.timer = function(btn) {
    let time = 60;
    btn.value = time;
    setInterval(function() {
      time--;
      btn.value = time;
    }, 1000);
  };

  //淘宝放大镜效果封装
  this.Magnifier = function(box, small, simg, big, mask, bimg) {
    small.onmouseover = function(e) {
      mask.style.display = "block";
      big.style.display = "block";
    };
    small.onmouseout = function() {
      mask.style.display = "none";
      big.style.display = "none";
    };
    small.onmousemove = function(e) {
      // 遮罩位置的公式：鼠标位置-减去盒子相对页面额度偏移量-遮罩宽度的一般
      let x = e.pageX;
      let y = e.pageY;
      let smallX = box.offsetLeft;
      let smallY = box.offsetTop;
      let maskX = mask.offsetWidth / 2;
      let maskY = mask.offsetHeight / 2;
      let left = x - smallX - maskX;
      let top = y - smallY - maskY;
      let maxY = box.offsetHeight - mask.offsetHeight;
      let maxX = box.offsetWidth - mask.offsetWidth;
      left = left < 0 ? 0 : left;
      top = top < 0 ? 0 : top;
      left = left > maxX ? maxX : left;
      top = top > maxY ? maxY : top;
      mask.style.left = left + "px";
      mask.style.top = top + "px";

      //放大后的效果位置：遮罩位置/遮罩移动最大值=放大镜显示盒子位置/显示盒子能移动的最大值
      //遮罩位置/遮罩移动最大值=放大镜显示盒子=显示盒子位置/大图片减去显示盒子宽高

      let bleft = (left / maxX) * (bimg.offsetWidth - big.offsetWidth);
      let btop = (top / maxY) * (bimg.offsetHeight - big.offsetHeight);
      bimg.style.left = -bleft + "px";
      bimg.style.top = -btop + "px";
    };
  };

  //淘宝鼠标移上去整个div切换效果
  this.tab = function(li, main) {
    li.forEach(function(e, i) {
      e.onmouseover = function() {
        li.forEach(function(item) {
          item.classList.remove("active");
        });
        this.classList.add("active");

        main.forEach(function(item) {
          item.classList.remove("selected");
        });
        main[i].classList.add("selected");
      };
    });
  };

  //旋转木马轮播图封装
  this.rotate = function(li, lbtn, rbtn, arr) {
    window.onload = function() {
      li.forEach(function(e, i) {
        e.className = arr[i];
      });
      rbtn.onclick = function() {
        arr.push(arr.shift());
        li.forEach(function(e, i) {
          e.className = arr[i];
        });
      };
      lbtn.onclick = function() {
        arr.unshift(arr.pop());
        li.forEach(function(e, i) {
          e.className = arr[i];
        });
      };

      setInterval(function() {
        rbtn.onclick();
      }, 200);
    };
  };

  //手拉风琴轮播图效果封装
  this.Organ = function(li, arr) {
    li.forEach(function(e, i) {
      e.innerHTML = `<a href=""><img src="${arr[i]}" alt=""></a>`;

      e.onmouseover = function() {
        li.forEach(function(e2, i2) {
          e2.style.width = 100 + "px";
        });
        this.style.width = 800 + "px";
      };

      e.onmouseout = function() {
        li.forEach(function(e3, i3) {
          e3.style.width = 240 + "px";
        });
      };
    });
  };

  //开发移动端点击事件封装
  this.tap = function(box, fn, time, jl) {
    time = time || 250;
    jl = jl || 50;
    let time1, time2, x1, y1, x2, y2;
    box.addEventListener("touchstart", function(e) {
      if (e.touches.length !== 1) {
        console.log("不是单指操作");
        return;
      }
      time1 = Date.now();
      x1 = e.touches[0].clientX;
      y1 = e.touches[0].clientY;
    });
    box.addEventListener("touchend", function(e) {
      if (e.changedTouches.length !== 1) {
        console.log("不是单指操作");
        return;
      }
      time2 = Date.now();
      if (time2 - time1 > time) {
        console.log("点击超时");
        return;
      }
      x2 = e.changedTouches[0].clientX;
      y2 = e.changedTouches[0].clientY;
      if (Math.abs(x2 - x1) > jl || Math.abs(y2 - y1) > jl) {
        console.log("滑动的太远了");
        return;
      }
      console.log("正常点击");
      fn();
    });
  };

  //移动端触摸轮播图封装 需要引入zepto.js跟touch.js
  this.m_swiper = function(ul, imgWidth) {
    // let ul = document.querySelector("ul");
    // 定义一个变量，记录当前是第几张图片
    let currentImgIndex = 1;
    // 记录图片的宽度
    // let imgWidth = document.querySelector('.cour').offsetWidth;
    // let imgWidth = $(".cour").width(); // 这是zepto里面获取元素宽度的写法
    // 为了保证一开始显示的是真正的第一张，先设置一次ul的位置
    let target = currentImgIndex * imgWidth * -1;
    // 修改的是ul的transform属性了
    ul.style.transform = "translate(" + target + "px)";
    // 一开始并不需要动画
    ul.classList.remove("move");
    // 等一小会儿，把类名加回去
    setTimeout(function() {
      ul.classList.add("move");
    }, 10);

    // console.log(imgWidth);
    // 获取ul，注册左滑动事件
    $("ul").on("swipeLeft", function() {
      // 左划让图片从n到n+1张
      currentImgIndex++;
      // console.log('左滑动');
      // 算出ul的位置，设置给ul即可
      let target = currentImgIndex * imgWidth * -1;
      // 修改的是ul的transform属性了
      ul.style.transform = "translate(" + target + "px)";
    });

    // 注册右滑动事件
    $("ul").on("swipeRight", function() {
      // 让图片从n到n-1张
      currentImgIndex--;
      // 算出ul的位置，设置给它
      let target = currentImgIndex * imgWidth * -1;
      ul.style.transform = "translate(" + target + "px)";
    });

    // 为了实现无缝滚动
    // 1 把第一张，复制一份，放到最后，然后我们给ul注册一个过渡结束事件，如果过渡动画到达了最后一张(用户认为的第一张)，立刻悄悄的把最后一张，替换为实际的第一张
    ul.addEventListener("transitionend", function() {
      console.log("过渡结束了");
      // 判断 currentImgIndex 是否已经是最后一张
      if (currentImgIndex === ul.children.length - 1) {
        // 已经是最后一张了，立刻切换到底0张
        currentImgIndex = 1;
        let target = currentImgIndex * imgWidth * -1;
        ul.style.transform = "translate(" + target + "px)";
        //现在因为我们不需要过渡动画，我们需要把过渡动画去除
        // 1.我们可以设置过渡的时间是0秒
        // 2.我们还可以使用一个类名对过渡进行控制,需要的时候，就添加，不需要的时候，移除
        ul.classList.remove("move");
        // 等一小会儿，把类名加回去
        setTimeout(function() {
          ul.classList.add("move");
        }, 10);
      }
      //判断是否是右划动，画到了假的第6张
      if (currentImgIndex === 0) {
        currentImgIndex = ul.children.length - 2;
        let target = currentImgIndex * imgWidth * -1;
        ul.style.transform = "translate(" + target + "px)";
        ul.classList.remove("move");
        // 等一小会儿，把类名加回去
        setTimeout(function() {
          ul.classList.add("move");
        }, 10);
      }
    });
  };
}
