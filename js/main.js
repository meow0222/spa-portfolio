{
    document.addEventListener('DOMContentLoaded', function () {
        const slideImg = ["imgs/crestfactor-17.jpg", "imgs/crestfactor-29.jpg", "imgs/crestfactor-36.jpg"];
        let changePic = document.getElementById('changePic');
        let count = 0;
        let intervalId;

        function slide() {
            changePic.classList.remove('fade-in-out'); // 既存のクラスを削除
            setTimeout(() => {
                changePic.src = slideImg[count];
                changePic.classList.add('fade-in-out'); // 新しい画像にフェードイン/フェードアウトクラスを追加
            }, 2000); // クラスを追加する前に1秒待機
            count = (count + 1) % slideImg.length;
        }

        function startSlideShow() {
            intervalId = setInterval(slide, 5000); // スライドの間隔を4秒に設定
        }

        function stopSlideShow() {
            clearInterval(intervalId);
        }

        function isSpecialPage() {
            return window.location.pathname.includes('index');
        }

        if (isSpecialPage()) {
            startSlideShow();
        }

        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                stopSlideShow();
            } else if (isSpecialPage()) {
                startSlideShow();
            }
        });
    });
}

// const products = [
//     {
//         image: [
//             '../imgs/crestfactor-4.jpg', 
//             '../imgs/crestfactor-6.jpg',
//             '../imgs/crestfactor-8.jpg'
//         ],
//         name: 'Sweat',
//         price: 'CAD: 60$',
//         description: "aaa"
//     },
//     {
//         image: '../imgs/crestfactor-5.jpg',
//         name: 'Sweat',
//         price: 'CAD: 60$',
//         description: "aaa"

//     },
//     {
//         image: '../imgs/crestfactor-13.jpg',
//         name: 'Hoodie',
//         price: 'CAD: 65$',
//         description: "aaa"

//     },
// ];



// const productImages = document.querySelectorAll('.product');
// const modal = document.getElementById('myModal');
// const modalImage = document.getElementById('modal-image');
// const modalText = document.getElementById('modal-text');
// const modalPrice = document.getElementById('modal-price');
// const modalDescription = document.getElementById('modal-description')

// // 画像がクリックされたときの処理
// productImages.forEach((productImage, index) => {
//     productImage.addEventListener('click', () => {
//         // 商品情報を取得
//         const product = products[index];

//         // モーダル内の要素に情報をセット
//         modalImage.src = product.image;
//         modalText.textContent = product.name;
//         modalPrice.textContent = product.price;
//         modalDescription.textContent = product.description;

//         // モーダルを表示
//         modal.style.display = 'block';
//     });
// });

// // 閉じるボタンがクリックされたときの処理
// const closeBtn = document.querySelector('.close');
// closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// // モーダル外をクリックしたときの処理
// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });

{
    let currentSlide = 0;
    const carousel = document.querySelector('.carousel');
    const modalText = document.getElementById('modal-text');
    const modalSize = document.getElementById('modal-size')
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');
    const productImages = document.querySelectorAll('.product');
    const products = [
        {
            images: [
                '../imgs/crestfactor-4.jpg',
                '../imgs/crestfactor-6.jpg',
                '../imgs/crestfactor-8.jpg'
            ],
            name: 'Sweat',
            size: 'S  M  L  XL',
            price: 'CAD: 60$',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vitae ea, facere commodi nam magni eos esse ullam dignissimos molestias! Repellat architecto necessitatibus voluptatibus libero facilis quos consequuntur minus maiores.'
        },
        {
            images: [
                '../imgs/crestfactor-5.jpg',
                '../imgs/crestfactor-9.jpg',
                '../imgs/crestfactor-13.jpg'
            ],
            name: 'Sweat',
            size: 'S  M  L  XL',
            price: 'CAD: 60$',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vitae ea, facere commodi nam magni eos esse ullam dignissimos molestias! Repellat architecto necessitatibus voluptatibus libero facilis quos consequuntur minus maiores.'
        },
        {
            images: [
                '../imgs/crestfactor-13.jpg',
                '../imgs/crestfactor-32.jpg',
                '../imgs/crestfactor-26.jpg'
            ],
            name: 'Hoodie',
            size: 'S  M  L  XL',
            price: 'CAD: 66$',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vitae ea, facere commodi nam magni eos esse ullam dignissimos molestias! Repellat architecto necessitatibus voluptatibus libero facilis quos consequuntur minus maiores.'
        },
        // 他の商品情報も追加
    ];


    let product;


    function openModal(index) {
        // モーダルを表示
        document.getElementById('myModal').style.display = 'block';
        currentSlide = 0; // モーダルが開かれるときに最初のスライドから開始
        product = products[index];
        updateModalContent();
    }

    function closeModal() {
        // モーダルを非表示
        document.getElementById('myModal').style.display = 'none';
    }

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('myModal'); // modal変数をここで定義
        if (event.target === modal) {
            closeModal();
        }
    });

    function prevSlide() {
        // 前のスライドに移動
        currentSlide = (currentSlide - 1 + product.images.length) % product.images.length;
        updateCarousel();
    }

    function nextSlide() {
        // 次のスライドに移動
        currentSlide = (currentSlide + 1) % product.images.length;
        updateCarousel();
    }

    function updateCarousel() {
        // カルーセル内の画像を更新
        carousel.innerHTML = `<img src="${product.images[currentSlide]}" alt="Product Image">`;
    }

    function updateModalContent() {
        // 商品情報を更新
        updateCarousel();
        modalText.textContent = product.name;
        modalSize.textContent = product.size;
        modalPrice.textContent = product.price;
        modalDescription.textContent = product.description;
    }

    productImages.forEach((productImage, index) => {
        productImage.addEventListener('click', () => {
            openModal(index);
        });
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