let get = (e) => document.querySelector(e);

// Theme Toggler
(function () {
    let html = get('html');
    let themeToggler = get('[data-toggle=theme]');

    if(Cookies.get('theme') == undefined) Cookies.set('theme', 'light', {SameSite: 'strict'});
    themeToggler.checked = Cookies.get('theme') == 'light';

    let getTheme = () => themeToggler.checked ? 'light' : 'dark';

    html.setAttribute('data-theme', getTheme());
    themeToggler.onclick = function (e) {
        html.setAttribute('data-theme', getTheme());
        Cookies.set('theme', getTheme(), {SameSite: 'strict'});
    };
})();

let displayMain = get('.display main');
let displaySub = get('.display sub');

let getMain = () => displayMain.innerHTML;
let getSub = () => displaySub.innerHTML;
function setMain(num) { displayMain.innerHTML = num }
function setSub(num) { displaySub.innerHTML = num }
let fixed = (num) => num.toFixed(6).replace(/\.0{0,6}$/, "");
let operated = false;

function cls() {
    setMain(0);
    setSub('');
}

function neg() {
    setMain(-getMain());
}

function num(n) {
    setMain(eval(getMain() + n));
}

function del() {
    if(getMain() < 10 && getMain() > -10) setMain(0);
    else setMain(eval(getMain().substr(0, getMain().length - 1)));
}

function percent() {
    setMain(getMain() / 100);
}

function dot() {
    setMain(getMain() + '.');
}

function add() {
    operator('+')
}

function sub() {
    operator('-')
}

function mul() {
    operator('&times;')
}

function div() {
    operator('&div;')
}

function operator(op) {
    if (operated) calc();
    operated = true;
    setSub(`${getMain()} ${op}`);
    setMain(0);
}

function calc() {
    if (operated) {
        setSub(`${getSub()} ${getMain()}`);
        let prob = getSub().replace('\u00d7', '*').replace('\u00f7', '/');
        setMain(eval(prob));
        operated = false;
    } else setSub(getMain());
}
