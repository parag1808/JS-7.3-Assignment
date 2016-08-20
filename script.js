window.onload = function(){
	var myNum = document.getElementById("myNum");
	var myNumValue = myNum.value;
	var errorTxt = document.getElementById("errorT");

	var pattern = /[^0-9]/g;


	myNum.onpaste = function(e){
		errorTxt.innerHTML = "You can't Paste Here. Please Type in.";
		return false;
	}
	myNum.ondrop = function(e){
		return false;
	}

	myNum.onkeypress = function(e){

		var specialKey = new Array();

		specialKey.push(8);

		var keycode = e.which ? e.which : e.keyCode;


		if((keycode >= 48 && keycode <= 57) || specialKey.indexOf(keycode) != -1){
			errorTxt.innerHTML = "";
			myNum.style.background = "";
		}else{
			myNum.style.background = "red";
			errorTxt.innerHTML = "Please Enter Numbers Only";
			return false;
		}
	}






}
