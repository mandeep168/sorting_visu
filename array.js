
var arr = [];
while(arr.length < 100){
    var r = Math.floor(Math.random() * 400) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
 }

var i=0;
var para ;

while(i<100){
		para = document.createElement("DIV");                 // Insert text
		para.classList.add("bar");
		para.style.width = "5px";
		para.style.height = arr[i] + "px";
		
		document.getElementsByClassName("bars")[0].appendChild(para);
		//console.log(i);

		i++;
}


document.getElementsByClassName("array")[0].addEventListener("click", build_bars);


function build_bars(){
	var myobj = document.getElementsByClassName("bars")[0];
    myobj.remove();
	var para1 = document.createElement("DIV");
	para1.classList.add("bars");
	document.body.appendChild(para1);

	var k=0;
while(k < 100){
    var r = Math.floor(Math.random() * 400) + 1;
    arr[k] = r;
    k++;
}

	var i=0;
	var para ;
	while(i<100){
		para = document.createElement("DIV");                 // Insert text
		para.classList.add("bar");
		para.style.width = "5px";
		para.style.height = arr[i] + "px";
		
		document.getElementsByClassName("bars")[0].appendChild(para);
		//console.log(i);

		i++;
	}
}



async function swap(el1,el2)
    {
 	await new Promise(resolve => setTimeout(() => {resolve('10000'), '1000000s'}));
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
 
 
      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");
 
      el1.style.height = transform2;
      el2.style.height = transform1;
 
    }

document.getElementsByClassName("bubble")[0].addEventListener("click", bubble_sort);

function bubble_sort(){

	for(var i=0;i<99;i++){
		for(var j=0;j<99-i;j++){
	
			document.getElementsByClassName("bar")[j].style.background="red";
	  		document.getElementsByClassName("bar")[j+1].style.background="red";
	  		if(arr[j] > arr[j+1]){
	  			//console.log(arr[j],arr[j+1],"\n");
	  		// if(document.getElementsByClassName("bar")[j].style.height > document.getElementsByClassName("bar")[j+1].style.height) {
	  		// 	console.log(document.getElementsByClassName("bar")[j].style.height , document.getElementsByClassName("bar")[j+1].style.height,"\n");
	  			swap(document.getElementsByClassName("bar")[j], document.getElementsByClassName("bar")[j+1]);
	  			var temp = arr[j];
	  			arr[j] = arr[j+1];
	  			arr[j+1] = temp;
	  		}

	  		document.getElementsByClassName("bar")[j].style.background="yellow";
	  		document.getElementsByClassName("bar")[j+1].style.background="yellow";
	  		
	  					
		}

		document.getElementsByClassName("bar")[99-i].style.background="#3dea3d";
	  	


	} 
	document.getElementsByClassName("bar")[0].style.background="#3dea3d";
}

  		