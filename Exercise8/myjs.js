// function to set the themeName as theme
 function setTheme(themeName) {
    //set the key-value pair in the browser
    localStorage.setItem('theme', themeName);
    //set classname of current document to the theme
    document.documentElement.className = themeName;
}

// function to toggle between themes by using a button
// called onclick event
function toggleTheme() {
    //get the logo element and themebutton element
    var img = document.getElementById("logo");
    var val = document.getElementById("themebutton");
    //if our theme was initially set to dark then the button 
    //has to change it, therefore
    if (localStorage.getItem('theme') === 'theme_dark') {
        //setting the theme to light
        setTheme('theme_light');
        //changing our logo image with the light version of it
        img.src = '../mediaEx5-8/logoinv.png';
        //changing the button value to indicate the other theme
        //(the initial one, the next one to show up when changing)
        val.textContent = 'EDGY THEME';
    } else {
        //similar actions for when the initial theme is light
        setTheme('theme_dark');
        img.src = '../mediaEx5-8/logo.png';
        val.textContent = 'SOFT THEME';
    }
}

//function to set the proper theme properties on window load
window.onload = function preTheme() {
    var img = document.getElementById("logo");
    var val = document.getElementById("themebutton");
    //if the last theme used was dark theme then change the values
    //accordingly, as in the toggle theme function
    if (localStorage.getItem('theme') === 'theme_dark') {
        img.src = '../mediaEx5-8/logo.png';
        setTheme('theme_dark');
        val.textContent = 'SOFT THEME';
    } else {
        img.src = '../mediaEx5-8/logoinv.png';
        setTheme('theme_light');
        val.textContent = 'EDGY THEME';
    }
};

//function to set the secret greeting that will be displayed
//based on the day of the week using local time
function setWeekdayGreeting(){
    var date = new Date();
    var dayToday = date.getDay();
    var greeting = document.getElementById("greeting");
    if (dayToday==1){
        greeting.innerHTML="Oh you found me!<br> Well what a nice Monday, have a great week!";
    }
    else if (dayToday==2){
        greeting.innerHTML="Oh you found me!<br> Second day of the week but we hope our site is always your first choice!";
    }
    else if (dayToday==3){
        greeting.innerHTML="Oh you found me!<br> Have an exciting Wednesday!";
    }
    else if (dayToday==4){
        greeting.innerHTML="Oh you found me!<br> Halfway through the week, come on champ you can do this!";
    }
    else if (dayToday==5){
        greeting.innerHTML="Oh you found me!<br> Friday already? Have a great weekend!";
    }
    else if (dayToday==6){
        greeting.innerHTML="Why did you find me today?<br> It's Saturday go have some fun!";
    }
    else {
        greeting.innerHTML="Well, last day of the week, it's been real!<br> Hope your Sunda-e is cool and tastey!";
    }
};

//function to show/display the hidden overlay greeting
//called onmouseover on the logo of the webpage
function hiddenGreetingOn(){
    //first setting the greeting message using the previous function
    setWeekdayGreeting();
    //then setting the style of the overlayGreeting div to block
    document.getElementById("overlayGreeting").style.display = "block";
}

//function to turn off the hidden greeting by setting display back to none
//called onclick on the overlayGreeting element, which means clicking
//anywhere on the screen in this case
function hiddenGreetingOff() {
    document.getElementById("overlayGreeting").style.display = "none";
}