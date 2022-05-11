(function(){
	// ? 함수가 맞긴한가? 왜 소괄호만 두개 연달아서 쓰지?

	function Countstep(){ 
		// ? Counstep이라는 함수는 내가 만든 함수인가?
		this.init();
		// this라는 무언가의 객체로 init이라는 함수가 존재
		// todo this와 init 알아보기

		return this.count;
		// this의 객체중 count라는 것을 반환해줘
		// ?엄... return을 이렇게 쓰는게 맞아?
		// memo 이렇게 return만 쓰고 옆에 반환할 값스는 거 맞다고함!!
		
	}
	
	Countstep.prototype = {
		//  Countstep 의 객체중에 prototype이라는게 있나봐
		// todo Counstep의 객체 중 prototype 찾기

		init:function(){
			// memo 오 Countstep이라는 함수의 prototype에 객체로 init를 넣었네
			
			var _this=this;
			// ? 허허 이게 무슨 소리일까 알아 들을 수 있는게 var랑 = 밖에 없네
			
			_this.flag = false; 
			// ?  _하면 var인건가?
			// this라는 요소의 객체중 flag에 false를 대입
			
			
			
			
		}
		
		


	}
	

	window.Countstep = Countstep;


	// ? window에 있는 Countstep이라는 객체와 Countstep이라는 개나 만든 함수와는 다른 존재인데 그걸 대입했나? 그럴거면 왜이렇게 이름을 같게지음?
	
}) ();