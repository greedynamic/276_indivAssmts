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
	
	var eq = sum/len *100; 
	
	if(eq>=92){
		document.getElementById("p_4_Grade").innerHTML = "A+";
	}else if(eq>=87){
		document.getElementById("p_4_Grade").innerHTML = "A";
	}else if(eq>=82){
		document.getElementById("p_4_Grade").innerHTML = "A-";
	}else if(eq>=78){
		document.getElementById("p_4_Grade").innerHTML = "B+";
	}else if(eq>=74){
		document.getElementById("p_4_Grade").innerHTML = "B";
	}else if(eq>=70){
		document.getElementById("p_4_Grade").innerHTML = "B-";
	}else if(eq>=65){
		document.getElementById("p_4_Grade").innerHTML = "C+";
	}else if(eq>=60){
		document.getElementById("p_4_Grade").innerHTML = "C";
	}else if(eq>=55){
		document.getElementById("p_4_Grade").innerHTML = "C-";
	}else if(eq>=50){
		document.getElementById("p_4_Grade").innerHTML = "D";
	}else{
		document.getElementById("p_4_Grade").innerHTML = "F";
	}
	
	console.info(eq +"%");

	document.getElementById("p_3_Result").innerHTML = (eq +"%");
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
	
	var eq = sum/weights_sum *100; 
	
	if(eq>=92){
		document.getElementById("p_4_Grade").innerHTML = "A+";
	}else if(eq>=87){
		document.getElementById("p_4_Grade").innerHTML = "A";
	}else if(eq>=82){
		document.getElementById("p_4_Grade").innerHTML = "A-";
	}else if(eq>=78){
		document.getElementById("p_4_Grade").innerHTML = "B+";
	}else if(eq>=74){
		document.getElementById("p_4_Grade").innerHTML = "B";
	}else if(eq>=70){
		document.getElementById("p_4_Grade").innerHTML = "B-";
	}else if(eq>=65){
		document.getElementById("p_4_Grade").innerHTML = "C+";
	}else if(eq>=60){
		document.getElementById("p_4_Grade").innerHTML = "C";
	}else if(eq>=55){
		document.getElementById("p_4_Grade").innerHTML = "C-";
	}else if(eq>=50){
		document.getElementById("p_4_Grade").innerHTML = "D";
	}else{
		document.getElementById("p_4_Grade").innerHTML = "F";
	}

	console.info(eq + "%");

	document.getElementById("p_3_Result").innerHTML = (eq +"%");
}

function SetDividend(obj) {
	var dividend = obj.value;
	var divisor = obj.previousElementSibling.value;
	obj.parentNode.nextElementSibling.innerHTML = (divisor / dividend) * 100 + '%';
}