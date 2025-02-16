/* script.js */
let cart = {};
function addToCart(name, price) {
  if (cart[name]) {
    cart[name].quantity++;
  } else {
    cart[name] = { price, quantity: 1 };
  }
  updateCartDisplay();
}

function removeFromCart(name) {
  if (cart[name]) {
    cart[name].quantity--;
    if (cart[name].quantity <= 0) {
      delete cart[name];
    }
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  const cartCount = document.getElementById('cart-count');
  cartItems.innerHTML = '';
  let total = 0;
  let count = 0;
  
  for (const item in cart) {
    count += cart[item].quantity;
    total += cart[item].price * cart[item].quantity;
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `${item} (x${cart[item].quantity}) - ${cart[item].price * cart[item].quantity} грн <button onclick="addToCart('${item}', ${cart[item].price})">+</button> <button onclick="removeFromCart('${item}')">-</button>`;
    cartItems.appendChild(cartItem);
  }
  
  totalElement.textContent = total;
  cartCount.textContent = count;
}

function toggleCart() {
  const cartSection = document.getElementById('cart');
  cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
}
function toggleCart() {
  const cartSection = document.getElementById('cart');
  cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
}
