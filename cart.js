// const product = [
//     {id: 0,
//     image: './newsletter/purple black.avif',
//     title: 'warmers with trouser (Black)',
//     price: 120,
// },
//     {
//         id: 1,
//         image: './newsletter/7.avif',
//         title: 'Grey Tracksuit',
//         price: 60,
//     },
//     {
//         id: 2,
//         image: './1.jpg',
//         title: 'Vani top (Green)',
//         price: 18,

//     },
//     {
//         id: 3,
//         image: './shop/1.jpg',
//         title: 'Dark Purple trouser',
//         price: 14,
//     },
//     {
//         id: 4,
//         image: './products/1.jpg',
//         title: 'warmers with trouser (Black)',
//         price: 85,
//     },
//     {
//         id: 5,
//         image: './new-p/2.jpg',
//         title: 'warmers with trouser (Black)',
//         price: 85,
//     },
//     {
//         id: 6,
//         image: './new-p/3.avif',
//         title: 'warmers with trouser (Black)',
//         price: 85,
//     },
//     {
//         id: 7,
//         image: './new-p/4.avif',
//         title: 'warmers with trouser (Black)',
//         price: 85,
//     },
//     {
//         id: 8,
//         image: './new-p/5.avif',
//         title: 'warmers with trouser (Black)',
//         price: 85,
//     }
// ];

// let shoppingCart = [];


// // Get all "Add to Cart" buttons
// const cartButtons = document.querySelectorAll('.cart-button');

// // Add a click event listener to each button
// cartButtons.forEach(button => {
//     button.addEventListener('click', addToCart);
// });

// // Function to handle adding products to the cart
// function addToCart(event) {
//     // Get the product ID from the clicked button's data attribute
//     const productId = event.target.getAttribute('data-product-id');

//     // Find the product with the matching ID in your product array
//     const product = product.find(item => item.id === parseInt(productId));

//     // Check if the product is already in the cart
//     const existingProduct = shoppingCart.find(item => item.id === product.id);

//     if (existingProduct) {
//         // If the product is already in the cart, increase the quantity
//         existingProduct.quantity += 1;
//     } else {
//         // If the product is not in the cart, add it with a quantity of 1
//         product.quantity = 1;
//         shoppingCart.push(product);
//     }

//     // Update the cart quantity displayed in your header
//     updateCartQuantity();

//     // Optionally, you can show a "Added to Cart" message or animation
//     const addButton = event.target;
//     addButton.querySelector('.add-to-cart').classList.add('hidden');
//     addButton.querySelector('.added').classList.remove('hidden');
// }

// // Function to update the cart quantity displayed in the header
// function updateCartQuantity() {
//     const cartQuantity = shoppingCart.reduce((total, item) => total + item.quantity, 0);
//     const quantityElement = document.querySelector('.quantity');
//     quantityElement.textContent = cartQuantity;
// }



// Initialize shopping cart as an empty array


// Function to display cart items and update the cart summary
// function updateCart() {
//   const cartTable = document.getElementById('root');
//   const itemTotal = document.getElementById('itemA');
//   const totalAmount = document.getElementById('totalA');
//   const totalItems = document.getElementById('item5');
//   const totalAmount8 = document.getElementById('total8');

//   // Clear the cart table before updating it
//   cartTable.innerHTML = '';

//   // Initialize variables for calculating total price and item count
//   let totalPrice = 0;
//   let itemCount = 0;

//   // Iterate through items in the shopping cart
//   shoppingCart.forEach(item => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td class="head-img"><img src="${item.image}" alt=""></td>
//       <td>${item.title}</td>
//       <td><i class="fa-solid fa-naira-sign"></i>${item.price.toFixed(2)}</td>
//       <td><button class="delete" onclick="removeFromCart(${item.id})">Delete</button></td>
//     `;

//     cartTable.appendChild(row);

//     totalPrice += item.price;
//     itemCount += 1;
//   });

