{
$(document).ready(function () {
    const slideImg = ["imgs/crestfactor-17.jpg", "imgs/crestfactor-29.jpg", "imgs/crestfactor-36.jpg"];
    let count = 0;
    let intervalId;

    // slide for Main img
    function slide() {
        $('#changePic').removeClass('fade-in-out');
        setTimeout(function () {
            $('#changePic').attr('src', slideImg[count]);
            $('#changePic').addClass('fade-in-out');
        }, 2000);
        count = (count + 1) % slideImg.length;
    }

    intervalId = setInterval(slide, 5000);

    
    // function startSlideShow() {
    // }

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
}





{
    // get products picture from server
    function fetchProductData() {
        $.ajax({
            url: 'http://localhost:3000/data/products',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                products = data.products; // 商品データの配列
                displayProducts(); // 商品情報を表示
            },
            error: function (error) {
                // エラー時の処理
                console.error('Error fetching data:', error);
            }
        });
    }

    fetchProductData();

    // after get picture show it on the screen
    function displayProducts() {
        const productSection = document.querySelector('.product-section');

        // 商品情報をループして表示
        products.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
            <img class="product" src="http://localhost:3000/${product.images[0]}">
            <p>${product.name}</p>
            <p>${product.price}</p>
        `;

            // 商品情報を product-section に追加
            productSection.appendChild(productDiv);

            // 商品ごとのクリックイベントを設定
            productDiv.addEventListener('click', () => {
                openModal(product);
            });
        });
    }


    let currentProduct; // 選択された商品情報を保存する変数


    // open the Modal when user click the product
    function openModal(product) {
        currentProduct = product;// 選択された商品情報を保存
        currentSlideIndex = 0; // モーダルを開いたときにスライドを最初の画像にリセット
        document.getElementById('myModal').style.display = 'block';
        displayModal(product); // 選択された商品情報を表示
        updateCarouselImages(product.images, currentSlideIndex); // 商品に関連する画像を表示
    }



    // put product information after Modal open
    function displayModal(product) {
        const modalText = document.getElementById('modal-text');
        const modalSize = document.getElementById('modal-size');
        const modalPrice = document.getElementById('modal-price');
        const modalDescription = document.getElementById('modal-description');

        modalText.textContent = `Name: ${product.name}`;
        modalSize.textContent = `Size: ${product.size}`;
        modalPrice.textContent = `Price: ${product.price}`;
        modalDescription.textContent = `Description: ${product.description}`;
    }


    // Carouse for Product detail
    function updateCarouselImages(images, index) {
        const carousel = document.querySelector('.carousel');
        const img = document.createElement('img');
        img.src = 'http://localhost:3000/' + images[index];
        img.alt = 'Product Image';
        carousel.innerHTML = ''; // カルーセルをクリア
        carousel.appendChild(img);
    }


    function nextSlide() {
        if (currentSlideIndex < currentProduct.images.length - 1) {
            currentSlideIndex++;
        } else {
            currentSlideIndex = 0; // 最初の画像に戻る
        }
        updateCarouselImages(currentProduct.images, currentSlideIndex);
    }



    function prevSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
        } else {
            currentSlideIndex = currentProduct.images.length - 1; // 最後の画像に戻る
        }
        updateCarouselImages(currentProduct.images, currentSlideIndex);
    }


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
