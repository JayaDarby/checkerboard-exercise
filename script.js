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


for(var i = 0; i <81; i++){
	var myDiv = document.createElement("div");
	myDiv.style.width = "11.1%";
	myDiv.style.float = "left";
	myDiv.style.paddingBottom = '11.1%';
	myDiv.style.backgroundColor='"#" + Math.random().toString(16).slice(2, 8)';
	
	document.body.appendChild(myDiv);
}
