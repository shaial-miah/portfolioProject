
/* hovering over icons will increase / decrease their size  */

/* HTML  */

let html5Icon = document.getElementById('html5icon');

html5Icon.addEventListener('mouseover', function () {
    html5Icon.style.width = '150'
    html5Icon.style.height = '150'

})

html5Icon.addEventListener('mouseout', function () {
    html5Icon.style.width = '100';
    html5Icon.style.height = '100';
    html5Icon.style.transition = '0.5s';

})

/* CSS */

let cssIcon = document.getElementById('css-icon');

cssIcon.addEventListener('mouseover', function () {
    cssIcon.style.width = '150'
    cssIcon.style.height = '150'

})

cssIcon.addEventListener('mouseout', function () {
    cssIcon.style.width = '100';
    cssIcon.style.height = '100';
    cssIcon.style.transition = '0.5s';

})

/* Javascript */

let javascriptIcon = document.getElementById('javascript-icon');

javascriptIcon.addEventListener('mouseover', function () {
    javascriptIcon.style.width = '150'
    javascriptIcon.style.height = '150'

})

javascriptIcon.addEventListener('mouseout', function () {
    javascriptIcon.style.width = '100';
    javascriptIcon.style.height = '100';
    javascriptIcon.style.transition = '0.5s';

})