const btnMenu = document.querySelector(".btn-menu");
const navGauche = document.querySelector(".nav-gauche");
const navItem = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");

btnMenu.addEventListener("click", () => {
    ligne.classList.toggle("active")
    navGauche.classList.toggle("menu-visible")
})
if (window.matchMedia("(max-width: 1300px)")) {

    navItem.forEach(item => {
        item.addEventListener("click", () => {
            navGauche.classList.toggle("menu-visible")
            ligne.classList.toggle("active");
        })
    })
}
// Animation écriture

const txtAnim = document.querySelector(".txt-animation");
let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20

})
typewriter
    .pauseFor(1800)
    .changeDelay(20)
    .typeString("<strong>Transports </strong> ")
    .pauseFor(300)
    .typeString("<span style='color: #00fff9; '>d'aliments</span>")
    .pauseFor(1000)
    .deleteChars(11)
    .typeString("<span style='color: #00fff9; '>Frigorifiques</span>")
    .pauseFor(1000)
    .deleteChars(13)
    .typeString("<span style='color: #00fff9; '>Industriels</span> ")
    .pauseFor(1000)
    .typeString("<strong>, logistique, stockages</strong>")
    .start()

// Animation Contact
const inputFields = document.querySelectorAll("input");
for (let i = 0; i < inputFields.length; i++) {
    let field = inputFields[i];
    field.addEventListener("input", (e) => {
        if (e.target.value !== "") {
            e.target.parentNode.classList.add("animation")
        } else if (e.target.value == "") {
            e.target.parentNode.classList.remove("animation")
        }
    })
}
// Anim GSAP + ScrollMagic

const navbar = document.querySelector(".nav-gauche");
const titre = document.querySelector("h1");
const btn = document.querySelectorAll(".entre-trans");
const btnRondAccueil = document.querySelector(".btn-rond");

const TL1 = gsap.timeline({
    pause: true
});
TL1
    .to(navbar, {
        left: "0px",
        ease: Power3.easeOut,
        duration: 1
    })
    .from(titre, {
        y: -50,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1
    })
    .staggerFrom(btn, 1, {
        opacity: 0
    }, 0.2, "-=0.30")
    .staggerFrom(btnMedias, 1, {
        opacity: 0
    }, 0.2, "-=0.75")
    .from(btnRondAccueil, {
        y: -50,
        opacity: 0,
        ease: Power3.easeOut,
        duration: 0.4
    }, "-=1")
window.addEventListener("load", () => {
    TL1.play();
})
// Animation ScollMagic

const presentationContainer = document.querySelector(".presentation")
const titrePres = document.querySelector(".titre-pres");
const presGauche = document.querySelector(".entre-trans acc1");
 const listePres = document.querySelectorAll(".item-liste");

const tlpres = new TimelineMax();

tlpres
    .from(titrePres, {
        y: -200,
        opacity: 0,
        duration: 0.6
    })
    .from(presGauche, {
        Y: -20,
        opacity: 0,
        duration: 0.6
    }, "-=0.5")

    .staggerFrom(listePres, 1, {
        opacity: 0
    }, 0.2, "-=0.5")
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: presentationContainer,
        triggerHook: 0.5,
        reverse: false
    })
    .setTween(tlpres)

    .addTo(controller)
// Anim transport

const transportContaner = document.querySelector(".transport");
const titrePort = document.querySelector(".titre-port")

 const itemPort1 = document.querySelectorAll(".transp1")

const tlPort = new TimelineMax();

tlPort
    .from(titrePort, {
        y: -50,
        opacity: 0,
        duration: 0.9
    })
    .staggerFrom(itemPort1, 1, {
        opacity: 0
    }, 0.2, "-=0.5")

const scene2 = new ScrollMagic.Scene({
        triggerElement: transportContaner,
        triggerHook: 0.5,
        reverse: false
    })
    .setTween(tlPort)
    
    .addTo(controller)

// transp2

const itemPort2 = document.querySelectorAll(".transp2")

const tlPort2 = new TimelineMax();

tlPort2

    .staggerFrom(itemPort2, 1, {
        opacity: 0
    }, 0.2, "-=0.5")

const scene3 = new ScrollMagic.Scene({
        triggerElement: itemPort,
        triggerHook: 0.2,
        reverse: false
    })
    .setTween(tlPort2)
    
    .addTo(controller)

// transp3

const itemPort3 = document.querySelectorAll(".transp3")

const tlPort3 = new TimelineMax();

tlPort3

    .staggerFrom(itemPort3, 1, {
        opacity: 0
    }, 0.2, "-=0.5")

const scene4 = new ScrollMagic.Scene({
        triggerElement: itemPort2,
        triggerHook: 0.2,
        reverse: false
    })
    .setTween(tlPort3)
    
    .addTo(controller)

    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.04047, lng: -2.95233},
        zoom: 8
      });
    }



let mouseCursor = document.querySelector('.cursor');
let lien = document.querySelectorAll('a')
window.addEventListener('mousemove',portCursor);
   
function portCursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

