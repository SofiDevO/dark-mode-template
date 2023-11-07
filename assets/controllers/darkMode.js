const d = document;
const button = d.querySelector('.toogle-btn');
const iconoDark = d.querySelector('.bi-brightness-low-fill');

let darkModeState = false;

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

/* Toggles the "dark-mode" class */
export default function toogleDarkMode(state){
    d.documentElement.classList.toggle("dark-mode", state);
    darkModeState = state;
    if(d.documentElement.classList.contains("dark-mode")){
        iconoDark.classList.remove("bi-brightness-low-fill");
        iconoDark.classList.add("bi-moon-stars-fill");
    }else{
        iconoDark.classList.remove("bi-moon-stars-fill");
        iconoDark.classList.add("bi-brightness-low-fill");
    }
}

/* Sets localStorage state*/
function setDarkModeLocalStorage(state){
    localStorage.setItem("dark-mode", state);
}

/* Initial setting */

toogleDarkMode(useDark.matches);
toogleDarkMode(localStorage.getItem("dark-mode") == "true");



// Listen for changes in the OS settings.
// Note: the arrow function shorthand works only in modern browsers,
// for older browsers define the function using the function keyword.
useDark.addEventListener('state',(event)=> toogleDarkMode(event.matches));

/* Toggles the dark mode class on click and set localStorage state */

button.addEventListener("click", ()=> {
    darkModeState = !darkModeState;

    toogleDarkMode(darkModeState);
    setDarkModeLocalStorage(darkModeState);
})