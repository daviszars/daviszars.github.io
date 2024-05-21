const toggleImage = document.getElementById('darkModeToggle');
const logo = document.getElementById('logo');
const gallery = document.getElementById('gallery');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode-bg');
    gallery.classList.add('dark-mode-text');
    toggleImage.src = "sun.max.circle.white.png";
    logo.src = "logo-white.png";
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode-bg');
    gallery.classList.remove('dark-mode-text');
    toggleImage.src = "moon.circle.black.png";
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