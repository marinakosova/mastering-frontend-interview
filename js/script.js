var highlight = document.querySelectorAll('.tooltip-test');

highlight.forEach(item => {
    item.addEventListener('click', () => {
        if (item.dataset.highlightClick === 'on') {
            item.style.backgroundColor = 'red';
        }
    }, false);
}, this);



// bind()
// let myModule = {
//     name: 'Marina',
//     getName: function() {
//         return console.log(this.name);
//     }
// };

// myModule.getName(); // Marina

// let someName = myModule.getName.bind({name: 'Alex'});
// someName(); //Alex



//ternary operator
// (function(howMany, colors) {

//     var colorAmt = colors.length;
//     var currColor = 0;
//     var myElement;
//     var myNode = document.querySelector('.boxes');

//     for (var i = 0; i < howMany; i++) {

//         myElement = document.createElement('div');
//         myElement.className = 'box';
//         myElement.style = 'background-color: ' + colors[currColor];
//         myNode.appendChild(myElement);

//         currColor === colorAmt - 1 ? currColor = 0 : currColor++;

//     }

//     myNode.addEventListener('click', function(e) {
//         e.target.parentNode.removeChild(e.target);
//     }, false);

// })(20, [
//     '#C94C24', //orange
//     '#268BD2', //blue
//     '#C4226F', //pink
//     '#859835', // lime
//     '#6D73C2', // purple
//     '#37A198', // green
//     '#DA3637', //red
//     '#F0AD4E' //yellow
// ]);



//Ajax
// let data, result;
// let request = new XMLHttpRequest();

// request.open('GET', 'js/data.json');

// request.onreadystatechange = function() {
//     if (
//         request.status === 200 &&
//         request.readyState === 4
//     ) {
//         data = JSON.parse(request.responseText); // data = actual Object with data, request = XMLHttpRequest object 



//     }
// }

// request.send();


//DOM
var colors = [
    '#C94C24', //orange
    '#268BD2', //blue
    '#C4226F', //pink
    '#859835', // lime
    '#6D73C2', // purple
    '#37A198', // green
    '#DA3637', //red
    '#F0AD4E' //yellow
];

// function makeBoxes(howMany) {
//     var colorAmt = colors.length;
//     var currColor = 0;
//     var myElement;
//     var myNode = document.querySelector('.boxes');

//     for (var i = 0; i < howMany; i++) {

//         myElement = document.createElement('div');
//         myElement.className = 'box';
//         myElement.style = 'background-color:' + colors[currColor];
//         myNode.appendChild(myElement);

//         if (currColor === colorAmt - 1) {
//             currColor = 0;
//         } else {
//             currColor++;
//         }
//     }

//     myNode.addEventListener('click', function(e) {
//         e.target.parentNode.removeChild(e.target);
//     }, false);
// }

// makeBoxes(20);


// Constructor
// function Hamburger(nodeName) {
//     let myNode = document.querySelector(nodeName + ' .hamburger');

//     return {
//         activate: function() {
//             myNode.addEventListener('click', function(e) {
//                 myNode.parentNode.querySelector('.navbar').classList.toggle('hidden');
//             }, false);
//         }, // activate
//         hide: function() {
//                 myNode.parentNode.querySelector('.navbar').classList.add('hidden');
//             } // hide
//     } // return
// } // Hamburger

// let topMenu = new Hamburger('#topMenu');
// topMenu.activate();

// let bottomMenu = new Hamburger('#bottomMenu');
// bottomMenu.activate();
// bottomMenu.hide();


// Fetch
// document.querySelector('.load-info').addEventListener('click', function() {
//     fetch('js/data_artists.json').then(function(response) {
//         return response.json();
//     }).then(function(data) {
//         console.log(data);
//     });
// });


// IIFE
// (function(colors) {
//     function makeBoxes(howMany) {
//         var colorAmt = colors.length;
//         var currColor = 0;
//         var myElement;
//         var myNode = document.querySelector('.boxes');

//         for (var i = 0; i < howMany; i++) {

//             myElement = document.createElement('div');
//             myElement.className = 'box';
//             myElement.style = 'background-color:' + colors[currColor];
//             myNode.appendChild(myElement);

//             if (currColor === colorAmt - 1) {
//                 currColor = 0;
//             } else {
//                 currColor++;
//             }
//         }

//         myNode.addEventListener('click', function(e) {
//             e.target.parentNode.removeChild(e.target);
//         }, false);
//     }

//     makeBoxes(20);
// })([
//     '#C94C24', //orange
//     '#268BD2', //blue
//     '#C4226F', //pink
//     '#859835', // lime
//     '#6D73C2', // purple
//     '#37A198', // green
//     '#DA3637', //red
//     '#F0AD4E' //yellow
// ]);


// Event Bubbling
// let boxes = document.querySelector('.boxes');
// let special = document.querySelector('#special');

// boxes.addEventListener('click', function(e) {
//     console.log(e);
//     e.target.parentNode.removeChild(e.target); //it removes actual div with boxes class if I click
// });

// boxes.addEventListener('click', function(e) {
//     if (e.target.className === 'box') {
//         e.target.parentNode.removeChild(e.target); // it prevents deleting div with boxes class
//     }
// }, false); // and I can add false: it bubbles events up to DOM to check if there is another events

// special.addEventListener('click', function(e) {
//     e.target.style = 'background-color: #6D73C2;';
//     e.stopPropagation();
// }, false);


// Callbacks
// let tips = document.querySelectorAll('.hastip');

// for (let i = 0; i < tips.length; i++) {
//     tips[i].addEventListener('click', function(e) {
//         e.target.querySelector('.tooltip-p').classList.toggle('active'); // callback  
//     }, false);
// }


// Promises
// let artists;

// function loadData(url) {
//     return new Promise(function(resolve, reject) {
//         let req = new XMLHttpRequest();
//         req.open('GET', url);
//         req.onload = function() {
//                 if (req.status == 200) {
//                     resolve(JSON.parse(rrq.response));
//                 }
//             } // onload callback
//     });
// }
// loadData('js/data_artists.json').then(function(data) {
//     console.log(data);
// });


// Hoisting
var howMany = 12;

function createBoxes(qty = 4) { // default
    var myBoxes = document.querySelector('.boxes');

    for (var i = 0; i < qty; i++) {
        var myNode = document.createElement('div');
        myNode.className = 'box';
        myBoxes.appendChild(myNode);
    }

}

createBoxes(howMany);

// will get undefined
var howMany;
console.log(howMany); // undefined

function createBoxes(qty = 4) { // default
    var myBoxes = document.querySelector('.boxes');

    for (var i = 0; i < qty; i++) {
        var myNode = document.createElement('div');
        myNode.className = 'box';
        myBoxes.appendChild(myNode);
    }

}

howMany = 8; // will get 8 boxes

createBoxes(howMany);

howMany = 8; // will get default 4 boxes