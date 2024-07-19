export const setupEventListeners = () => {
const homeContainer = document.getElementById("homeContainer");
const menuContainer = document.getElementById("menuContainer");
const aboutContainer = document.getElementById("aboutContainer");
const formContainer = document.getElementById('booking-form');
const info = document.getElementById('info');
const slogan = document.getElementById('slogan');
const timings = document.getElementById('timings'); 
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');
const bookingBtn = document.getElementById('bookTable');
const cancelButton = document.getElementById('cancel');
const hamburgerIcon = document.getElementById('hamburger');


homeBtn.addEventListener('click',() => {
    formContainer.style.visibility = 'hidden';
    info.style.visibility = 'Visible';
    slogan.style.visibility = 'Visible';
    timings.style.visibility = 'Visible';
    homeContainer.scrollIntoView({behavior:"smooth"});
    adjustScrollPosition(homeContainer);

})

menuBtn.addEventListener('click',() => {
    menuContainer.scrollIntoView({behavior:'smooth'});
    adjustScrollPosition(menuContainer);
})

aboutBtn.addEventListener('click',() => {
    aboutContainer.scrollIntoView({behavior:"smooth"});  
    adjustScrollPosition(aboutContainer);
});



bookingBtn.addEventListener('click',() => {
    homeContainer.scrollIntoView({behavior:"smooth"});
    formContainer.style.visibility = 'Visible';
    info.style.visibility = 'hidden';
    slogan.style.visibility = 'hidden';
    timings.style.visibility = 'hidden';
    adjustScrollPosition(homeContainer);
})

cancelButton.addEventListener('click',() =>{
    formContainer.style.visibility = 'hidden';
    info.style.visibility = 'Visible';
    slogan.style.visibility = 'Visible';
    timings.style.visibility = 'Visible';

})

function adjustScrollPosition(container) {
    const yOffset = -80; 
    const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}
}