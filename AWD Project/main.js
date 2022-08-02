const selectElement = function (element){
	return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
menuToggler.addEventListener('click', function (){
	body.classList.toggle('open');
});


 VanillaTilt.init(document.querySelectorAll(".box"), {
		max: 25,
		speed: 400
});

 // scroll reveal animations

 window.sr = ScrollReveal();
 sr.reveal('.animate-top', {
 	origin:'top',
 	duration:1000,
 	distance:'15rem',
 	delay: 200
 });

 sr.reveal('.animate-bottom', {
 	origin:'bottom',
 	duration:1000,
 	distance: '15rem',
 	delay: 200
 });

 sr.reveal('.animate-left',{
 	origin: 'left',
 	duration:1000,
 	distance: '15rem',
 	delay: 200
 });


 var textWrapper = document.querySelector('.headline');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.headline .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });