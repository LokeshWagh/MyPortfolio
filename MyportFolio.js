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


// Active nav link on scroll (fixed)
(() => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('ul li a');

  window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 100;
    sections.forEach((sec) => {
      const id = sec.id;
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const link = document.querySelector(`ul li a[href="#${id}"]`);
      if (!link) return;
      if (fromTop >= top && fromTop < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
})();


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


document.addEventListener('DOMContentLoaded', () => {
  emailjs.init({
    publicKey: 'kAxWXdWSvXfvUql92',
    limitRate: { id: 'portfolio', throttle: 1200 }
  });
});

(() => {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');
  const submitBtn = form ? form.querySelector('button[type="submit"], .contact-btn') : null;
  if (!form) return;

  const SERVICE_ID = 'service_dj7u3aw';
  const TEMPLATE_ID = 'template_uaelrxd';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    statusEl.textContent = 'Sending...';
    if (submitBtn) submitBtn.disabled = true;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '#contactForm')
      .then(() => { statusEl.textContent = 'Thanks! Message sent successfully.'; form.reset(); })
      .catch((err) => { console.error('EmailJS error:', err); statusEl.textContent = 'Failed to send. Please try again.'; })
      .finally(() => { if (submitBtn) submitBtn.disabled = false; });
  });
})();
