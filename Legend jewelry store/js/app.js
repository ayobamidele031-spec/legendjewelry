let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

function displayCart() {

    let cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        let itemTotal = item.price * item.qty;
        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <h3>${item.name}</h3>
                    <p>₦${item.price}</p>
                </div>

                <div>
                    <button onclick="decreaseQty(${index})">-</button>
                    <span>${item.qty}</span>
                    <button onclick="increaseQty(${index})">+</button>
                </div>

                <div>
                    <p>₦${itemTotal}</p>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>

            </div>
        `;
    });

    document.getElementById("totalPrice").innerText = "Total: ₦" + total;
}
// REMOVE ITEM
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// CLEAR CART
function clearCart() {

    localStorage.removeItem("cart");

    cart = [];

    displayCart();
}

// RUN CART ON PAGE LOAD
displayCart();
function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // check if item already exists
    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}
function increaseQty(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].qty++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function decreaseQty(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].qty--;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}