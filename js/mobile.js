var windowX, windowY;

if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {

  //finder
  var app = document.getElementById("finderBar");
  var hammertime = new Hammer(app);
  hammertime.on('panstart', function (ev) {
    windowX = app.parentNode.offsetLeft;
    windowY = app.parentNode.offsetTop;
    app.parentNode.style.left = windowX + "px";
    app.parentNode.style.top = windowY + "px";
  });
  hammertime.on('panmove', function (ev) {
    app.parentNode.style.left = windowX + ev.deltaX + "px";
    app.parentNode.style.top = windowY + ev.deltaY + "px";
  });

  //safari
  var app2 = document.getElementById("safariBar");
  var hammertime2 = new Hammer(app2);
  hammertime2.on('panstart', function (ev) {
    windowX = app2.parentNode.offsetLeft;
    windowY = app2.parentNode.offsetTop;
    app2.parentNode.style.left = windowX + "px";
    app2.parentNode.style.top = windowY + "px";

  });
  hammertime2.on('panmove', function (ev) {
    app2.parentNode.style.left = windowX + ev.deltaX + "px";
    app2.parentNode.style.top = windowY + ev.deltaY + "px";
  });

  //app store
  var app3 = document.getElementById("appstoreBar");
  var hammertime3 = new Hammer(app3);
  hammertime3.on('panstart', function (ev) {
    windowX = app3.parentNode.offsetLeft;
    windowY = app3.parentNode.offsetTop;
    app3.parentNode.style.left = windowX + "px";
    app3.parentNode.style.top = windowY + "px";

  });
  hammertime3.on('panmove', function (ev) {
    app3.parentNode.style.left = windowX + ev.deltaX + "px";
    app3.parentNode.style.top = windowY + ev.deltaY + "px";
  });

  //pd
  var app4 = document.getElementById("pdBar");
  var hammertime4 = new Hammer(app4);
  hammertime4.on('panstart', function (ev) {
    windowX = app4.parentNode.offsetLeft;
    windowY = app4.parentNode.offsetTop;
    app4.parentNode.style.left = windowX + "px";
    app4.parentNode.style.top = windowY + "px";

  });
  hammertime4.on('panmove', function (ev) {
    app4.parentNode.style.left = windowX + ev.deltaX + "px";
    app4.parentNode.style.top = windowY + ev.deltaY + "px";
  });

  //text edit
  var app5 = document.getElementById("texteditBar");
  var hammertime5 = new Hammer(app5);
  hammertime5.on('panstart', function (ev) {
    windowX = app5.parentNode.offsetLeft;
    windowY = app5.parentNode.offsetTop;
    app5.parentNode.style.left = windowX + "px";
    app5.parentNode.style.top = windowY + "px";

  });
  hammertime5.on('panmove', function (ev) {
    app5.parentNode.style.left = windowX + ev.deltaX + "px";
    app5.parentNode.style.top = windowY + ev.deltaY + "px";
  });

  //prrference
  var app6 = document.getElementById("preferenceBar");
  var hammertime6 = new Hammer(app6);
  hammertime6.on('panstart', function (ev) {
    windowX = app6.parentNode.offsetLeft;
    windowY = app6.parentNode.offsetTop;
    app6.parentNode.style.left = windowX + "px";
    app6.parentNode.style.top = windowY + "px";

  });
  hammertime6.on('panmove', function (ev) {
    app6.parentNode.style.left = windowX + ev.deltaX + "px";
    app6.parentNode.style.top = windowY + ev.deltaY + "px";
  });

  //folder-tools
  var app7 = document.getElementById("foldertoolsBar");
  var hammertime7 = new Hammer(app7);
  hammertime7.on('panstart', function (ev) {
    windowX = app7.parentNode.offsetLeft;
    windowY = app7.parentNode.offsetTop;
    app7.parentNode.style.left = windowX + "px";
    app7.parentNode.style.top = windowY + "px";

  });
  hammertime7.on('panmove', function (ev) {
    app7.parentNode.style.left = windowX + ev.deltaX + "px";
    app7.parentNode.style.top = windowY + ev.deltaY + "px";
  });

  swal({
    title: "有关移动端的提示",
    text: "由于移动端屏幕尺寸和与电脑端不同的交互方式的限制，某些功能可能会被屏蔽。<h4>由于网站还在测试过程中，也可能会出一些bug</h4>",
    html: true,
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    closeOnConfirm: false,
    closeOnCancel: true
    //		},
    //		function(isConfirm){if (isConfirm) {location.reload();}
  });
}
