window.onload = function() {
    //顶部导航
    var obt = document.getElementsByClassName("netNav");
    var od1 = document.getElementsByClassName("nav-box");
    obt[0].onmouseover = function() {
        od1[0].style.display = "block";
    }
    od1[0].onmouseover = function() {
        od1[0].style.display = "block";
    }
    od1[0].onmouseout = function() {
        od1[0].style.display = "none";
    }
    obt[0].onmouseout = function() {
            od1[0].style.display = "none";
        }
        //二维码关闭
    var twoCode = document.querySelector(".two-code")
    var closeCode = document.querySelector(".close-code");
    var conveBox = document.querySelectorAll(".conve-box");
    var closeconve = document.querySelectorAll(".closeC");
    for (i = 0; i < 3; i++) {
        (function(i) {
            closeconve[i].onclick = function() {
                conveBox[i].classList.add("hide");
            }
        })(i);
    }
    closeCode.onclick = function() {
            twoCode.classList.add("hide");
        }
        //侧边导航
    var ulL = document.getElementsByClassName("side-li");
    var lis = ulL[0].getElementsByTagName("li");
    for (i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function() {
            this.getElementsByClassName("hiden-box")[0].classList.remove("hide");
        }
        lis[i].onmouseout = function() {
            this.getElementsByClassName("hiden-box")[0].classList.add("hide");
        }
    }

    //轮播
    var wrap = document.querySelectorAll(".wrap");
    var next = document.querySelectorAll(".arrow_right");
    var prev = document.querySelectorAll(".arrow_left");
    next[0].onclick = function() {
        next_pic();
    }
    prev[0].onclick = function() {
        prev_pic();
    }
    next[1].onclick = function() {
        next_pic1();
    }
    prev[1].onclick = function() {
            prev_pic1();
        }
        //缓动
        /*  function animation(tag, movePx) {
              var timer = null,
                  primaryD = tag.offsetLeft,
                  Distance = tag.offsetLeft,
                  step = 5;
              step = movePx > 0 ? step : -step;
              timer = setInterval(function() {
                  if (primaryD + movePx != Distance) {
                      Distance += step;
                      tag.style.left = Distance + 'px';
                  } else {
                      tag.style.left = primaryD + movePx + 'px';
                      clearInterval(timer);
                      timer = null;
                  }
              }, 17)
          }*/

    function next_pic() {
        index++;
        if (index > 4) {
            index = 0;
        }
        showCurrentDot();
        var newLeft;
        if (wrap[0].style.left === "-3120px") {
            newLeft = -1040;

        } else {
            newLeft = parseInt(wrap[0].style.left) - 520;
        }
        wrap[0].style.left = newLeft + "px";
    }

    function next_pic1() {
        index1++;
        if (index1 > 3) {
            index1 = 1;
        }
        showCurrentSpice();
        var newLeft;
        if (wrap[1].style.left === "-2080px") {
            newLeft = -1040;
        } else {
            newLeft = parseInt(wrap[1].style.left) - 520;
        }
        wrap[1].style.left = newLeft + "px";
    }

    var highPic = document.querySelectorAll(".highPic");

    function next_pic2() {
        if (highPic[0].style.top === "0px") {
            highPic[0].style.top = "-100px";
            highPic[1].style.top = "-100px";
        } else {
            highPic[0].style.top = "0px";
            highPic[1].style.top = "0px";
        }
    }

    function prev_pic() {
        index--;
        if (index < 0) {
            index = 4;
        }
        showCurrentDot();
        var newLeft;
        if (wrap[0].style.left === "0px") {
            newLeft = -2080;
        } else {
            newLeft = parseInt(wrap[0].style.left) + 520;
        }
        wrap[0].style.left = newLeft + "px";

    }

    function prev_pic1() {
        index1--;
        if (index1 < 1) {
            index1 = 3;
        }
        showCurrentSpice();
        var newLeft;
        if (wrap[1].style.left === "0px") {
            newLeft = -1040;
        } else {
            newLeft = parseInt(wrap[1].style.left) + 520;
        }
        wrap[1].style.left = newLeft + "px";
    }
    //自动轮播
    var timer = null;

    function autoPlay() {
        timer = setInterval(function() {
            next_pic();
            next_pic1();
            next_pic2();
        }, 3000);
    }
    autoPlay();
    //鼠标悬停
    var midBF = document.querySelector(".midBF");
    midBF.onmouseenter = function() {
        clearInterval(timer);
    }
    midBF.onmouseleave = function() {
        autoPlay();
    }
    var midTF = document.querySelector(".midTF");
    midTF.onmouseenter = function() {
        clearInterval(timer);
    }
    midTF.onmouseleave = function() {
            autoPlay();
        }
        //轮播位置点
    var index = 0;
    var dots = midTF.getElementsByTagName("span");

    function showCurrentDot() {
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = "";
        }
        dots[index].className = "on";
    }

    var index1 = 1;
    var spice = midBF.getElementsByTagName("span");
    var nub3 = spice[0].getElementsByTagName("em");

    function showCurrentSpice() {
        for (var i = 0; i < spice.length; i++) {
            spice[i].className = "";
        }
        spice[index1].className = "on";
        nub3[0].innerHTML = index1;
    }

    for (var i = 0; i < dots.length; i++) {
        (function(i) {
            dots[i].onclick = function() {
                var dis = index - i;
                if (index == 4 && parseInt(wrap[0].style.left) !== -2600) {
                    dis = dis - 5;
                }
                if (index == 0 && parseInt(wrap[0].style.left) !== -520) {
                    dis = 5 + dis;
                }
                wrap[0].style.left = (parseInt(wrap[0].style.left) + dis * 520) + "px";
                index = i;
                showCurrentDot();
            }
        })(i);
    }
    //公告栏
    var noticeHd = document.getElementsByClassName("notice-hd");
    var noticeT = noticeHd[0].getElementsByTagName("li");
    var mod = document.querySelectorAll(".mod");
    for (i = 0; i < noticeT.length; i++) {
        (function(i) {
            var k = i;
            noticeT[i].onmouseover = function() {
                for (j = 0; j < mod.length; j++) {
                    mod[j].className = "mod hide";
                    noticeT[j].style.borderBottom = 'none';
                }
                mod[k].classList.remove("hide");
                noticeT[k].style.borderBottom = '2px solid #F40';
            }
        })(i);
    }
    //便捷
    var tabs = document.querySelectorAll(".conve-tabs");
    for (i = 0; i < 3; i++) {
        (function(i) {
            var k = i;
            var conve = tabs[k].getElementsByTagName("a");
            var longCharge = document.querySelectorAll(".longCharge");
            conve[0].onmouseover = function() {
                if (parseInt(longCharge[k].style.left) == -260)
                    longCharge[k].style.left = '15px';
                conve[1].style.color = '#444';
                this.style.color = '#f40';
            }
            conve[1].onmouseover = function() {
                longCharge[k].style.left = '-260px';
                conve[0].style.color = '#444';
                this.style.color = '#f40';
            }
        })(i);
    }
    var conLi = document.querySelectorAll(".con12");
    for (i = 0; i < 3; i++) {
        conLi[i].index = i;
        conLi[i].onmouseover = function() {
            this.getElementsByClassName("conve-box")[0].classList.remove("hide");
            this.style.border = "1px solid #f40";
        }
        conLi[i].onmouseout = function() {
            this.getElementsByClassName("conve-box")[0].classList.add("hide");
            this.style.border = "none";
        }
    }

    var obtnTop = document.querySelector(".tTop");
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;

    window.onscroll = function() {
        var osTop = document.documentElement.scrollTop;
        if (osTop >= clientHeight) {
            obtnTop.style.display = 'block';
        } else {
            obtnTop.style.display = 'none';
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    }

    obtnTop.onclick = function() {
            timer = setInterval(function() {
                var osTop = document.documentElement.scrollTop;
                var speed = Math.floor(-osTop / 6);
                document.documentElement.scrollTop = osTop + speed;
                isTop = true;
                if (osTop == 0) {
                    clearInterval(timer);
                }
            }, 17);
        }
        //顶部悬浮搜索
    var searchBox = document.querySelector(".mainSearch");
    window.onscroll = function() {
        var searchTop = document.documentElement.scrollTop;
        if (searchTop > 200) {
            searchBox.classList.add("wrap-fixed");
        } else {
            searchBox.classList.remove("wrap-fixed");
        }
        startScroll();
        if (searchTop > 400) {

            menu.style.top = searchTop - 160 + 'px';
        } else {
            menu.style.top = '280px';
        }
    }

    var appNav = document.querySelector(".apps-nav");
    var appQr = appNav.getElementsByTagName("li");
    for (i = 0; i < appQr.length; i++) {
        appQr[i].onmouseover = function() {
            this.querySelector(".app-qr").style.display = 'inline';
        }
        appQr[i].onmouseout = function() {
            this.querySelector(".app-qr").style.display = 'none';
        }
    }
    //右侧边栏定位
    var pos = [],
        links = document.querySelectorAll(".all"),
        titles = document.getElementsByTagName('b'),
        menu = document.querySelector(".fixedtool"),
        currentItem = null;
    var addClass = function(element) {
            currentItem && currentItem.classList.remove("on");
            element.classList.add("on");
            currentItem = element;
        },
        getScrollTop = function() {
            return Math.ceil(document.documentElement.scrollTop) + 1;
        },
        startScroll = function() {
            var scrollTop = getScrollTop(),
                len = titles.length,
                index = 0;
            if (scrollTop >= 0 && scrollTop < pos[0]) {
                addClass(links[0]);
                return;
            }
            if (scrollTop >= pos[len - 1]) {
                addClass(links[len - 1]);
                return;
            }
            for (; index < len; index++) {
                if (scrollTop > pos[index] && scrollTop < pos[index + 1]) {
                    addClass(links[index]);
                    break;
                }
            }
        };

    var ln = titles.length;
    while (--ln > -1) {
        pos.unshift(titles[ln].offsetTop);
    }
    //抢购倒计时

    (function countTime() {
        var date = new Date();
        var now = date.getTime();
        var str = "2019/4/30 00:00:00";
        var endDate = new Date(str);
        var end = endDate.getTime();
        //时间差  
        var leftTime = end - now;
        var h, m, s;
        if (leftTime >= 0) {
            h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
            m = Math.floor(leftTime / 1000 / 60 % 60);
            s = Math.floor(leftTime / 1000 % 60);
        }
        document.querySelector("._h").innerHTML = h;
        document.querySelector("._m").innerHTML = m;
        document.querySelector("._s").innerHTML = s;
        setTimeout(countTime, 1000);
    })();

}