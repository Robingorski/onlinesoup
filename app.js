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


// MENY-CATEGORIES

var header = document.getElementById("soup-protein");
var btns = header.getElementsByClassName("soup-protein-li");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


let circleButtons = document.querySelectorAll('.circle');
if (circleButtons.length > 0) {
    circleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
        
        let div = e.target.closest('div');
        
        div.classList.add('checked')
        div.firstElementChild.classList.remove('hidden');
        div.classList.remove('circle')
        setTimeout(function () {
            toggleBack(div)},2500);
        })
    })
}

function toggleBack (div) {
    div.classList.remove('checked')
    div.firstElementChild.classList.add('hidden');
    div.classList.add('circle')
}


var pilen = document.getElementById('arrow_down');
let rotated = false;
pilen.style.cursor = 'pointer';


pilen.onclick = function() {
  var moreIngrediets = document.getElementById("active-soup-info_container");
  if (moreIngrediets.style.display === "none") {
    moreIngrediets.style.display = "block";
  } else {
    moreIngrediets.style.display = "none";
  }
  let div = document.getElementById('arrow_down'),
        deg = rotated ? -45 : 135;

    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
    div.style.msTransform     = 'rotate('+deg+'deg)'; 
    div.style.oTransform      = 'rotate('+deg+'deg)'; 
    div.style.transform       = 'rotate('+deg+'deg)'; 
    
    rotated = !rotated;
}