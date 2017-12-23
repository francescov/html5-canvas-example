(function(){
		var canvas = document.getElementById('canvas1');
		var context = canvas.getContext('2d');
		context.fillStyle = "rgb(13,118,208)";
		
		
		if (navigator.userAgent.match(/MSIE/)) {
			context.fillRect(20,30,30,30); //left eye
			context.fillRect(150,30,30,30);	//right eye
			
			// fillRect is (x,y,width,height)
			context.fillRect(20,120,5,5);
			context.fillRect(30,130,5,5);
			context.fillRect(40,140,5,5);
			context.fillRect(50,150,5,5);
			context.fillRect(60,160,5,5);
			context.fillRect(70,165,10,5);
			context.fillRect(80,170,40,5);
			context.fillRect(120,165,10,5);
			context.fillRect(135,160,5,5);
			context.fillRect(145,150,5,5);
			context.fillRect(155,140,5,5);
			context.fillRect(165,130,5,5);
			context.fillRect(175,120,5,5);
		
		} else {
			context.fillRect(50,30,35,20); //left eye
			context.fillRect(200,30,35,20);	//right eye
			
			// fillRect is (x,y,width,height)
			context.fillRect(50,90,5,3);
			context.fillRect(60,95,5,3);
			context.fillRect(70,100,5,3);
			context.fillRect(80,105,5,3);
			context.fillRect(90,110,5,3);
			context.fillRect(100,115,10,3);
			context.fillRect(110,120,70,3);
			context.fillRect(180,115,10,3);
			context.fillRect(195,110,5,3);
			context.fillRect(205,105,5,3);
			context.fillRect(215,100,5,3);
			context.fillRect(225,95,5,3);
			context.fillRect(235,90,5,3);
		}
})();