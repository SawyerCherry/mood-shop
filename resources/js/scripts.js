const itemsContainer = document.getElementById('items')
import data from './data.js'


// the length of our data determines how many times this loop goes around
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')

console.log(itemList)
itemList.innerHTML = '<li> Hello World</li>'
const cart = []
const obj = {}
       // add Item 
function addItem(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name ) {
            cart[i].qty += 1
            return
        }
    }
    const item = { name: name, price: price, qty: 1 }
    cart.push(item)
}
        // ------------------------------------------------------
        // show items
function showItems() {
    const qty = getQty()
    cartQty.innerHTML = `You have ${qty} items in your cart!`
    let itemStr = ''
    for (let i = 0; i < cart.length; i += 1) {
        const {name, price, qty} = cart[i]

        console.log(`-${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        itemStr += `<li>${name} $${price} x ${qty} = ${qty * price}</li>`
    }
    itemList.innerHTML = itemStr
    const total = getTotal()
    cartTotal.innerHTML = `Your total in cart: $${getTotal()}`
}
        // ------------------------------------------------------
        // get a total
function getTotal () {
    let total = 0
    for (let i =0; i <cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}
        // ------------------------------------------------------
        // get quanity
function getQty() {
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}
        // ------------------------------------------------------

          // remove an item
function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            if (qty > 0) {
                cart[i].qty -= qty
            }
            if (cart[i].qty === 0 || qty === 0 ) {
                cart.splice(i, 1)
            }
            return
        }
    }
}
        // ------------------------------------------------------


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
    button.id = data[i].name
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
const all_items_button = Array.from(document.querySelectorAll('button'))
console.log(all_items_button)

all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
  }))
