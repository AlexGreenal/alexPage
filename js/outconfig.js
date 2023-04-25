// document.querySelector("body").style.width = window.screen.availWidth;
// document.querySelector("body").style.height = window.screen.availHeight;
// document.querySelector("body").style = "background-size:"+window.screen.availWidth+" "+window.screen.availHeight;

document.getElementById("pageOut").onclick = function () {
  window.location.href = "src/alex/index.html";
}

document.getElementById("winOut").onclick = function () {
  window.location.href = "https://win11.blueedge.me/";
}

var flagPanel = 0;

document.getElementById("ctl").onclick = function () {
  if (flagPanel == 0) {
    document.getElementById("pn").classList.add("controlPanelAn");
    flagPanel = 1;
  } else {
    document.getElementById("pn").classList.remove("controlPanelAn");
    flagPanel = 0;
  }
}

document.getElementById("kbp").onclick = function () {
  document.getElementById("kbf").classList.add("keyboardCloseAn");
  try {
    document.getElementById("kbf").classList.remove("keyboardCloseAnB");
  } catch (err) {
    console.error(err)
  }
}

document.getElementById("kbc").onclick = function () {
  document.getElementById("kbf").classList.remove("keyboardCloseAn");
  try {
    document.getElementById("kbf").classList.add("keyboardCloseAnB");
  } catch (err) {
    console.error(err)
  }
}

document.getElementById("lgbtn").onclick = function () {
  document.getElementById("srtwd").classList.add("startWindowUp");
}

document.getElementById("vo").onclick = function () {
  document.getElementById("volumeWindow").style.display = "flex";
  document.getElementById("volumeWindow").classList.add("volumeAn");
  try {
    document.getElementById("volumeWindow").classList.remove("volumeAnB");
  } catch (err) {
    console.error(err)
  }
}

document.getElementById("VcloseBtn").onclick = function () {
  document.getElementById("volumeWindow").classList.add("volumeAnB");
  setTimeout(function(){
	  document.getElementById("volumeWindow").style.display = "none";
  },3000);
  try {
    document.getElementById("volumeWindow").classList.remove("volumeAn");
  } catch (err) {
    console.error(err)
  }
}

document.getElementById("launchpad").onclick = function () {
  document.getElementById("launchpadView").style.display = "flex";
  document.getElementById("launchpadView").classList.add("lauchpadDisplay");
  try {
    document.getElementById("launchpadView").classList.remove("lauchpadDisplayB");
  } catch (err) {
    console.error(err)
  }
}

document.getElementById("launchPadClose").onclick = function () {
  document.getElementById("launchpadView").classList.add("lauchpadDisplayB");
  try {
    document.getElementById("launchpadView").classList.remove("lauchpadDisplayA");
  } catch (err) {
    console.error(err)
  }
  setTimeout(function(){
	  document.getElementById("launchpadView").style.display = "none";
  },1000);
}

var csschange = function (t, s) {
  s = document.createElement('style');
  s.innerText = t;
  document.head.appendChild(s);
};

csschange('a{color:black;}');
var iframeDark = document.querySelectorAll("iframe");

function checkboxOnclick(checkbox) {
  if (checkbox.checked == true) {
    document.body.classList.add("night");
	iframeDark[0].classList.add("iframeDarkMode");
    iframeDark[1].classList.add("iframeDarkMode");
    iframeDark[6].classList.add("iframeDarkMode");
    csschange('.keyboardPanel,.controlPanel,.notifacationPanel{background: rgba(0,0,0,.3);}');
    document.getElementById("utility").style.color = "rgba(255,255,255,.6)";
	document.getElementById("launchpadView").style.background="rgba(0,0,0,0.8)";
    csschange('a{color:white;}');
    changeDarkModeBGImg();
    setTimeout(function () {
      document.getElementById("pn").classList.remove("controlPanelAn");
      flagPanel = 0;
    }, "2000");
	  setTimeout(function () {
      document.getElementById("menuClick").click();
    }, "300");
  } else {
    document.body.classList.remove("night");
    iframeDark[0].classList.remove("iframeDarkMode");
    iframeDark[1].classList.remove("iframeDarkMode");
    iframeDark[6].classList.remove("iframeDarkMode");
    csschange('a{color:black;}');
    csschange('.keyboardPanel,.controlPanel,.notifacationPanel{background: rgba(255,255,255,.3);}');
    document.getElementById("utility").style.color = "rgba(0,0,0,.6)";
	document.getElementById("launchpadView").style.background="rgba(255,255,255,0.8)";
    changeLightModeBGImg();
    setTimeout(function () {
      document.getElementById("pn").classList.remove("controlPanelAn");
      flagPanel = 0;
    }, "2000");
	 setTimeout(function () {
      document.getElementById("menuClick").click();
    }, "300");
  }
}

