(function(){
	'use strict';
	//*****************************1 
	/*{
		function numberOutput(n){
			if(n===1){
				return 1;
			}return n + ' ' + numberOutput(n-1);
		}
		console.log(numberOutput(6));

	}
*/
	//*****************************2

/*	{
		function numberOutputAB(a,b){
			if(a>b){
				if(a===b){
					return a;
				} return a + ' ' + numberOutputAB(a-1, b);
			}else{
				if(a===b){
					return a;
				} return a + ' ' + numberOutputAB(a+1, b);

			}
		}console.log(numberOutputAB(1,6));


	}*/

	//*****************************3

/*	{
		function sumOfNub(a){
			if(a<10){
				return a;
			}
				return a % 10 + sumOfNub((a-a%10)/10);
			
		}console.log(sumOfNub(2183));
	}*/

	//*****************************4

	/*{
		function numbers(a){
			if(a<10){
				return a;
			}
			return a % 10 + ' ' + numbers((a-a%10)/10);
		}console.log(numbers(2183));


	}*/
})();
