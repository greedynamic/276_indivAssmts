function means() {
	var divisors = new Array(); //获取除数
	divisors = document.getElementsByClassName('divisor');

	var dividends = new Array(); //获取被除数
	dividends = document.getElementsByClassName('dividend');

	var sum = 0;
	var len = 0;
	for(var i = 0; i < divisors.length; i++) {
		if(divisors[i].value == null || divisors[i].value == 0) continue;
		sum = sum + divisors[i].value / dividends[i].value;
		len++;
	}
	
	var eq = sum/len;
	var isEq = eq*10;
	
	if(isEq>=4.33){
		document.getElementById("p_4_Grade").innerHTML = "A+";
	}else if(isEq>=4.00){
		document.getElementById("p_4_Grade").innerHTML = "A";
	}else if(isEq>=3.67){
		document.getElementById("p_4_Grade").innerHTML = "A-";
	}else if(isEq>=3.33){
		document.getElementById("p_4_Grade").innerHTML = "B+";
	}else if(isEq>=3.00){
		document.getElementById("p_4_Grade").innerHTML = "B";
	}else if(isEq>=2.67){
		document.getElementById("p_4_Grade").innerHTML = "B-";
	}else if(isEq>=2.33){
		document.getElementById("p_4_Grade").innerHTML = "C+";
	}else if(isEq>=2.00){
		document.getElementById("p_4_Grade").innerHTML = "C";
	}else if(isEq>=1.67){
		document.getElementById("p_4_Grade").innerHTML = "C-";
	}else if(isEq>=1.00){
		document.getElementById("p_4_Grade").innerHTML = "D";
	}else{
		document.getElementById("p_4_Grade").innerHTML = "F";
	}
	
	
	if(isEq>=3.67){
		document.getElementById("p_4_Definition").innerHTML = "Excellent Performance";
	}else if(isEq>=2.67){
		document.getElementById("p_4_Definition").innerHTML = "Good Performance";
	}else if(isEq>=2.00){
		document.getElementById("p_4_Definition").innerHTML = "Satisfactory Performance";
	}else if(isEq>=1.00){
		document.getElementById("p_4_Definition").innerHTML = "Marginal Performance";
	}else{
		document.getElementById("p_4_Definition").innerHTML = "Fail. Unsatisfactory Performance";
	}
	

	console.info(sum / len);

	document.getElementById("p_3_Result").innerHTML = (eq);
}

function weighted() {
	var divisors = new Array(); //获取除数
	divisors = document.getElementsByClassName('divisor');

	var dividends = new Array(); //获取被除数
	dividends = document.getElementsByClassName('dividend');

	var weights = new Array(); //获取weight 
	weights = document.getElementsByClassName('weight');

	var sum = 0;
	var weights_sum = 0;
	for(var i = 0; i < divisors.length; i++) {
		if(divisors[i].value == null || divisors[i].value == 0) continue;
		sum = sum + (divisors[i].value / dividends[i].value) * weights[i].value;
		weights_sum = weights_sum + weights[i].value * 1.0;
	}

	console.info(sum / weights_sum);

	document.getElementById("p_3_Result").innerHTML = (sum / weights_sum);
}

function SetDividend(obj) {
	var dividend = obj.value;
	var divisor = obj.previousElementSibling.value;
	obj.parentNode.nextElementSibling.innerHTML = (divisor / dividend) * 100 + '%';
}