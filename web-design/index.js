const toggleImage = document.getElementById('darkModeToggle');
const numbers = document.querySelectorAll('.number');
const secondTexts = document.querySelectorAll('.secondtext');
const thirdTexts = document.querySelectorAll('.thirdtext');
const footer = document.getElementById('footer');

const enableDarkMode = () => {

    document.body.classList.add('dark-mode-bg');
    numbers.forEach(element => {
        element.classList.add('dark-mode-text');
    });
    secondTexts.forEach(element => {
        element.classList.add('dark-mode-text');
    });
    thirdTexts.forEach(element => {
        element.classList.add('dark-mode-text');
    });
    footer.style.backgroundColor = "#000000";
    toggleImage.src = "sun.max.circle.white.png";
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode-bg');
    numbers.forEach(element => {
        element.classList.remove('dark-mode-text');
    });
    secondTexts.forEach(element => {
        element.classList.remove('dark-mode-text');
    });
    thirdTexts.forEach(element => {
        element.classList.remove('dark-mode-text');
    });
    footer.style.backgroundColor = "#181A1B";
    toggleImage.src = "moon.circle.white.png";
    localStorage.setItem('darkMode', 'disabled');
};

toggleImage.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode-bg')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

const currentMode = localStorage.getItem('darkMode');
if (currentMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}