function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  } else {
    i = "" + i;
  }
  return i;
}

function show() {
  var date = new Date();
  var now = "";
  //now = date.getFullYear()+"年";
  //now = now + (date.getMonth()+1)+"月";
  //now = now + date.getDate()+"日"; 
  //now = now + date.getHours()+"时"; 
  //now = now + date.getMinutes()+"分"; 
  //now = now + date.getSeconds()+"秒"; 
  now = date.getMonth() + 1 + "月";
  now = now + date.getDate() + "日 ";
  now = now + addZero(date.getHours());
  now = now + ":";
  now = now + addZero(date.getMinutes());
  //now = now + date.getMinutes();
  document.getElementById("nowDiv").innerHTML = now;
  document.getElementById("lockScreentime").innerHTML = now;
  setTimeout("show()", 1000);
}