var notifflag = 0;
if (window.matchMedia && window.matchMedia('(min-width: 1210px)').matches) {
  document.getElementById("timeBar").addEventListener("click", function () {
    if (notifflag == 0) {
      document.getElementById("notifPanel").classList.add("notifacationPanelAn");
      try {
        document.getElementById("notifPanel").classList.remove("notifacationPanelAnB");
      } catch (err) {
        console.error(err);
      }
      notifflag = 1;
    } else {
      document.getElementById("notifPanel").classList.remove("notifacationPanelAn");
      try {
        document.getElementById("notifPanel").classList.add("notifacationPanelAnB");
      } catch (err) {
        console.error(err);
      }
      notifflag = 0;
    }
  });
  document.getElementById("timeBar").addEventListener("mouseover", function () {
    document.getElementById("notifPanel").classList.add("notifacationPanelAn");
    try {
      document.getElementById("notifPanel").classList.remove("notifacationPanelAnB");
    } catch (err) {
      console.error(err);
    }
  });
  document.getElementById("timeBar").addEventListener("mouseout", function () {
    if (notifflag == 0) {
      document.getElementById("notifPanel").classList.remove("notifacationPanelAn");
      try {
        document.getElementById("notifPanel").classList.add("notifacationPanelAnB");
      } catch (err) {
        console.error(err);
      }
    }
  });
}

//window.matchMedia('(prefers-color-scheme: dark)')
//      .addEventListener('change', event => {
//  if (event.matches) {
//      alert("light");
//  } else {
//	  alert("dark");
//  }
//})

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  $("#timerSwitch").trigger("click");
}

function changeDarkModeBGImg() {
  csschange('.startWindow{background-image:linear-gradient(-135deg,rgb(3,5,57),rgb(29,4,41));}');
  if (window.matchMedia && window.matchMedia('(max-width: 950px)').matches) {
    csschange('body{background-image:linear-gradient(-135deg,rgb(3,5,57),rgb(29,4,41));}');
    csschange('.window::before{background-image:linear-gradient(-135deg,rgb(3,5,57),rgb(29,4,41));}');
    csschange('.menuBar::before{background-image:linear-gradient(-135deg,rgb(3,5,57),rgb(29,4,41));}');
    csschange('.dockOut::before{background-image:linear-gradient(-135deg,rgb(3,5,57),rgb(29,4,41));}');
    csschange('.wrap-ms-right::before{background-image:linear-gradient(-135deg,rgb(3,5,57),rgb(29,4,41));}');
  } else {
    csschange('body{background: url(\"img/backgroundb.png\") 0 / cover fixed;}');
    csschange('.window::before{background: url(\"img/backgroundb.png\")  0 / cover fixed;}');
    csschange('.menuBar::before{background: url(\"img/backgroundb.png\")  0 / cover fixed;}');
    csschange('.dockOut::before{background: url(\"img/backgroundb.png\")  0 / cover fixed;}');
    csschange('.wrap-ms-right::before{background: url(\"img/backgroundb.png\")  0 / cover fixed;}');
	// csschange('body:before, .window::before, .menuBar::before, .dockOut::before, .wrap-ms-right::before {content:\"\";position:fixed;z-index:-1;top:0;right:0;bottom:0;left:0;background:url("../img/backgroundb.png")center 0 no-repeat;background-size:cover;}');
  }
}

