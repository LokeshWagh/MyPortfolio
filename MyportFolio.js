// mouse Follower  curser
const main=document.querySelector("body");
const crsr=document.querySelector(".curser");
main.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px";
    crsr.style.top= dets.y+"px";
});
//  for typing animationa    ****
var typed2 = new Typed('.Skilll', {
    strings: ['React js Developer!', 'Node js Developer!', 'FrontEnd Developer!', 'Technical Blog Writter!', 'MERN Stack Developer!' , 'Web Design Competition winner!'],
    typeSpeed: 100,
    backSpeed: 10,
    loop: true
  });
//  


// circle Rotation   ****
const circles=document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked= elem.getAttribute('data-percent');
    var percent = Math.floor(dots*marked/100);
    var points ="";
    var rotate=360/ dots;


    for(let i=0;i<dots;i++){
        points+= `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML=points;
    const pointsMark= elem.querySelectorAll('.points');
    for(let i=0;i<percent ;i++){
        pointsMark[i].classList.add('marked');
    }
});


// For the active the menu bar ********
const section= document.querySelectorAll('section');
const navlinkes=document.querySelectorAll('ul li a');


window.onscroll=()=>{
    let top= window.scrollY;
    let offset=sec.offsetTop;
    let height=sec.offsetHeight;
    let id= sec.getAttribute('id');
    if(top >= offset && top <offset + height){
        navlinkes.forEach(links =>{
            links.classList.remove('.active');
            document.querySelectorAll('ul li a[href*= ' + id +']').classList.add('.active');
        })
    }
}

function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}


// Scroll Reveal Script
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('[class*="reveal-"]'); // Selects all reveal classes

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remove class when out of view to reset animation
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible (adjust if needed)
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

