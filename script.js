

const buttonElement = document.querySelector('button');


buttonElement.addEventListener('click', function(){


    function createElement(tagName, className){

            const cellElement = document.createElement(tagName);
            cellElement.className += className;
            return cellElement

    };


const gridElement = document.querySelector('.grid');

for (let index = 1; index <= 100; index++) {

    const actualCell =  createElement('div', 'cell');

    actualCell.innerHTML = index;

    actualCell.addEventListener('click', function(){

        actualCell.classList.toggle('selected');

    });

    gridElement.appendChild(actualCell);
 
};


















})






















