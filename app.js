// scroll to top
const scrolltp = document.querySelector('#scrolltp');
scrolltp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= 700) {
        scrolltp.style.opacity = 1
    }
    else {
        scrolltp.style.opacity = 0;
    }
})
// Theme
const ThemeToggle = document.querySelector('.checkbox');

const body = document.querySelector('body');
const darkmode = localStorage.getItem('dark');
if(darkmode){
    body.classList.add('dark');
    ThemeToggle.checked= true;
}
ThemeToggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    if(body.classList.contains('dark')){
        localStorage.setItem('dark',"true")
    }
    else{
        localStorage.removeItem('dark')
    }
})