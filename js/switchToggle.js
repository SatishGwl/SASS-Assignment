// For Dark Theme
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
console.log("TOGGLE SWITCH", toggleSwitch);
function switchTheme(e) {
  console.log("SWITCH THEME CALLED >>>>>>>>");
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);