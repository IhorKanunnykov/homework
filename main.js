'use strict';
//****************************************** 1

/*{
	function arrayFill(a,b){
		let arr =[];
		for(let i = 0;i<b; i++){
			arr[i]=a;
		}return arr;
	}console.log(arrayFill(3,5));//вывожу пять троек
}*/


//****************************************** 2в предидущем дз
//******************************************  3
/*{
	let arr =[[[1,2],[3,4],[5,6],[7,8]]];
	let sum = 0;
	for(let i = 0;i<arr.length;i++){
		for(let j = 0;j<arr[i].length;j++){
			for(let x = 0;x<arr[i][j].length;x++){
				sum+=arr[i][j][x];
			}
		}
	}console.log(sum);


	const sumArr = [1,2,3,4].reduse((acc,item) => acc+=item, 0);
	console.log(sumArr);//а вот это не работает

}*/


//******************************************  4
/*{
	function isNamberRange(a){
		return a>0 && a<10;//от 1 до 10 верну true. в других случаях false
	}console.log(isNamberRange(0));//
}*/

//******************************************  5

/*{
	function isEven(item){
		return item%2 === 0;//верну true при четном значении
	}console.log(isEven(4));

//*****************************************  6

	const arr = [1,1,3,5,6,8,33,14];
	const newArr = arr.filter(arr=>isEven(arr));
	console.log(arr,newArr);

}*/

//*****************************************  7
/*let arrFilter=arr.filter(function (el){
			return el !=null;
		}); это аналог 76й строке(стрелочной функции)*/








/*{
	function getDivisors(item){
		let arr = [];
		for(let i=0;i<=item;i++){
			if(item%i===0){
				arr[i]=i;
			}
		}
		let arrFilter=arr.filter(el=>el !=null);

		return arrFilter;

	} console.log(getDivisors(20));
	
}*/

//*****************************************  9

/*{
	function degreeOf(a,b){
		return a**b;
	}console.log(degreeOf(4,2));
}*/

//*****************************************  10
/*{
	let age = prompt('введите Ваш возраст','');
	function comeIn(age){
		if(age>16){
			console.log('добро пожаловать');
		}else{
			console.log('вы еще слишком молоды');
		}
	}comeIn(age);
}	*/

//*****************************************  11

/*{
	let age = prompt('введите Ваш возраст','');
	function comeIn(age){
		if(age>16){
			console.log('добро пожаловать');
		}else if(age<=16){
			console.log('вы еще слишком молоды');
		}else{
			console.log('введите возраст!');
		}
	}comeIn(age);
}*/	
