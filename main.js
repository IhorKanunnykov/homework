(function(){
	'use strict';

	//*****************************12

	/*{
		let arr = ['a','b','c'];
		let newArr = [1,2,3]
		let array = arr.concat(newArr);
		let newArray =[...arr,...newArr];
		console.log(array);
		console.log(newArray);
	}*/

	//*****************************13
	/*{
		let arr = ['a','b','c'];
		arr.push(1,2,3);
		console.log(arr);
	}*/

	//*****************************14

	/*{
		let arr = ['a','b','c'];
		arr.unshift(4,5,6);
		console.log(arr);
	}*/

	//*****************************15
	/*{
		let arr=[1,2,3,4,5];
		let newArr = arr.slice(0,3);
		console.log(newArr);
	}*/
	//*****************************16
	/*{
		let arr=[1,2,3,4,5];
		let newArr = arr.slice(-2);
		console.log(newArr);
	}*/

	//*****************************17
	/*{
		let arr=[1,2,3,4,5];
		arr.splice(1,2);
		console.log(arr);
	}*/

	//*****************************18
    /*{
		let arr=[1,2,3,4,5];
		let newArr=arr.splice(1,3);
		console.log(newArr);
	}*/

	//*****************************19
	/*{
		let arr=[1,2,3,4,5];
		arr.splice(2,0,'a','b','c')
		console.log(arr);
	}*/
	//*****************************20
	/*{
		let arr=[1,2,3,4,5];
		arr.splice(1,0, 'a', 'b');
		arr.splice(6,0,'c');
		arr.splice(8,0,'e')
		console.log(arr);
	}*/

	//*****************************21

	/*{
		let testHello={
			js:'test',
			jq: 'hello', 
			css: 'world'
		}
		let arr=[]
		for(let key in testHello){
			arr.push(key)
		}console.log(arr);

	}*/

})();