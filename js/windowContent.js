var site = [
  //"http://www.fontawesome.com.cn",
  "../map/main.html",
  "https://www.swiper.com.cn",
  "https://github.com/necolas/normalize.css",
  "https://github.com/derekck/animonscroll",
  "https://cn.vuejs.org/v2/guide/",
  "http://www.jquerycn.cn",
  "https://github.com/qimengke/mouseRight",
  "http://masonry.desandro.com",
  "https://github.com/ded/bonzo"
]

function clickLi(num) {
  for (var i = 0; i < site.length; i++) {
    if (document.getElementById(String(i)).classList.contains("liAppearence")) {
      document.getElementById(String(i)).classList.remove("liAppearence")
    }
  }
  document.getElementById(String(num)).classList.add("liAppearence");
  document.getElementsByClassName("desciption").style = "display:none";
  document.getElementById("iframe").style = "display:block";
  document.getElementById("iframe").src = site[num];
}
