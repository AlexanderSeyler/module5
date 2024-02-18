function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');

            products.forEach(product => {
                const cardColumn = document.createElement('div');
                cardColumn.className = 'col-sm-3 mb-3 mb-sm-3';

                const card = document.createElement('div');
                card.className = 'card d-flex flex-fill';
                card.style.height = '100%';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = product.title;

                const cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = `Price: $${product.price.toFixed(2)}`;

                const cardImage = document.createElement('img');
                cardImage.className = 'card-img-top';
                cardImage.src = product.image;
                cardImage.alt = product.title;

                const cardLink = document.createElement('a');
                cardLink.href = '#';
                cardLink.className = 'btn btn-primary';
                cardLink.textContent = 'More Information';

                cardLink.addEventListener('click', function () {
                    openProductModal(product);
                });

                cardBody.appendChild(cardImage);
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardLink);
                card.appendChild(cardBody);
                cardColumn.appendChild(card);
                productList.appendChild(cardColumn);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    function openProductModal(product) {
        const modalTitle = document.getElementById('productModalLabel');
        const modalBody = document.getElementById('productModalBody');

        modalTitle.textContent = product.title;
        modalBody.innerHTML = `
            <img src="${product.image}" class="img-fluid" alt="${product.title}">
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p><strong>Description:</strong> ${product.description}</p>
        `;

        selectedProduct = {
            title: product.title,
            price: product.price
        };

        $('#productModal').modal('show');
    }
});

var selectedProduct;

function addToCart() {
    const productTitle = selectedProduct.title;
    const productPrice = selectedProduct.price;

    const cartItem = {
        title: productTitle,
        price: productPrice,
        quantity: 1
    };

    console.log('Added to Cart:', cartItem);

    alert(`${productTitle} has been added to the cart!`);

    $('#productModal').modal('hide');
}
