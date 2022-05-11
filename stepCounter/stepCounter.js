(function(){

	function Countstep(){
	   this.init();
	   return this.count;

	}

Countstep.prototype={
	init:function(){
		var _this=this;
		_this.flag=false;
		_this.count=[];//使用数组实现按引用传值；// ? 참조에 의한 전달을 구현하기 위해 배열을 사용합니다.
		_this.count[0]=0;
	   function motionHandler(event) {  
	   		 var accGravity = event.accelerationIncludingGravity;  
	   		 _this.yg=accGravity.y;
	   		 return false;
	   }
	    function orientationHandler(event){
	    	 if ((_this.yg-10*Math.sin(event.beta*Math.PI/180))>1) {
                 _this.flag=true;
             }
             if((_this.yg-10*Math.sin(event.beta*Math.PI/180))<-1){
                     if(_this.flag==true){
                        _this.count[0]++;
                        _this.flag=false;  
                      
                     };
                     
                 }
	    }
 
	     if (window.DeviceMotionEvent&&window.DeviceOrientationEvent) {  
          window.addEventListener("devicemotion",motionHandler, false); 
          window.addEventListener("deviceorientation",orientationHandler, false); 
          return _this.count;
        }
         else {  
          alert('您的浏览器不支持本计步插件'); //*귀하의 브라우저는 이 단계 계산 플러그인을 지원하지 않습니다
        }  

	},


}
  window.Countstep=Countstep;
})();