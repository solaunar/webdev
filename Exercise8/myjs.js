


// function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    var img = document.getElementById("logo");
    var val = document.getElementById("themebutton");
    if (localStorage.getItem('theme') === 'theme_dark') {
        setTheme('theme_light');
        img.src = '../mediaEx5-8/logoinv.png';
        val.textContent = 'EDGY THEME';
    } else {
        setTheme('theme_dark');
        img.src = '../mediaEx5-8/logo.png';
        val.textContent = 'SOFT THEME';
    }
}

// Immediately invoked function to set the theme on initial load
window.onload = function preTheme() {
    var img = document.getElementById("logo");
    var val = document.getElementById("themebutton");
    if (localStorage.getItem('theme') === 'theme_dark') {
        img.src = '../mediaEx5-8/logo.png';
        setTheme('theme_dark');
        val.textContent = 'SOFT THEME';
    } else {
        img.src = '../mediaEx5-8/logoinv.png';
        setTheme('theme_light');
        val.textContent = 'EDGY THEME';
    }
}