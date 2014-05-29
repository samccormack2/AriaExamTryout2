
//skel

window._skel_config = {
			prefix: 'css/style',
			preloadStyleSheets: true,
			resetCSS: true,
			boxModel: 'border',
			grid: { gutters: 30 },
			breakpoints: {
				wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
				narrow: { range: '481-1199', containers: 960 },
				mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
			}
		}
		
// calculator
		
$(document).ready(function() {
	
	//addition
    
	$("#add").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();


        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
		
		else if (firstnumber > 100000000000){
		     alert("First number is out of range");
			 }
		else if (secondnumber > 100000000000){
		     alert("Second number is out of range");
			 }	 
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.AddTwoNumbers(firstnumber,secondnumber));
        }
    });
    
    //subtraction
	
	$("#minus").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();


        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
		
		else if (firstnumber > 100000000000){
		     alert("First number is out of range");
			 }
		else if (secondnumber > 100000000000){
		     alert("Second number is out of range");
			 }	 
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.MinusTwoNumbers(firstnumber,secondnumber));
        }
    });
	
	//multiplication
	
	$("#mul").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();


        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
		
		else if (firstnumber > 100000000000){
		     alert("First number is out of range");
			 }
		else if (secondnumber > 100000000000){
		     alert("Second number is out of range");
			 }	 
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.MulTwoNumbers(firstnumber,secondnumber));
        }
    });
    
    //division
	
	$("#divide").click(function() {
        var firstnumber = $("#firstnumber").val();
        var secondnumber = $("#secondnumber").val();

        if ((firstnumber.length == 0) || (secondnumber.length == 0)) {
            alert("Please input TWO numbers to calculate");
        }
		
		else if (firstnumber > 100000000000){
		     alert("First number is out of range");
			 }
		else if (secondnumber > 100000000000){
		     alert("Second number is out of range");
			 }	 
		
        else if (secondnumber ==0){
		     alert("Nothing can be divide by 0");
		}
       
        else {
            $("#result").html("<h1>The result is </h1>" + Calculator.DivideTwoNumbers(firstnumber,secondnumber));
        }
    });
    
    //clear
	
	$("#clearinput").click(function() {
        $("#firstnumber").val('');
        $("#secondnumber").val('');
		$("#result").text('Result will display here !');		
    });
	
});		