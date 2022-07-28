	
	     /*primeiro exemplo*/
		  
/* 		 <!-- let result = ''; -->
		 <!-- const arr = [1, 2, 3, 4]; -->
		 
			 <!-- function mostrar() { -->
				<!-- arr.forEach(teste); -->

				<!-- function teste(item, index) { -->
				<!-- result += index + ": " + item + " | "; -->
				<!-- } -->

				<!-- console.log(result); -->
				<!-- console.table(arr); -->
			 <!-- } -->
	
	     
		 
		 	 <!-- function salvar() { -->
			 <!-- let value = document.querySelectorAll('input')[0].value; -->
			 
			 <!-- arr.push(value); -->
			 
			 <!-- mostrar(); -->
			 			 
		 <!-- } --> */
		 
		 /*segundo exemplo usando arrow function*/
		  
		  	 let result = '';
		     const arr = [1, 2, 3];
		  
		  function mostrar() {		  
		     arr.forEach((item, index) => {
		     result += index + ": " + item + " | ";
			 
			 console.log(result);
			 console.table(arr);
			 alert(result)
		    })
		  }
		  
		  	function salvar() {
			 let value = document.querySelectorAll('input')[0].value;
			 
			 arr.push(value);
			 
			 mostrar();
			 			 
		    }
		
		 /*//////////////////////////////////////////////////////////////////////////////*/
		 
		 
		 //eventhough deprecated, still able to use

		
		 
		 