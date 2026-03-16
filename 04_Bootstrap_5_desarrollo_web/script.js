let cart = [];

function buyGame(game) {

    cart.push(game);

    updateCart();

    showNotification(game + " agregado al carrito 🛒");

}

function updateCart() {

    let cartCount = document.getElementById("cart-count");

    cartCount.textContent = cart.length;

}

function showNotification(message) {

    let notification = document.createElement("div");

    notification.classList.add("notification");

    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("show");

    }, 100);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {

            notification.remove();

        }, 300);

    }, 2000);

}