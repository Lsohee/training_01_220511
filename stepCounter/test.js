function Foo(){  
  this.count = 10  
  this.getCount = function(){  
    return this.count  
  }  
}  
  
const foo = new Foo()  
console.log(foo.getCount()) 

//  console 출력된 값은 10 임