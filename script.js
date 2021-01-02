const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')

const navItems = [nav1, nav2, nav3, nav4, nav5];

// control navigation animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`)
    })
}

function toggleNav() {
    // toggle:Menu Bars Open/closed
    // .classList refers to css classlist within this element
    // when run this function it will toggle on and off change class so it animate hamburger menu
    menuBars.classList.toggle('change');
    // toggle: Menu active , show nav, if it contains overlay-active class, it will show overlay menu
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate in - overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

        // animate in - nav items
        navAnimation('out', 'in');
    } else {
        // Animate out - overlay to undo
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // animate out - nav items
        navAnimation('in', 'out');
    }
}

// add Event Listeners, when click on each, it will launching the function above
// when click it will toggle on and off
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});

