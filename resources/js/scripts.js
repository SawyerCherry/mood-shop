const itemsContainer = document.getElementById('items')
import data from './data.js'
// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    let price = document.createElement('p');
    let desc = document.createElement('p');
    let button = document.createElement('button');
    desc.innerHTML = data[i].desc
    price.innerHTML = data[i].price
    button.innerHTML = data[i].name
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
   
    // Add the image to the div
    newDiv.appendChild(img)
    newDiv.appendChild(desc)
    newDiv.appendChild(price)
    newDiv.appendChild(button)
    document.querySelector('#items').appendChild(newDiv)
}
