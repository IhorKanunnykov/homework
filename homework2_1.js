'use strict';

//*****************************  7 **********************

/*{
const login = prompt('Введите логин','');
const password = prompt('Введите пароль','');
if(login==='Ivan' && password==='334455' ||
   login==='Alex' && password==='777' ||
   login==='Petro' && password==='b5678'){
	console.log('Добро пожаловать!');
  }else{
  	console.log('Ошибка входа.');
  }
}*/

//*****************************  7.1 **********************

//тут такое же задание но с проверкой логина
/*{
	const login = prompt('Введите логин','');
	if (login==='Ivan'||login==='Alex'||login==='Petro'){
		const password = prompt('Введите пароль','');
		if(login==='Ivan' && password==='334455'||
		   login==='Alex' && password==='777'||
		   login==='Petro' && password==='b5678'){
			console.log('Добро пожаловать!');
		}else{
		console.log('Ошибка входа.');
		}
	}else{
		console.log('Такой логин не зарегистрирован!');
	}
}*/

//*****************************  8 **********************

/*{
	const yearToday = 2019;
	const yearOfBirth = prompt('Ваш год рождения','');
	const ageAllowed =  yearToday-yearOfBirth;
	//console.log (ageAllowed);
	if(ageAllowed>=16){
		alert('Заходи!');
	}else{
		alert('вход воспрещен');
	}

}*/

//*****************************  9 **********************

/*{
	let experience = prompt('введите Ваш стаж','');
	if(experience >=0 && experience <3){
		alert ('0%');
	}else if(experience >=3 && experience <10){
		alert ('10%');
	}else if(experience >=10 && experience <20){
		alert ('20%');
	}else if(experience >=20){
		alert ('25%, смотри не помри на этом заводе!');
	}else{}
}
*/
//***************************** 10  **********************

/*{
	let shoppingCart = prompt('Введи количество','')
	shoppingCart=parseFloat(shoppingCart);
	if(shoppingCart ===0|| shoppingCart >=5 ){
		console.log (shoppingCart + ' товаров');
	}else if(shoppingCart === 1){
		console.log (shoppingCart + ' товар');
	}else if(shoppingCart >=2 && shoppingCart <=4){
		console.log (shoppingCart + ' товара');
	}else{};
}*/	

//***************************** 11 кофейный автомат **********************

/*{

	let yourChange;
	let espresso = 10;
	let americano = 11;
	let latte = 18;
	let cappuccino = 17;




	let money = prompt('внесите деньги,затем выберайте кофе:эспрессо(10грн),Американо(11грн),латте(18грн),капучино(17грн)','')
	if(money>=10){
		let coffee = prompt('Выборайте : 1-эспрессо, 2-Американо, 3-латте, 4-капучино','');
			switch(coffee){
				case '1':
					{console.log('возьмите эспрессо');
					yourChange = money - espresso;
					console.log('Ваша сдача ' +yourChange+ ' грн'); }
					break;
				case '2':if(money>=11){
					console.log('возьмите Американо');
					yourChange = money - americano;
					console.log('Ваша сдача ' +yourChange+ ' грн');
					}else{
					console.log('недостаточно денег');
					} 
					break;

				case '3':if(money>=18){
					console.log('возьмите латте');
					yourChange = money - latte;
					console.log('Ваша сдача ' +yourChange+ ' грн');
					}else{
					console.log('недостаточно денег');	
					}	
					break;
				case '4':if(money>=17){
					console.log('возьмите капучино');
					yourChange = money - cappuccino;
					console.log('Ваша сдача ' +yourChange+ ' грн');
					}else{
						console.log('недостаточно денег');	
					}
					break;
						
			}


	}else{
		console.log('вы ввели недостаточно денег')
	}

}*/