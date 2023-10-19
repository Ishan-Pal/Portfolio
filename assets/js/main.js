/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toogleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close')
    {
        this.parentNode.className = 'skills__content skills__open';
        }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toogleSkills); 
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');
    
tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
})

/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/



/*==================== DARK LIGHT THEME ====================*/ 

// const skill1 = document.querySelector("#skill1");
// const html = document.querySelector("#html1");
// const css = document.querySelector("#CSS1");
// const js = document.querySelector("#JS1");
// skill1.addEventListener("click", function(){
//     html.style.animationName = "html1";
//     html.style.animationDuration = "3s";
//     html.style.animationIterationCount = "1";
//     html.style.animationFillMode = "forwards";
//     html.style.animationTimingFunction = "ease-in-out";

//     css.style.animationName = "CSS1";
//     css.style.animationDuration = "3s";
//     css.style.animationIterationCount = "1";
//     css.style.animationFillMode = "forwards";
//     css.style.animationTimingFunction = "ease-in-out";

//     js.style.animationName = "JS1";
//     js.style.animationDuration = "3s";
//     js.style.animationIterationCount = "1";
//     js.style.animationFillMode = "forwards";
//     js.style.animationTimingFunction = "ease-in-out";
    

// })

