
    window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("main_content").style.display = "block";
      }, 3500); 
    });

let menuicon=document.querySelector('#menu-icon')
let navlink=document.querySelector('.navbar')
let navItems = document.querySelectorAll('.navbar a');

menuicon.onclick=()=>{
  menuicon.classList.toggle('bx-x')
  navlink.classList.toggle('active')

}

navItems.forEach(item => {
  item.addEventListener('click', () => {
    menuicon.classList.remove('bx-x');
    navlink.classList.remove('active');
  });
});
  const navbar = document.querySelectorAll('.menu');
  const sections = document.querySelectorAll('.content-section');

  navbar.forEach(link => {
    link.addEventListener('click', () => {
      navbar.forEach(nav=>nav.classList.remove('active'))
      sections.forEach(section=>section.classList.remove('active'))
      link.classList.add('active')
      document.getElementById(link.dataset.tab).classList.add('active')
    });
  });


  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button.next');
  const prevButton = document.querySelector('.carousel-button.prev');
  let currentSlide = 0;

  nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      track.style.transform = `translateX(-${100 * currentSlide}%)`;
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      track.style.transform = `translateX(-${100 * currentSlide}%)`;
    }
  });

  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabs = document.querySelectorAll('.tab');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;
      const targetTab = document.getElementById(targetId);

      targetTab.classList.add('active');
      btn.classList.add('active');

      tabs.forEach(tab => {
        if (tab !== targetTab) tab.classList.remove('active');
      });

      tabButtons.forEach(button => {
        if (button !== btn) button.classList.remove('active');
      });
    });
  });

  emailjs.init("TVixzqf3HTB0iQuIZ");
  document.getElementById("contactFormSubmit").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_2002", "template_d82hmad", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset(); 
      }, (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      });
  });


