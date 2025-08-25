const para = document.getElementById("changingPara");

const messages = [
  "'Electrical & Electronics Engineer'",
  "'NSS Cadet'",
  "'Video Editor'",
  "'Film Maker'",
  "'Designer'",
  "'Artist'"
  
];

let index = 0;

setInterval(() => {
  index = (index + 1) % messages.length;
  para.style.opacity = 0;

  setTimeout(() => {
    para.textContent = messages[index];
    para.style.opacity = 1;
  }, 500);
}, 3000); 

function scrollToSection() {
  
  const targetElement = document.getElementById('section');

  
  targetElement.scrollIntoView({
    behavior: 'smooth', 
    block: 'start'      
  });
}
function scrollToSection2() {
  
  const targetElement = document.getElementById('section2');

  
  targetElement.scrollIntoView({
    behavior: 'smooth', 
    block: 'start'     
  });
}
function  scrollup() {
  
  const targetElement = document.getElementById('up');

  
  targetElement.scrollIntoView({
    behavior: 'smooth', 
    block: 'start'      
  });
}