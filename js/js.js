window.onload = function() {
	var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var audio = document.getElementById('music1');
    var music = document.getElementById('music');
    audio.addEventListener("ended", function(event) {
        play.setAttribute('style', 'animation-play-state:paused');
    }, false);
    /*document.getElementById("music").onclick = function() {
        var audio = document.getElementById('music1');
        var play = document.getElementById('play')
        if (audio.paused) {
            audio.play(); //audio.play();// 这个就是播放  
            play.setAttribute('style', 'animation-play-state:running');
        } else {
            audio.pause(); // 这个就是暂停
            play.setAttribute('style', 'animation-play-state:paused');
        };

    };*/
    music.addEventListener('touchstart',function(event){
    	var play = document.getElementById('play')
        if (audio.paused) {
            audio.play(); //audio.play();// 这个就是播放  
            play.setAttribute('style', 'animation-play-state:running');
        } else {
            audio.pause(); // 这个就是暂停
            play.setAttribute('style', 'animation-play-state:paused');
        };
    },false)
    //document.getElementById("p1_lantern2").onclick = function() {
    //    var p1_lantern2 = document.getElementById('p1_lantern2');
    //    p1_lantern2.setAttribute('style', '-webkit-animation: p1_lantern2 2s linear infinite forwards');
    //};
    page1.addEventListener('touchstart', function(event){
    	page1.style.display="none";
    	page2.style.display="block";
    	page3.style.display="block";
    }, false);
    page3.addEventListener("touchstart", function(e) {
        e.preventDefault();
        startX = e.changedTouches[0].pageX,
        startY = e.changedTouches[0].pageY;
    },false);
    page3.addEventListener("touchmove", function(e) {
        e.preventDefault();
        moveEndX = e.changedTouches[0].pageX,
        moveEndY = e.changedTouches[0].pageY,
           X = moveEndX - startX,
           Y = moveEndY - startY;
        if (Math.abs(Y) > Math.abs(X) && Y > 0) {
           page3.style.animation="page3_down 0.5s linear  forwards";
           page2.style.animation="page2_down 0.5s linear  forwards";  
           }               
    },false);
    page2.addEventListener("touchstart", function(e) {
        e.preventDefault();
        startX = e.changedTouches[0].pageX,
        startY = e.changedTouches[0].pageY;
    },false);
    page2.addEventListener("touchmove", function(e) {
        e.preventDefault();
        moveEndX = e.changedTouches[0].pageX,
        moveEndY = e.changedTouches[0].pageY,
           X = moveEndX - startX,
           Y = moveEndY - startY;
        if (Math.abs(Y) > Math.abs(X) && Y < 0) {
           page3.style.animation="page3_up 0.5s linear  forwards";
           page2.style.animation="page2_up 0.5s linear  forwards";  
           }               
    },false);
   }