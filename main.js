'use strict';

//*****************************************  12

/*{
	let arr=[2,4,5,7,10];
	let newArr = arr.map(function(item){
		return item/item;
		});
	let sum=0;
	for(let i =0; i<newArr.length; i++){
		sum+=newArr[i]
	}console.log(sum);
	

		   // const sumArr = [1,2,3,4].reduse((acc,item) => acc+=item, 0);
			//console.log(sumArr);//а вот это не работает

	
}*/


//*****************************************  13

/*function numeralOperations(item){
	
	if(item>10){
		return(item**2);
	}else if(item<7){
		return 'число меньше 7';
	}else if(item===8){
		return 'равно 8';
	}else if(item===9){
		return 'равно 9';
	}
}console.log(numeralOperations(8));*/

//*****************************************  14
/*{	
	function ucFirst(str) {
	  return str[0].toUpperCase() + str.substr(1, str.length);//возврат полученной строки с заглавным 1м символом
	}
}*/	
//*****************************************  15
/*{	
	let arr=[2,4,'str']

	function inArray(str,arr){
		return arr.indexOf(str)>=0     //сравниваю элементы массива со значением аргумента str
		? true : false;                //при совпадении значений вывожу true, иначе false
	}console.log(inArray('str',arr));
}*/

//*****************************************  16
/*{
	let str = '123456';
	let arr = str.split('');
	for(let i = 0; i < arr.length; i++) {
	  if(i % 2 !== 0) {
	    let b = arr[i - 1];// 1
	    arr[i - 1] = arr[i];// 2
	    arr[i] = b;//1
	  }
	}
	str = arr.join('')
	console.log(str)
}*/

//*****************************************  17 (17 и 18 закомментировал вместе)

/*{
	function sequence(start, step){
		start-=step;//значение для старта,берет start из ф-ции ниже и отнимает степ
		return function(){ 
			return start += step;//возврат значения,которе при новом вызове увеличивается на step
		}
	}
	let genegator = sequence(1, 3);
					//console.log(genegator());
					//console.log(genegator());
					//console.log(genegator());



//*****************************************  18

	function take(gen,x){
		let arr=[];
		for(let i = 0; i<x; i++){
			arr[i]=gen();//каждому новому элементу присв работу функции
		}return arr;
	}
	console.log(take(genegator,10));//generator объявлен в 17 задаче


}*/

//*****************************************  19
/*{
	//let array = [2,4,5,6];
	function square(x){
		return x**2
	};
	function map(array,square){
		let newArr=[];
		for(let i=0; i<array.length; i++){
			newArr[i]=square(array[i])
		}return newArr;
	}console.log(map([1,2,5,7],square));
	
}*/