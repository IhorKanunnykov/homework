'use strict';

//************************************************ 10 *********************
/*{
	

	let arr=[]; 
	arr.length = prompt('длина массива','');
	
    for(let i = 0; i<arr.length; i++){
    	arr[i]='x';
    	for(let a=0; a<i; a++){
    	arr[i]+='x';	
    		
    	}
    	
	}console.log(arr);

}*/




//************************************************ 11 *********************
/*{	
	let str = ''
	let arr=[]; 
	arr.length = prompt('длина массива','');
	for(let i = 0;i<arr.length;i++){
		arr[i]=1;
		for(let a=0; a<i; a++){
			arr[i]+=1;
		}
	}console.log(arr);
} */
//**********************************************************************
/*{
	let str = '';
	let arr = [];

	for(let i = 1; i < 10; i++) {
	  for(let j = 1; j <= i; j++) {
	    str += i;
	  }
	  arr.push(str);
	  str = '';
	}
	console.log(arr);
}
*/
//************************************************ 12 *********************	
/*{
	let arr = [4, 1, 3, 1, 1, 9, 2];
	let a = 0;
	for(let i = 0; i < arr.length; i++) {
  		a += arr[i];
  			if(a > 10) {
    		console.log(i + 1);
   			 break;
  			}
	}
}*/
//************************************************ 13 *********************	

/*{
	let arr = [1,2,3,4,5];

	arr.sort((a, b) => b - a); //такой отработает если каждый новый элемент больше предидущего

	console.log(arr);
}*/
//*************************************************************************
/*	let arr = [4,6,7,9,5];
	let array = [];
	for (let i =arr.length-1; i>=0; i--){
		array.push(arr[i]); //такой отработает при любых числовых значениях каждого элемента
	}console.log(array);
*/

//************************************************ 14 *********************	

/*{
	let arr = [9,3,4,6,10,18];
	let array =[];
	for(let i =0; i<arr.length;i++){
		if (arr[i]>0 && arr[i]<10){
			array.push(arr[i]);
		}
	}console.log(array);	
}*/

//************************************************ 15 *********************	

/*{
	let arr = [2,3,4,5,6,7,8,9,10,11,14,16,221,444];
	let array = [];
	for(let i =0; i<arr.length; i++){
		if(arr[i]%2===0){
			array.push(arr[i]);
		}
	}console.log(array);
}*/



//************************************************ 18 *********************	

/*{
	let arr = [[1,2,3],[4,5],[9]];
	let sum=0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i].reduce(function(sum, item) {//такую я загуглил,но этого не совсем пнимаю пока что.
    		return sum + item;
  		})
	}console.log(sum);
}*/
/*{
	let arr = [[1,2,3],[4,5],[9]];
	let sum=0;
	for(let i = 0; i < arr.length; i++){
		for(let j=0; j<arr[i].length; j++){
			sum+=arr[i][j];
			
		}
	}	console.log(sum);
}*/

//************************************************ 19 *********************	
/*{
	const arr_1=[];	
	const arr_2=[];
	const arr_3=[];
	const arr_4=[];
	const arr_5=[];
	const arr_6=[];
	const arr_7=[];
	const arr_8=[];
	const arr_9=[];
	const arr_10=[];

	for(let i=0;i<10;i++){
		arr_1[i]=i+1;
	}
	for(let i=0;i<10;i++){
		arr_2[i]=2*i+2;
	}
	for(let i=0;i<10;i++){
		arr_3[i]=3*i+3;
	}
	for(let i=0;i<10;i++){
		arr_4[i]=4*i+4;
	}
	for(let i=0;i<10;i++){
		arr_5[i]=5*i+5;
	}
	for(let i=0;i<10;i++){
		arr_6[i]=6*i+6;
	}
	for(let i=0;i<10;i++){
		arr_7[i]=7*i+7;
	}
	for(let i=0;i<10;i++){
		arr_8[i]=8*i+8;
	}
	for(let i=0;i<10;i++){
		arr_9[i]=9*i+9;
	}
	for(let i=0;i<10;i++){
		arr_10[i]=10*i+10;
	}

	let arr=[arr_1,arr_2,arr_3,arr_4,arr_5,arr_6,arr_7,arr_8,arr_9,arr_10];
	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr[i].length; j++){
			document.write(arr[i][j] + " ");
		}document.write("<br>");
	}

}*/