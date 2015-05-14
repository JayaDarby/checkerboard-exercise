// Your JS goes here
for(var i = 0; i <81; i++){
	var myDiv = document.createElement("div");
	myDiv.style.width = "11.1%";
	myDiv.style.float = "left";
	myDiv.style.paddingBottom = '11.1%';
	if(i%2===0)
	  myDiv.style.backgroundColor='red';
	else
	  myDiv.style.backgroundColor='black';

	document.body.appendChild(myDiv);
}


for(var j = 0; j <81; j++){
	var myDiv = document.createElement("div");
	myDiv.style.width = "11.1%";
	myDiv.style.float = "left";
	myDiv.style.paddingBottom = '11.1%';
	var hexColor = '#'+Math.floor(Math.random()*16777215).toString(16);
	myDiv.style.backgroundColor= hexColor;
	
	document.body.appendChild(myDiv);
}

var color1 = 111111;
var color2 = 999999;
for(var k = 0; k <81; k++){
	var myDiv = document.createElement("div");
	myDiv.style.width = "11.1%";
	myDiv.style.float = "left";
	myDiv.style.paddingBottom = '11.1%';
	if(k%2===0){
	  myDiv.style.backgroundColor = '#'+color1;
	  color1+= 2;
	}
	else {
	  myDiv.style.backgroundColor= '#'+color2;
	  color2-=2;
	}
	
	document.body.appendChild(myDiv);
}