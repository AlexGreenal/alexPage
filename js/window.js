$(function () {
  //移动窗口，并置顶窗口
  $(".window .titleBar").bind("mousedown", function (e1) {
    var _this = $(this).parents(".window");
    var oldpageX = e1.pageX;
    var oldpageY = e1.pageY;
    var oldLeft = parseInt(_this.css("left"));
    var oldTop = parseInt(_this.css("top"));
    //	 console.log(oldpageX);
    setMoveItemToppest(_this); //置顶
    $(document).bind("mousemove.window", function (e2) {
      _this.css("left", e2.pageX - oldpageX + oldLeft + "px");
      _this.css("top", e2.pageY - oldpageY + oldTop + "px");
	  if(e2.pageX - oldpageX + oldLeft < 200){
		  $("#wdd").addClass("windowDockAppear");
		  $("#wdd").removeClass("windowDockDisappear");
		  _this.css("zoom",0.4);
	  }else{
		  $("#wdd").addClass("windowDockDisappear");
		  $("#wdd").removeClass("windowDockAppear");
		  _this.css("zoom",1);
	  }
    });
    $(document).bind("mouseup.window", function (e2) {
      $(document).unbind("mousemove.window");
      $(document).unbind("mouseup.window");
    });
  });

  //点击时置顶
  $(".window").bind("click", function () {
    setMoveItemToppest($(this));
    //    $(".window").not(this).children(".headBar").children(".windowOperateButtons").children().css({'color':'gray','background-color':'gray'});
    $(".window").not($(this)).addClass("disableStyle");
    //    $(".window").not(this).children(".headBar").children(".windowOperateButtons").children().addClass("grayButtons");
    $(this).removeClass("disableStyle");
    //    $(".window").not(this).children(".headBar").children(".windowOperateButtons").children().removeClass("grayButtons");
  });

  //置顶窗口方法
  function setMoveItemToppest(_this) {
    function sortNumber(a, b) {
      return a - b;
    }
    var zIndexArr = [];
    $(document).find(".window").each(function () {
      zIndexArr.push(parseInt($(this).css("z-index")));
    });
    zIndexArr.sort(sortNumber);
    _this.css("z-index", zIndexArr[zIndexArr.length - 1] + 1);
  }

  //右下角改变窗口大小
  $(".window .dragBox").bind("mousedown", function (e1) {
    var _this = $(this).parents(".window");
    var oldpageX = e1.pageX;
    var oldpageY = e1.pageY;
    var oldWidth = parseInt(_this.css("width"));
    var oldHeight = parseInt(_this.css("height"));
    $(document).bind("mousemove.window", function (e2) {
      if ((e2.pageX - oldpageX + oldWidth) > 150 && (e2.pageY - oldpageY + oldHeight) > 150) {
        _this.css("width", e2.pageX - oldpageX + oldWidth + "px");
        _this.css("height", e2.pageY - oldpageY + oldHeight + "px");
        // _this.children(".windowBody").css("height", "calc(100% - 95px)");
      }
    });
    $(document).bind("mouseup.window", function (e2) {
      $(document).unbind("mousemove.window");
      $(document).unbind("mouseup.window");
    });
  });

  //关闭按钮
  $(".window .close").click(function () {
    //    $(this).parents(".headBar").parent().remove();
    $(this).parents(".headBar").parent().css('display', 'none');
  });

  //取消按钮
  $(".window .no").click(function () {
    //    $(this).parents(".windowFooter").parent().remove();
    $(this).parents(".windowFooter").parent().css('display', 'none');
  });

  //全屏按钮
  $(".maxsize").click(function (e) {
    $(this).attr("disabled", "disabled");
    $(this).siblings(".minisize").attr("css-data", $(this).parents(".headBar").parent().attr("style"));
    $(this).parents(".headBar").parent().css({
      "left": "0",
      "top": "25px",
      "height": "88vh",
      "width": "100%",
    });
    // $(this).parents(".window").children(".windowBody").css("height", "calc(100% - 95px)");
    $(this).siblings(".minisize").removeAttr("disabled");
  });

  //还原按钮
  $(".minisize").click(function () {
    $(this).parents(".headBar").parent().attr("style", $(this).attr("css-data"));
    $(this).attr("disabled", "disabled");
    $(this).siblings(".maxsize").removeAttr("disabled");
  });
});
