// ? 왜 요소를 안가져왔는데 div안에 저절로 0이 써지지?


(function(){
	// ? 함수가 맞긴한가? 왜 소괄호만 두개 연달아서 쓰지?
	// 함수가 맞으면 편의상 First 라고 부르겠음

	function Countstep(){ 
		// ? Counstep이라는 함수는 내가 만든 함수인가?
		this.init();
		// this라는 무언가의 객체로 init이라는 함수가 존재
		// todo this와 init 알아보기
		// memo 공부해서 다시 해석해보면 First의 init라는 새로만든 함수나 객체(소괄호 있으니께 함수 것쥬?)를 객체로 가짐...인가?
		
		
		

		/*
		todo this 란?
		const test = {
			^test라는 걸 선언하는데 그 값이
			value :42
			^ 객체 value라는 게 들어있고 그게 42임
			func : function(){
			^ 객체 func에는 함수가 있는데 그 함수는 
				return this.value;
				^this의 객체인 value의 값을 반환하는 함수야
			}
		}
		console.log(test.func());
		^ 이렇게 해서 test의 객체 func의 값을 찍으면

		expected output : 42 
		^ 콘솔에 42가 찍혀

		memo 결론 : 이 해당 함수의 부모 객체를 가르킴
		*/ 

		/*
		todo init 이란?

		memo 사용자가 임의로 이름을 지어서 만드는 함수
		memo 초기의 의미를 가진 함수나 객체를 작성할 때 많이 씀
		? 걍 우리가 맨날 쓰는 value나 i 나 #root 같은 거 ?

		*/

		
		
		
		
		
		
		return this.count;
		// this의 객체중 count라는 것을 반환해줘
		// ?엄... return을 이렇게 쓰는게 맞아?
		// memo 이렇게 return만 쓰고 옆에 반환할 값쓰는 거 맞다고함!!
		// todo count라는 객체가 뭘 가져오는 건지 찾아보기
		/*
		? 왜........안나옴?
		console.count라는 함수가 나옴 ->  count()호출의 횟수를 세어 출력하는 메서드래
		그러면 .count는 무언가를 세어주는 것이겠다
		todo this.count라는 값이 이 밑에 정해져있나 볼것
		 */
	}
	
	//  19 이상 성인인증 할때 마다 함수를 써줄수는 없으니까
	//  const (함수이름)= function(){어쪄고 저쪄고}
	//  함수를 이름 붙여서 (함수를 넣고 싶은 요소).prototype.(함수이름) 

	//  이렇게 돌아감

	// ?그러면 함수 말고의 다른 객체를 넣고 싶음? 
	// ?(객체를 넣고 싶은 요소).prototype.(넣고 싶은 객체)

	/*따라서
	const objA = {
		a:1;
	}
	라는 건


	const A = {
		a:1;
	}
	objA.protptype.A
	
	이거임?

	그러면 약간 그거네 함수와 객체용 @mediaQuery(이게 맞나 css에서 이거 잘 안써서 모르겠다)

  내가 a:1; 이라는 객체를 (혹은 함수를) 

	objA에도 넣고 싶고
	objB에도 넣고 싶으면 

	objA.prototype.A;
	objB.prototype.A;
	로 하면 되는 건가?
  
	*/ 
	
	
	
	
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


	// ? window에 있는 Countstep이라는 객체와 Countstep이라는 내가 만든 함수와는 다른 존재인데 그걸 대입했나? 그럴거면 왜이렇게 이름을 같게지음?
	
}) ();