//visibility: visible
//function sleep(d){
//  for(var t = Date.now();Date.now() - t <= d;);
//}

var windowFlag = 0;

function toggleFullScreen() {
  if (!document.fullscreenElement
    && // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

$(document).ready(function () {
  $("#pic2").bind("click", function () {
    if (windowFlag == 0) {
      document.getElementById("dot2").style.visibility = "visible";
      toggleFullScreen();
      //		setTimeout(function () {
      //			alert("模块未安装");
      //			document.getElementById("dot2").style.visibility = "hidden";
      //		}, 1000);
      windowFlag = windowFlag + 1;
    } else {
      toggleFullScreen();
      document.getElementById("dot2").style.visibility = "hidden";
      windowFlag = 0;
    }
  });
  $("#close1").bind("click", function () {
    document.getElementById("dot4").style.visibility = "hidden";
  });
  $("#close3").bind("click", function () {
    document.getElementById("dot3").style.visibility = "hidden";
  });
  $("#close4").bind("click", function () {
    document.getElementById("dot6").style.visibility = "hidden";
  });
  $("#close5").bind("click", function () {
    document.getElementById("dot5").style.visibility = "hidden";
  });
  $("#close6").bind("click", function () {
    document.getElementById("dot7").style.visibility = "hidden";
  });
});

$(".window").css('display', 'none');
if (window.matchMedia && window.matchMedia('(max-width: 350px)').matches) {
  $(".window2").css('display', 'none');
} else {
  $(".window2").css('display', 'block');
}


$("#finder").click(function () {
  $(".window2").css('display', 'block');
});

$("#safari").click(function () {
  if (window.matchMedia && window.matchMedia('(max-width: 490px)').matches) {
    window.location.href = "src/alex/index.html";
  } else {
    $(".window3").css('display', 'block');
    document.getElementById("dot3").style.visibility = "visible";
  }
});

$("#pd").click(function () {
  if (window.matchMedia && window.matchMedia('(max-width: 490px)').matches) {
    window.location.href = "src/alex/index.html";
  } else {
    $(".window4").css('display', 'block');
    document.getElementById("dot5").style.visibility = "visible";
  }
});

$("#appstore").click(function () {
  if (window.matchMedia && window.matchMedia('(max-width: 490px)').matches) {
    window.location.href = "src/alex/index.html";
  } else {
    $(".window1").css('display', 'block');
    document.getElementById("dot4").style.visibility = "visible";
  }
});

$("#settings").click(function () {
  if (window.matchMedia && window.matchMedia('(max-width: 490px)').matches) {
    window.location.href = "src/alex/index.html";
  } else {
    $(".window5").css('display', 'block');
    document.getElementById("dot6").style.visibility = "visible";
  }
});

$("#textedit").click(function () {
  if (window.matchMedia && window.matchMedia('(max-width: 490px)').matches) {
    window.location.href = "src/alex/index.html";
  } else {
    $(".window6").css('display', 'block');
    document.getElementById("dot7").style.visibility = "visible";
  }
})

//$("#folder").click(function () {
//  if (window.matchMedia && window.matchMedia('(max-width: 490px)').matches) {
//    window.location.href = "src/alex/index.html";
//  } else {
//    $(".window7").css('display', 'block');
//  }
//})
