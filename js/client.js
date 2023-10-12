$(document).ready(function () {
    const slideImg = ["imgs/crestfactor-17.jpg", "imgs/crestfactor-29.jpg", "imgs/crestfactor-36.jpg"];
    let count = 0;
    let intervalId;

    // Slide for the main image
    function slide() {
        $('#changePic').removeClass('fade-in-out');
        setTimeout(function () {
            $('#changePic').attr('src', slideImg[count]);
            $('#changePic').addClass('fade-in-out');
        }, 2000);
        count = (count + 1) % slideImg.length;
    }

    intervalId = setInterval(slide, 5000);

    // Function to start the slideshow
    // function startSlideShow() {
    // }

    // Function to stop the slideshow
    // function stopSlideShow() {
    //     clearInterval(intervalId);
    // }

    // $(document).on('visibilitychange', function () {
    //     if (document.hidden) {
    //         stopSlideShow();
    //     } else {
    //         startSlideShow();
    //     }
    // });
});

{
    document.addEventListener('DOMContentLoaded', function () {
        // Get product data and display it
        fetchProductData();

        // Add an event listener to the search box
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', function () {
            filterProductsByName(this.value.trim());
        });

        // Add an event listener to the sort select box
        const sortSelect = document.getElementById('sort-select');
        sortSelect.addEventListener('change', function () {
            const sortBy = this.value;
            if (sortBy === 'name') {
                sortProductsByName();
            } else if (sortBy === 'price') {
                sortProductsByPrice();
            }
        });
    });

    let products = [];

    // Function to get product data from the server
    function fetchProductData() {
        $.ajax({
            url: 'http://localhost:3000/data/products',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                products = data.products; // Array of product data
                displayProducts(); // Display product information
            },
            error: function (error) {
                // Handle errors
                console.error('Error fetching data:', error);
            }
        });
    }

    fetchProductData();

    // Function to display products on the screen
    function displayProducts(filteredProducts) {
        const productSection = document.querySelector('.product-section');
        productSection.innerHTML = ''; // Clear existing products

        const productsToDisplay = filteredProducts || products;

        productsToDisplay.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <img class="product" src="http://localhost:3000/${product.images[0]}">
                <p class="product-name">${product.name}</p>
                <p class="product-price">${product.price}</p>
            `;

            // Add product information to the product-section
            productSection.appendChild(productDiv);

            // Set a click event for each product
            productDiv.addEventListener('click', () => {
                openModal(product);
            });
        });
    }

    // Function to filter products by name
    function filterProductsByName(keyword) {
        const filteredProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(keyword.toLowerCase());
        });
        displayProducts(filteredProducts);
    }

    // Function to sort products by name
    function sortProductsByName() {
        products.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        displayProducts();
    }

    // Function to sort products by price (ascending)
    function sortProductsByPrice() {
        products.sort((a, b) => {
            return parseFloat(a.price.replace('CAD: ', '').replace('$', '')) - parseFloat(b.price.replace('CAD: ', '').replace('$', ''));
        });
        displayProducts();
    }

    let currentProduct; // Variable to store the selected product information

    // Function to open the modal when a user clicks on a product
    function openModal(product) {
        currentProduct = product; // Store the selected product information
        currentSlideIndex = 0; // Reset the slide to the first image when opening the modal
        document.getElementById('myModal').style.display = 'block';
        displayModal(product); // Display the selected product information
        updateCarouselImages(product.images, currentSlideIndex); // Display images related to the product
    }

    // Function to display product information in the modal
    function displayModal(product) {
        const modalText = document.getElementById('modal-text');
        const modalSize = document.getElementById('modal-size');
        const modalPrice = document.getElementById('modal-price');
        const modalDescription = document.getElementById('modal-description');
        const modalButton = document.getElementById('modal-button');
        const rmButton = document.getElementById('rm-from-cart');
        var qtty = document.getElementById('quantity').value;

        modalText.textContent = `Name: ${product.name}`;
        modalSize.textContent = `Size: ${product.size}`;
        modalPrice.textContent = `Price: ${product.price}`;
        modalDescription.textContent = `Description: ${product.description}`;
        modalButton.setAttribute('onclick', `addToCart(${product.id})`);
        rmButton.setAttribute('onclick', `rmFromCart(${product.id})`);
    }

    // Function to update carousel images for product detail
    function updateCarouselImages(images, index) {
        const carousel = document.querySelector('.carousel');
        const img = document.createElement('img');
        img.src = 'http://localhost:3000/' + images[index];
        img.alt = 'Product Image';
        carousel.innerHTML = ''; // Clear the carousel
        carousel.appendChild(img);
    }

    // Function to show the next slide in the carousel
    function nextSlide() {
        if (currentSlideIndex < currentProduct.images.length - 1) {
            currentSlideIndex++;
        } else {
            currentSlideIndex = 0; // Return to the first image
        }
        updateCarouselImages(currentProduct.images, currentSlideIndex);
    }

    // Function to show the previous slide in the carousel
    function prevSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
        } else {
            currentSlideIndex = currentProduct.images.length - 1; // Return to the last image
        }
        updateCarouselImages(currentProduct.images, currentSlideIndex);
    }

    // Function to close the modal
    function closeModal() {
        document.getElementById('myModal').style.display = 'none';
    }

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('myModal');
        if (event.target === modal) {
            closeModal();
        }
    });
}


{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });
}



{
    const open = document.getElementById('loginIcon');
    const close = document.getElementById('closeIcon');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });

    mask.addEventListener('click', () => {
        close.click();
    });
}

{
    const open = document.getElementById('shopping-cart');
    const overlay = document.querySelector('.overlay-cart');
    const close = document.getElementById('cart-close');

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });
}
