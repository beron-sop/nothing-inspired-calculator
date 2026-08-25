const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}
function clearDisplay() {
    display.value = '';
}
function parenthesis() {

    const expression = display.value;

    const open = (expression.match(/\(/g) || []).length;
    const close = (expression.match(/\)/g) || []).length;

    if (open > close) {
        display.value += ')';
    } else {
        display.value += '(';
    }
}
function calculateResult() {

    let expression = display.value;

    const open = (expression.match(/\(/g) || []).length;
    const close = (expression.match(/\)/g) || []).length;

    if (open > close) {
        expression += ')'.repeat(open - close);
    }

    expression = expression
        .replace(/(\d|\))(\()/g, '$1*$2')
        .replace(/(\))(\d)/g, '$1*$2');

    try {
        display.value = eval(expression);
    }
    catch (error) {
        display.value = "Error";
    }
}
function percentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = 'Error';
    }     
}      

document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
});

const darkModeToggle = document.getElementById('darkModeToggle');
const modeIcon = document.getElementById('modeIcon');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    modeIcon.src = 'icons/sun.png';
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    modeIcon.src = isDark ? 'icons/sun.png' : 'icons/moon.png';
});