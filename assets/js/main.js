/*==================== SHOWING & HIDING MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== SHOW MENU =====*/
/* Checking if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== HIDE MENU =====*/
/* Checking if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*==================== REMOVING MOBILE MENU ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
function blurHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
}
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault();
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm( 'service_r3u4y2f',
	'template_vciswvf',
	'#contact-form',
	'jBNqd1Z5BKnYVRCHO')
    .then(()=>{
        	// Show sent message
            contactMessage.textContent = 'Mensagem enviada com Sucesso ✅'
           	// Remove message after five seconds
            setTimeout(()=>{
                contactMessage.textContent=''
            }, 5000)
        	// Clear input fields
            contactForm.reset();
    }, ()=>{
        	// Show error message
            contactMessage.textContent = 'Mensagem não enviada (Service Error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height , add the show-scroll class to the taf with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id")

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }

    })
}
window.addEventListener("scroll", scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations reapeat
})

sr.reveal('.home__data, .home__social, .contact__container, .footer__container')
sr.reveal('.home__image', {origin: 'bottom'})
sr.reveal('.about__data, .skills__data', {origin: 'left'})
sr.reveal('.about__image, .skills__content', {origin: 'right'})
sr.reveal('.services__card, .projects__card', {interval: 100})