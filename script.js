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
