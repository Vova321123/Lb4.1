let cart = 0;

function showProduct(name) {
  alert("Обрано товар: " + name);
}

function addToCart(name) {
  cart++;
  document.getElementById("cartCount").innerText = cart;
  alert("Товар '" + name + "' додано до кошика!");
}

function showCart() {
  alert("У кошику " + cart + " товар(ів).");
}