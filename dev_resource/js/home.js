var demo = document.querySelector(".demo");
window.addEventListener("touchstart", function(e){
	demo.innerHTML = "触屏开始：" + [e.touches.length, e.targetTouches.length, e.changedTouches.length];
}, 0);
window.addEventListener("touchend", function(e){
	demo.innerHTML = "触屏结束：" + [e.touches.length, e.targetTouches.length, e.changedTouches.length];
}, 0);