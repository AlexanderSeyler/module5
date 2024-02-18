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
    fetchAndDisplayRandomProduct();

    function fetchAndDisplayProduct(product) {
        const cardColumn = document.createElement('div');
        cardColumn.className = 'col-sm-6 mx-auto mb-3';

        const card = document.createElement('div');
        card.className = 'card d-flex flex-fill';
        card.style.maxHeight = '100%';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column justify-content-between';

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

        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'd-flex justify-content-between'; 

        const cardLink = document.createElement('a');
        cardLink.href = '#';
        cardLink.className = 'btn btn-primary';
        cardLink.textContent = 'More Information';

        cardLink.addEventListener('click', function () {
            openProductModal(product);
        });

        const randomizeButton = document.createElement('button');
        randomizeButton.className = 'btn btn-secondary';
        randomizeButton.textContent = 'Another Product';
        randomizeButton.addEventListener('click', function () {
            fetchAndDisplayRandomProduct();
        });

        buttonWrapper.appendChild(cardLink);
        buttonWrapper.appendChild(randomizeButton);

        cardBody.appendChild(cardImage);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(buttonWrapper); 
        card.appendChild(cardBody);
        cardColumn.appendChild(card);

        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        productList.appendChild(cardColumn);
    }

    function fetchAndDisplayRandomProduct() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(products => {
                const randomIndex = Math.floor(Math.random() * products.length);
                const randomProduct = products[randomIndex];

                fetchAndDisplayProduct(randomProduct);
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    

    function openProductModal(product) {
        const modalTitle = document.getElementById('productModalLabel');
        const modalBody = document.getElementById('productModalBody');

        modalTitle.textContent = product.title;

        const modalContent = `
            <img src="${product.image}" alt="${product.title}" class="img-fluid mb-2">
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Category: ${product.category}</p>
        `;

        modalBody.innerHTML = modalContent;

        $('#productModal').modal('show');
    }
});