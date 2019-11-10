"use strict";

//*****************************  1  **********************

/*{
	let a=20;
	let b=10; 
	let x; 
	
	if (a>b){
		x=a+b/2*4;
	}else if(a===b){
		x=400;
	}else if(a<b){
		x=a-b+2/b*4;
	}else{

	}
	console.log(x);
}*/

//*****************************  2.1  **********************
//переделай с уровнением прямой!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*{
	let x =prompt('enter coordinate x','');
	let y =prompt('enter coordinate y','');//-4 0  0 4  1 5
	x = parseFloat(x);
	y = parseFloat(y);
	if(x===-4 && y===0 ||
	   x===-3 && y===1 ||
	   x===-2 && y===2 ||
	   x===-1 && y===3 ||
	   x===0 && y===4 ||
	   x===1 && y===3 ||
	   x===2 && y===2 ||
	   x===3 && y===1 ||
	   x===4 && y===0 ||
	   x >=-3 && x <=3 && y===0){//нижняя линия,что лежит на оси х
		alert ('Точка попадает в линию на чертеже,красавчик!');
	}else{
		alert ('Точка не попадает в линию на чертеже.');
	}
}*/

//*****************************  2.2  **********************
//переделай с уровнением прямой!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*{
	let x =prompt('enter coordinate x','');
	let y =prompt('enter coordinate y','');
	x = parseFloat(x);
	y = parseFloat(y);
	if(x===0 && y===0 ||
	   x>=-1 && x<=1 && y===1 ||
	   x>=-1 && x<=1 && y===-1){
		alert ('Точка попадает в линию на чертеже,красавчик!');
	}else{
		alert ('Точка не попадает в линию на чертеже.');
	}
}*/

//*****************************  3 **********************

/*{
	let dayOfTheWeek = prompt('Ввелите номер дня недели','');
	switch(dayOfTheWeek){
		case '1':
		alert('Понедельник,топай на работу,а к 19.00 на занятие!');
		break;
		case '2':
		alert('Вторник');
		break;
		case '3':
		alert('Среда');
		break;
		case '4':
		alert('Четверг');
		break;
		case '5':
		alert('Пятница,не пивасик, а на занятие!');
		break;
		case '6':
		alert('Суббота,даже если пил вчера пивас, тебе на работу)');
		break;
		case '7':
		alert('Воскресенье');
		break;
		default:
		alert('Что-то ты перепутал');
	}
}*/

//*****************************  4 **********************

/*{
	const numberOne = prompt('Enter first number,please!','');
	const numberTwo = prompt('Enter second number,please!','');
	if(numberOne>numberTwo){
		console.log (numberOne);
	}else if(numberOne<numberTwo) {
		console.log (numberTwo);
	}else{}
}*/

//*****************************  5 **********************

/*{
	const numberOne = prompt('Enter first number,please!','');
	const numberTwo = prompt('Enter second number,please!','');
	if(numberOne>numberTwo){
		console.log (numberOne);
	}else if(numberOne<numberTwo) {
		console.log (numberTwo);
	}else{
		console.log ('The numbers are equal.');
	}
}
*/

//*****************************  6 **********************

/*{
	let flatNumber = prompt('Введите номер квартиры,и узнаете,в каком подъезде она находится.','');
	if(flatNumber >=1 && flatNumber <=20){
		console.log ('Квартира находится в первом подъезде.');
	}else if(flatNumber >=21 && flatNumber <=48){
		console.log ('Квартира находится во втором подъезде.');
	}else if(flatNumber >=49 && flatNumber <=90){
		console.log ('Квартира находится в третьем подъезде.');
	}else{
		console.log ('Квартиры с таким номером в этом доме нет.');
	}
}*/
