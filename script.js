let cart = [];

function addToCart(product) {
    cart.push(product);
    displayCart();
}

function displayCart() {
    let list = document.getElementById("cart-items");
    list.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function sendWhatsApp() {
    let message = "Order:\n" + cart.join("\n");
    let phone = "91XXXXXXXXXX"; // replace with your number
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
}
