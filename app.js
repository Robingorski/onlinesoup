//HAMBURGER-MENU
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
   
    burger.addEventListener('click',()=>{
         //Toggle nav
        nav.classList.toggle('nav-active');
           
        //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
        }
    }); 

    burger.classList.toggle('burgertoggle');

    });
    
}

navSlide();


/* // MENY-CATEGORIES
const items = document.querySelectorAll('li');
const underline = document.querySelector('.underline');

// Set intial size of the bar
underline.style.width = items[0].offsetWidth + 'px';

for (let i = 0; i < items.length; i++) {
	const li = items[i];

	li.addEventListener('click', () => {
		document.querySelector('.active').classList.remove('active');
		li.classList.add('active');

		// Move the bar dynamically
		let sizeToMove = 0;
		for (let j = 0; j < i; j++) {
			sizeToMove += items[j].offsetWidth;
		}
		underline.style.left = sizeToMove + 'px';
		underline.style.width = li.offsetWidth + 'px';
	});
} */

var header = document.getElementById("soup-protein");
var btns = header.getElementsByClassName("soup-protein-li");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}