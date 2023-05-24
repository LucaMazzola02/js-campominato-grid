const buttonElement = document.querySelector('button');

const gridElement = document.getElementById('grid');

gridElement.innerHTML = "";

buttonElement.addEventListener('click', function(){

    function createElement(tagName, className){

            const cellElement = document.createElement(tagName);
            cellElement.className += className;
            return cellElement

    };

for (let index = 1; index <= 100; index++) {

    const actualCell =  createElement('div', 'cell');

    actualCell.innerHTML = index;

    actualCell.addEventListener('click', function(){

        actualCell.classList.toggle('selected');

        console.log(index);

    });

    gridElement.appendChild(actualCell);
 
};


















})






















