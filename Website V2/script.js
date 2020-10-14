window.addEventListener("scroll", (event) => {
    let scrolly = this.scrollY;
	var scrollx = this.scrollX;
    console.log(scrollx,scrolly);
	if(scrolly>100){
		document.getElementById("head-container").style.color="black";
		document.getElementById("onScrollHeading").style.color="white";
	}
	if(scrolly<100){
		document.getElementById("head-container").style.color="white";
		document.getElementById("onScrollHeading").style.color="black";
	}
});

//jobs by state 
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}	
//jobs by state-->
// Jobs by qualification-->
function openNav2() {
  document.getElementById("myNav2").style.width = "100%";
}

function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}	
// Job by qualification-->
// Jobs by post -->
function openNav3(){
document.getElementById("myNav3").style.width = "100%";
}
function closeNav3() {
  document.getElementById("myNav3").style.width = "0%";
}	
// Jobs by post-->
//top gov companies -->
function openNav4(){
document.getElementById("myNav4").style.width = "100%";
}
function closeNav4() {
  document.getElementById("myNav4").style.width = "0%";
}	