//   // Update the item count and total price in the cart summary
//   itemTotal.textContent = itemCount === 1 ? '1 Item' : `${itemCount} Items`;
//   totalItems.textContent = itemCount === 1 ? '1 Item' : `${itemCount} Items`;
//   totalAmount.textContent = totalPrice.toFixed(2);
//   totalAmount8.textContent = totalPrice.toFixed(2);
// }

// // Function to remove an item from the cart
// function removeFromCart(itemId) {
//   // Find the index of the item to remove in the shopping cart
//   const index = shoppingCart.findIndex(item => item.id === itemId);

//   // If the item is found, remove it from the cart
//   if (index !== -1) {
//     shoppingCart.splice(index, 1);
//   }

//   // Update the cart display and summary
//   updateCart();
// }

// // Function to apply a promo code (you can implement this logic as needed)
// function promo() {
//   const promoCodeInput = document.getElementById('promoCode');
//   const promoCode = promoCodeInput.value;

//   // You can implement promo code logic here if needed
//   // For example, you can apply discounts based on the promo code entered

//   // Clear the promo code input field
//   promoCodeInput.value = '';

//   // Update the cart display and summary
//   updateCart();
// }

// // Call updateCart initially to display an empty cart
// updateCart();

// // Get all product elements
// const products = document.querySelectorAll('.row');

// // Get cart elements
// const cartItems = document.getElementById('cart-items');
// const cartTotal = document.getElementById('cart-total');

// // Initialize cart and total
// const cart = {};
// let total = 0;

// // Add click event listener to each "Add to Cart" button
// products.forEach((product, index) => {
//     const addToCartBtn = product.querySelector('.addto-cart');
//     const productId = product.getAttribute('data-product-id');

//     addToCartBtn.addEventListener('click', () => {
//         if (cart[productId]) {
//             cart[productId].quantity++;
//         } else {
//             cart[productId] = {
//                 name: `row ${index + 1}`,
//                 price: 85000, // You can set the actual price here
//                 quantity: 1,
//             };
//         }

//         updateCart();
//     });
// });

// // Update the cart and total display
// function updateCart() {
//     cartItems.innerHTML = '';

//     total = 0;
//     for (const productId in cart) {
//         const product = cart[productId];
//         const li = document.createElement('li');
//         li.textContent = `${product.name} x${product.quantity} - NGN ${product.price * product.quantity}`;
//         cartItems.appendChild(li);
//         total += product.price * product.quantity;
//     }

//     cartTotal.textContent = total;
// }

// // Initialize checkout button
// const checkoutBtn = document.getElementById('checkout');
// checkoutBtn.addEventListener('click', () => {
//     alert(`Total Amount: NGN ${total}`);
// });



// Get all product elements
const products = document.querySelectorAll('.row');

// Get cart elements
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Initialize cart and total
const cart = {};
let total = 0;

// Add click event listener to each "Add to Cart" button
products.forEach((product, index) => {
    const cartButton = product.querySelector('.cart-button'); // Change to .cart-button
    const productId = product.getAttribute('data-product-id');

    cartButton.addEventListener('click', () => { // Change to .cart-button
        if (cart[productId]) {
            cart[productId].quantity++;
        } else {
            cart[productId] = {
                name: `Product ${index + 1}`,
                price: 85000, // You can set the actual price here
                quantity: 1,
            };
        }

        updateCart();
    });
});

// Update the cart and total display
function updateCart() {
    cartItems.innerHTML = '';

    total = 0;
    for (const productId in cart) {
        const product = cart[productId];
        const li = document.createElement('li');
        li.textContent = `${product.name} x${product.quantity} - NGN ${product.price * product.quantity}`;
        cartItems.appendChild(li);
        total += product.price * product.quantity;
    }

    cartTotal.textContent = total;
}

// Initialize checkout button
const checkoutBtn = document.getElementById('checkout');
checkoutBtn.addEventListener('click', () => {
    alert(`Total Amount: NGN ${total}`);
});
