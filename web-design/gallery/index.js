const toggleImage = document.getElementById('darkModeToggle');
const logo = document.getElementById('logo');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode-bg');
    toggleImage.src = "sun.max.circle.fill.black.png";
    logo.src = "logo-white.png";
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode-bg');
    toggleImage.src = "moon.circle.fill.png";
    logo.src = "logo-black.png";
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