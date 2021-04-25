


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
        img.src = 'logoinv.png';
        val.textContent = 'EDGY THEME';
    } else {
        setTheme('theme_dark');
        img.src = 'logo.png';
        val.textContent = 'SOFT THEME';
    }
}

// Immediately invoked function to set the theme on initial load
window.onload = function preTheme() {
    var img = document.getElementById("logo");
    var val = document.getElementById("themebutton");
    if (localStorage.getItem('theme') === 'theme_dark') {
        img.src = 'logo.png';
        setTheme('theme_dark');
        val.textContent = 'SOFT THEME';
    } else {
        img.src = 'logoinv.png';
        setTheme('theme_light');
        val.textContent = 'EDGY THEME';
    }
};

var counter = 1;
function addFields(){
        // Container <fieldset> where dynamic content will be placed
        var container = document.getElementById("contact_info");
        // Append a node with a random text
        container.appendChild(document.createTextNode("Phone Number " + (counter+1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "tel";
        input.name = "phone" + counter;
        input.id = "phone" + counter;
        input.placeholder = "Extra phone: "+(counter+1);
        input.pattern = "[0-9]{4}-[0-9][0-9]{10}";
        container.appendChild(input);
        counter = counter+1;
        // Append a line break 
        container.appendChild(document.createElement("br"));
};