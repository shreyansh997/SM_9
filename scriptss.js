function loadData(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status==200){
			var jsonObj = JSON.parse(this.responseText);
			responseHandler(jsonObj);
		}
	};
	function responseHandler(jsonObj){
		var i = 0;
		var number = document.getElementById('numberBox').value;
		var output = document.getElementById('output');
		var flag = 0;
		// console.log(number);
		for (var i = 0; i < jsonObj.length; i++) {
			if (number == jsonObj[i].number) {
				output.innerHTML = jsonObj[i].name;
				flag = 1;
				break;
			}
		}
		if (flag == 0) {
			output.innerHTML = "<span style='color:red;'>Number could not be found</span>";
		}
	}
	xhttp.open("GET","data/data.json",true);
	xhttp.send();	
}