// 3 5 57  29 4 41
function changeLightModeBGImg() {
  csschange('.startWindow{background-image:linear-gradient(-135deg,rgb(252,250,202),rgb(195,250,215));}');
  if (window.matchMedia && window.matchMedia('(max-width: 950px)').matches) {
    csschange('body{background-image:linear-gradient(-135deg,rgb(252,250,202),rgb(195,250,215));}');
    csschange('.window::before{background-image:linear-gradient(-135deg,rgb(252,250,202),rgb(195,250,215));}');
    csschange('.menuBar::before{background-image:linear-gradient(-135deg,rgb(252,250,202),rgb(195,250,215));}');
    csschange('.dockOut::before{background-image:linear-gradient(-135deg,rgb(252,250,202),rgb(195,250,215));}');
    csschange('.wrap-ms-right::before{background-image:linear-gradient(-135deg,rgb(252,250,202),rgb(195,250,215));}');
  } else {
    csschange('body{background: url(\"img/background.png\")  0 / cover fixed;}');
    csschange('.window::before{background: url(\"img/background.png\")  0 / cover fixed;}');
    csschange('.menuBar::before{background: url(\"img/background.png\")  0 / cover fixed;}');
    csschange('.dockOut::before{background: url(\"img/background.png\")  0 / cover fixed;}');
    csschange('.wrap-ms-right::before{background: url(\"img/background.png\")  0 / cover fixed;}');
	// csschange('body:before, .window::before, .menuBar::before, .dockOut::before, .wrap-ms-right::before {content:"";position:fixed;z-index:-1;top:0;right:0;bottom:0;left:0;background:url("../img/background.png")center 0 no-repeat;background-size:cover;}');
  }
}

var elem = document.querySelector('input[type="range"]');

var rangeValue = function () {
  var newValue = elem.value;
  document.querySelector('.rang_width').style.width = 0.8 * newValue + "%";
  if (newValue == 0) {
    document.getElementById("vicon").innerHTML = '<svg t="1653063555992" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9777" width="200" height="200"><path d="M960 619.136l0 84.864-84.864 0-107.136-107.136-107.136 107.136-84.864 0 0-84.864 107.136-107.136-107.136-107.136 0-84.864 84.864 0 107.136 107.136 107.136-107.136 84.864 0 0 84.864-107.136 107.136 107.136 107.136z" p-id="9778" fill="#707070"></path><path d="M416 960c-8.32 0-16.512-3.264-22.624-9.376l-246.624-246.624-114.752 0c-17.664 0-32-14.336-32-32l0-320c0-17.664 14.336-32 32-32l114.752 0 246.624-246.624c9.152-9.152 22.912-11.904 34.88-6.944s19.744 16.608 19.744 29.568l0 832c0 12.928-7.808 24.608-19.744 29.568-3.968 1.632-8.128 2.432-12.256 2.432z" p-id="9779" fill="#707070"></path></svg>';
  } else {
    document.getElementById("vicon").innerHTML = '<svg t="1653063640060" class="icon" viewBox="0 0 1088 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10039" width="200" height="200"><path d="M890.048 922.048a48 48 0 0 1-33.92-81.984c87.616-87.616 135.872-204.16 135.872-328.128s-48.256-240.448-135.872-328.128a48 48 0 1 1 67.904-67.904c105.792 105.792 164.032 246.4 164.032 395.968s-58.24 290.176-164.032 395.968a47.872 47.872 0 0 1-33.92 14.08z m-170.496-90.496a48 48 0 0 1-33.92-81.984 336.384 336.384 0 0 0 0-475.2 48 48 0 1 1 67.904-67.904c81.6 81.6 126.528 190.08 126.528 305.472s-44.928 223.872-126.528 305.472a47.872 47.872 0 0 1-33.92 14.08z m-170.56-90.56a48 48 0 0 1-33.92-81.984 208.256 208.256 0 0 0 0-294.144 48 48 0 1 1 67.904-67.904 304.384 304.384 0 0 1 0 429.952 47.872 47.872 0 0 1-33.92 14.08zM416 960a32.256 32.256 0 0 1-22.656-9.344L146.688 704H31.936a32 32 0 0 1-32-32v-320a32 32 0 0 1 32-32h114.752l246.656-246.656A31.936 31.936 0 0 1 448 96v832a32 32 0 0 1-32 32z" p-id="10040" fill="#707070"></path></svg>';
  }
};

elem.addEventListener("input", rangeValue);
