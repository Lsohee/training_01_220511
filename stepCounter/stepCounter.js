// ? 왜 요소를 안가져왔는데 div안에 저절로 0이 써지지?
// ^ HTML에 직접쓴 var count = new Countstep 이 가져오는 역할을 했나봐
// ? 왜 도대체 script를 따로 단거임? 두개가 다른 언어로 쓰여졌나?

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
	
	Countstep.prototype = {
		//  Countstep 의 객체중에 prototype이라는게 있나봐
		// todo Counstep의 객체 중 prototype 찾기
		/*  19 이상 성인인증 할때 마다 함수를 써줄수는 없으니까
			const (함수이름)= function(){어쪄고 저쪄고}
			함수를 이름 붙여서 (함수를 넣고 싶은 요소).prototype.(함수이름) 
			이렇게 돌아감
			?그러면 함수 말고의 다른 객체를 넣고 싶음? 
			?(객체를 넣고 싶은 요소).prototype.(넣고 싶은 객체)
		*따라서
		const objA = {
			a:1;
		}
		라는 건
		const A = {
			a:1;
		}
		objA.protptype.A
		이거임?
		? 그러면 약간 그거네 함수와 객체용 @mediaQuery(이게 맞나 css에서 이거 잘 안써서 모르겠다)
		내가 a:1; 이라는 객체를 (혹은 함수를) 
		objA에도 넣고 싶고
		objB에도 넣고 싶으면 
		objA.prototype.A;
		objB.prototype.A;
		로 하면 되는 건가?
		*/ 
		
		// Countstep의 상속받은 속성 중에는 
		// 1. init라는 객체 (근데 그 값이 함수 인)가 있음
		
		init:function(){
			// * Countstep이 상속받는 것에는 {}안에 있는 이런것들이 있다~
			
			var _this=this;
			// ? 허허 이게 무슨 소리일까 알아 들을 수 있는게 var랑 = 밖에 없네
			// * 이 아래의 _this는 Countstep.prototype이야~ 
			// ? _(언더바)도 변수로 쓸 수있나?
			

			_this.flag = false; 
			// _this라는 요소의 객체중 flag에 false를 대입
			
			_this.count=[];
			// _this의 객체 count는 배열이야
			// memo 아하 배열이라고 선언만 하고 배열 값은 안넣을 수도 있구나
			
			_this.count[0]=0;
			// _this의 객체 count 배열의 0 의 값은 0이야

			function motionHandler(event){
				// 함수를 쓰는 데 그 함수이름이 motionHandler래 
				// 매개변수는 event이고
				// * event.target을 쓸건가봐

				var accGravity = event.accelerationIncludingGravity;
				// accGravity라는 변수를 쓰는데,
				// 그건 event의 객체중에 accelerationIncludingGravity 라는 값이야

				_this.yg=accGravity.y;
				// _this의 객체중 yg라는 값에 accGravity.y를 대입해줘
				//  다르게 쓰면
				// event.accelerationIncludingGravity.y 야 (어휴 길다)

				return false;
				// 그러고 함수 밖으로는 false값을 꺼낼거야
			}
			
			function orientationHandler(event){
				// orientationHandler이라는 함수를 만드는데, 거기에 매개변수가 event야
				// *여기도 event.target을 쓸건가봐
				
				

				if((_this.yg - 10*Math.sin(event.beta*Math.PI/180))>1){
					/*
					만약에 _this.yg
					? _this.yg 이라는 변수는 앞의 motionHandler에서 할당 했으니까 motionHandler안에서만 쓸 수 있는 지역 변수니까 여기서는 그럼 빈 값 아니니?
					에
					Math.sin(
						event.beta와 Math.PI/180한 값을 변수로 넣은
						todo Math.sin과 .beta와 Math.PI를 찾아보기
					)이라는 함수의 값에 10을 곱한 것을 빼는데
					그게 1보다 크면
					*/ 
					_this.flag =true;
					// _this.flag 의 값에 true를 대입해줘
				}

				if((_this.yg - 10*Math.sin(event.beta*Math.PI/180))<-1){
					//  -1 보다 작으면
					if(_this.flag==true){
						// todo ==는 어떤 연산자일까 찾아보기
						
						_this.count[0]++;
						// _this.count[0]을 1씩 증가시켜줘 
						// _this.count[0]는 0이라고 앞에서 할당했으니 0에서 ++ 함

						_this.flag=false;
						// _this.flag에 false를 대입 해줘

						
					};
				}
				
				
				
			}

			if(window.DeviceMotionEvent && window.DeviceOrientationEvent){
				// 만약에 window.DeviceMotionEvent 와 window.DeviceOrientationEvent가 모두 true면
				// memo 꼭 맞다 아니다가 아니라 값이 true 인지 판별하는데 쓰는 구나

				window.addEventListener("devicemotion", motionHandler, false);
				// window에 이벤트감지기능을 넣는데 devicmotion이라는 이벤트를 감지하고 그때 작동시키는 함수는 motionHandler고 
				//? 마지막 값 false는 뭘까

				window.addEventListener("deviceorientation", orientationHandler, false);
				// window 에 이벤트 감지 기능을 넣는데 devicrorientation이라는 이벤트를 감지하고 그때 작동시키는 함수는 orientationHandler고
				// ? 얘도 false는 뭔지 모르겠다
			} else {
				//  만약에 하나라도 false가 있으면
				alert("귀하의 브라우저는 이 단계 계산 플러그인을 지원하지 않습니다");
				// 귀하의 브라우저는 이 단계 계산 플러그인을 지원하지 않습니다라는 문구의 경고창을 띄어줘
			}
		}

	}
	

	window.Countstep = Countstep;


	// ? window에 있는 Countstep이라는 객체와 Countstep이라는 내가 만든 함수와는 다른 존재인데 그걸 대입했나? 그럴거면 왜이렇게 이름을 같게지음?
	
}) ();


/*
  함수 First 에는 
	객체가 3개 있는데,
	^하나는 function Countstep 이고
	^두번째는 Countstep라는 함수안에 있는 객체 중에 값을 정해준 객체이고
	? 내가 prototype을 제대로 이해한게 맞니?
	^마지막이 window.Countstep 에 함수 Countstep을 대입하라는 객체
	? window.Countstep과 Countstep은 다른거임?
	다른거니까 대입을 하는 거 겠죠?
	그럼 하나는 원래 정해준 값이고 하나는 내가 만든 함수인가?
	아무리 그 이름을 가진 객체에 넣을 값이래도 
	객체 이름이랑 완전히 똑같이 하면 어케!!!!!!!!

	? 근데 console.dir(window) 해서 Countstep을 찾아봤지만 없음
	? 뭐임? 어디서 온 window.Countstep임 그러면?

*/