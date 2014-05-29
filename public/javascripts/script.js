var Calculator = (function () {

    return {
		
		//addition
		
		AddTwoNumbers: function (a, b) {
		    
		      var x = parseInt(a);
			  var y = parseInt(b);
			  
			  if (isNaN(x) == true){
			    throw new Error ("Not a number");
			  }
	          if (isNaN(y) == true){
			    throw new Error ("Not a number");
			  }
			  
			  if (x > 100000000000){
			    throw new Error ("First number is out of range");
			  }
			  if (y > 100000000000){
			    throw new Error ("Second number is out of range");
			  }
			  var z = x + y;
			  return z;
		},
		
		//subtraction
		
		MinusTwoNumbers: function (a, b) {
		    
		      var x = parseInt(a);
			  var y = parseInt(b);
			  
			  if (isNaN(x) == true){
			    throw new Error ("Not a number");
			  }
	          if (isNaN(y) == true){
			    throw new Error ("Not a number");
			  }
			  
			  if (x > 100000000000){
			    throw new Error ("First number is out of range");
			  }
			  if (y > 100000000000){
			    throw new Error ("Second number is out of range");
			  }
			  
			  var z = x - y;
			  return z;
		},
		
		//multiplication
		
		MulTwoNumbers: function (a, b) {
		    
		      var x = parseInt(a);
			  var y = parseInt(b);
			  
			  if (isNaN(x) == true){
			    throw new Error ("Not a number");
			  }
	          if (isNaN(y) == true){
			    throw new Error ("Not a number");
			  }
			  if (x > 100000000000){
			    throw new Error ("First number is out of range");
			  }
			  if (y > 100000000000){
			    throw new Error ("Second number is out of range");
			  }
			  
			  var z = x * y;
			  return z;
		},
		
		//division
		
		DivideTwoNumbers: function (a, b) {
		    
		      var x = parseInt(a);
			  var y = parseInt(b);
			  
			  if (isNaN(x) == true){
			    throw new Error ("Not a number");
			  }
	          if (isNaN(y) == true){
			    throw new Error ("Not a number");
			  }
			  if (y == 0){
			    throw new Error ("Can't be divided by 0");
			  }
			  if (x > 100000000000){
			    throw new Error ("First number is out of range");
			  }
			  if (y > 100000000000){
			    throw new Error ("Second number is out of range");
			  }
			  var z = x / y;
			  return z;
		}

    }

})();