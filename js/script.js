(function(){
	'use strict';

	let moneyInside;
	moneyInside=parseFloat(moneyInside) ;



	let clickMoneyInside = document.getElementById('moneyInside');
	let espresso = document.getElementById('Espresso');
	let americano = document.getElementById('Americano');
	let latte = document.getElementById('Latte');
	let cappuccino = document.getElementById('Capuccino');
	let doppio = document.getElementById('Doppio');
	let takeCoffe = document.getElementById('takeCoffe');
	let changeOut = document.getElementById('changeOut');
	let change = 0;

	let cappuccinoCost =16;
	let espressoCost = 10;
	let latteCost = 17;
	let americanoCost = 11;
	let doppioCost = 17;




	clickMoneyInside.addEventListener('click',()=>{
		moneyInside = prompt('вносимая сумма','');
		if (moneyInside >=10){
			espresso.addEventListener('click',()=>{
				takeCoffe.setAttribute('style','display:block;');
				changeOut.setAttribute('style','display:block;');
				change = moneyInside-espressoCost;
				changeOut.textContent=change;
			})

			americano.addEventListener('click',()=>{
					if(moneyInside >= americanoCost){
					takeCoffe.setAttribute('style','display:block;');
					changeOut.setAttribute('style','display:block;');
					change = moneyInside-americanoCost;
					changeOut.textContent=change;
				}else{
					alert('недостаточно денег');
				}
			})

			latte.addEventListener('click',()=>{
					if(moneyInside >= latteCost){
					takeCoffe.setAttribute('style','display:block;');
					changeOut.setAttribute('style','display:block;');
					change = moneyInside-latteCost;
					changeOut.textContent=change;
				}else{
					alert('недостаточно денег');
				}
			})

			cappuccino.addEventListener('click',()=>{
					if(moneyInside >= cappuccinoCost){
					takeCoffe.setAttribute('style','display:block;');
					changeOut.setAttribute('style','display:block;');
					change = moneyInside-cappuccinoCost;
					changeOut.textContent=change;
				}else{
					alert('недостаточно денег');
				}
			})

			doppio.addEventListener('click',()=>{
					if(moneyInside >= doppioCost){
					takeCoffe.setAttribute('style','display:block;');
					changeOut.setAttribute('style','display:block;');
					change = moneyInside-doppioCost;
					changeOut.textContent=change;
				}else{
					alert('недостаточно денег');
				}
			})


			takeCoffe.addEventListener('click',()=>{
				takeCoffe.setAttribute('style','display:none;');
			})
			changeOut.addEventListener('click',()=>{
				changeOut.setAttribute('style','display:none;');
			})	



		}else{
			alert('недостаточно денег');
		}
	})
	
	


})();