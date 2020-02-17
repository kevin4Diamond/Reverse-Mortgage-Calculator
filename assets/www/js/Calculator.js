
			function calculate(){
				//Getting inputs
				var age = parseFloat(document.getElementById('age').value, 10);
			if(age < 62 ||isNaN(age) )
				alert("You must be at least a 62 year old");
				else
				age == age;
	
		     var existing = parseFloat(document.getElementById('existing').value, 10);
		    	if(isNaN(existing))
					alert("please enter the amount you owe");
		    	else
		   			existing == existing;

		     var value = parseFloat(document.getElementById('value').value, 10);
		     	if(isNaN(value))
					alert("please enter your property value");
			 	else
			 		value == value;
			
				if (value > 625000)
				value = 625000 + 500;
	
		     var cost = parseFloat(document.getElementById('cost').value, 10) ;
		   if(isNaN(cost))
				alert("Is this the cost?");
				else
				cost == cost;

				//Calculating Principle Limit based on HUD factor
			function PL(){
				
				 if (age ==62) {
				  var PL = value * 0.526;
                 }
			     else if (age==63) {
			      PL = value * 0.531;
			     }
			     else if (age==64) {
			      PL = value * 0.535;
			     }
			     else if (age==65) {
			      PL = value * 0.541;
			     }
			     else if (age==66) {
			      PL = value * 0.546;
			     }
			     else if (age==67) {
			      PL = value * 0.551;
			     }
			     else if (age==68) {
			      PL = value * 0.554;
			     }
			     else if (age==69) {
			      PL = value * 0.560;
			     }
			     else if (age==70) {
			      PL = value * 0.564;
			     }
			     else if (age==71) {
			      PL = value * 0.570;
			     }
			     else if (age==72) {
			      PL = value * 0.575;
			     }
			     else if (age==73) {
			      PL = value * 0.579;
			     }
			     else if (age==74) {
			      PL = value * 0.586;
			     }
			     else if (age==75) {
			      PL = value * 0.589;
			     }
			     else if (age==76) {
			      PL = value * 0.593;
			     }
			     else if (age==77) {
			      PL = value * 0.597;
			     }
			     else if (age==78) {
			      PL = value * 0.600;
			     }
			     else if (age==79) {
			      PL = value * 0.607;
			     }
			     else if (age==80) {
			      PL = value * 0.610;
			     }
			     else if (age==81) {
			      PL = value * 0.615;
			     }
			     else if (age==82) {
			      PL = value * 0.621;
			     }
			     else if (age==83) {
			      PL = value * 0.625;
			     }
			     else if (age==84) {
			      PL = value * 0.630;
			     }
			     else if (age==85) {
			      PL = value * 0.635;
			     }
			     else if (age==86) {
			      PL = value * 0.641;
			     }
			     else if (age==87) {
			      PL = value * 0.646;
			     }
			     else if (age==88) {
			      PL = value * 0.650;
			     }
			     else if (age==89) {
			      PL = value * 0.654;
			     }
			     else if (age>=90) {
			      PL = value * 0.660;
			     }
			     return(PL);
			     };//end of PL

			     	//calculating sixty percent of principle limit		      
				    var six = function(){
				    return (PL() * .60);
				    };
				    //calculating FHA mortgage Insurance 
			        function MIP(){
			    	 if((existing + cost) > six())
			         var MIP = (value * .025);
			         else
			         MIP = (value * .005);
			         if (MIP > 15000)
			          MIP = 15000;
			          return (MIP);
			         };
			         
			        //total obligation
			    	var obli = function(){
			    	return (cost + MIP() + existing);
			    	};
			    	
			        //finding the total qualifying
			    	 function result(){
			    	 var result = (PL() - obli());
			    	return (result);
			    	};
			      
			      	//First year availability
				    var fy = function(){
				    return(result() * .60);
				    };
				    //The rest of fund that is available in the second year in form of LOC
				    var loc = function(){
				    return(result() - fy());
				    };
                 //Output in the table
			     max.innerHTML = ("$" + value.toFixed(2)); 
			     ob.innerHTML = ("$" + obli().toFixed(2)); 
				 PPlace.innerHTML = ("$" + PL().toFixed(2));	
			     mipPlace.innerHTML = ("$" + MIP().toFixed(2));
			     place.innerHTML = ("$" + result().toFixed(2));
			     foo.innerHTML = ("$" + fy().toFixed(2));
			     bar.innerHTML = ("$" + loc().toFixed(2));
					
			    };//end of Function
