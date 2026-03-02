const products = [
    { name: "ESD Cap", price: 59 },
    { name: "ESD Tray", price: 899 },
    { name: "ESD Crate", price: 1150 }
];

function renderProducts() {
    const container = document.getElementById("product-list");

    products.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
        </div>`;
    });
}

renderProducts();
