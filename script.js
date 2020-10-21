var enter=false;

var btn=document.getElementById("count");
var inp=document.getElementById("enter");
var curr=document.querySelector(".curr");
var next=document.querySelector(".next");
var next1=document.querySelector(".next1");
var curr1=document.querySelector(".curr1");
var next2=document.querySelector(".next2");

var curr2=document.querySelector(".curr2");
var curr3=document.querySelector(".curr3");
var next3=document.querySelector(".next3");
var curr4=document.querySelector(".curr4");
var next4=document.querySelector(".next4");
var id;

function animate5(c5,c4,c3,c2,c1){
next4.classList.add("trans");
next4.innerText=c5;

	next3.classList.add("trans");
next3.innerText=c4;

	next1.classList.add("trans");
	next1.innerText=c2;
	next.classList.add("trans");
	next.innerText=c1;
next2.classList.add("trans");
next2.innerText=c3;

	
	setTimeout(function(){
		curr1.innerText=c2;

curr.innerText=c1
curr2.innerText=c3;
curr3.innerText=c4;
curr4.innerText=c5;
next4.classList.remove("trans");

next3.classList.remove("trans");

next2.classList.remove("trans");

		next1.classList.remove("trans");
next.classList.remove("trans");


	},500);

};

function animate4(c4,c3,c2,c1){
next3.classList.add("trans");
next3.innerText=c4;

	next1.classList.add("trans");
	next1.innerText=c2;
	next.classList.add("trans");
	next.innerText=c1;
next2.classList.add("trans");
next2.innerText=c3;

	
	setTimeout(function(){
		curr1.innerText=c2;

curr.innerText=c1
curr2.innerText=c3;
curr3.innerText=c4;
next3.classList.remove("trans");

next2.classList.remove("trans");

		next1.classList.remove("trans");
next.classList.remove("trans");


	},500);
};



function animate3(c3,c2,c1){
next2.classList.add("trans");
next2.innerText=c3;

	next1.classList.add("trans");
	next1.innerText=c2;
	next.classList.add("trans");
	next.innerText=c1;
// next2.classList.add("trans");
// next2.innerText=c3;

	
	setTimeout(function(){
// curr.innerText=c1
curr2.innerText=c3;
		
		curr1.innerText=c2;

curr.innerText=c1;
// curr2.innerText=c3;
next2.classList.remove("trans");

		next1.classList.remove("trans");
next.classList.remove("trans");

	},500);
};




function animate2(c2,c1){
	next1.classList.add("trans");
	next1.innerText=c2;
	next.classList.add("trans");
	next.innerText=c1;

	
	setTimeout(function(){
		curr1.innerText=c2;

curr.innerText=c1
		next1.classList.remove("trans");
next.classList.remove("trans");

	},500);
};
function animate(c){
	next.classList.add("trans");
	next.innerText=c;
	
	setTimeout(function(){
		curr.innerText=c;
		next.classList.remove("trans");

	},500);
};

function counter(){
let t=inp.value;
let x=1;

let c1=1;

let c2=1;
let c3=1;
let c4=1;
let c5=1;

id=setInterval(function(){

		if(x<=t){
			if(c1<=9){
			animate(c1);
			c1++;}

			else if(c1>9&&c2<=9)
			{c1=0;

				animate2(c2,c1);
				
				

				c1++;

				c2++;



			}

			else if(c2>9&&c3<=9)
			{c1=0;
				c2=0;

				animate3(c3,c2,c1);

c3++;
c2++;


c1++;


			}
			else if(c3>9&&c4<=9)
			{
				c1=0;
				c2=0;
				c3=0;
				animate4(c4,c3,c2,c1);

			c1++;
			c2++;
			c3++;
			c4++;

			}
			else if(c4>9&&c5<=9)
			{
c1=0;
				c2=0;
				c3=0;
c4=0;
				animate5(c5,c4,c3,c2,c1);

			c1++;
			c2++;
			c3++;
			c4++;
			c5++;




			}



x++;
		}
		else
		{
enter =false;
			clearInterval(id);
			alert("counter stopped")
			curr.innerText=0;
			curr1.innerText=0;

			curr2.innerText=0;
			curr3.innerText=0;
curr4.innerText=0;

			return;
		}
	},1000);

};




btn.addEventListener("click",function(){
	// if(!enter){	

		// enter=true;
clearInterval(id);

		curr.innerText=0;
			curr1.innerText=0;

			curr2.innerText=0;
			curr3.innerText=0;
curr4.innerText=0;
	
		counter();
// }

});