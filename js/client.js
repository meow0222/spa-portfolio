// {
//     document.addEventListener('DOMContentLoaded', function () {
//         const slideImg = ["imgs/crestfactor-17.jpg", "imgs/crestfactor-29.jpg", "imgs/crestfactor-36.jpg"];
//         let changePic = document.getElementById('changePic');
//         let count = 0;
//         let intervalId;

//         function slide() {
//             changePic.classList.remove('fade-in-out'); 
//             setTimeout(() => {
//                 changePic.src = slideImg[count];
//                 changePic.classList.add('fade-in-out'); 
//             }, 2000); // クラスを追加する前に1秒待機
//             count = (count + 1) % slideImg.length;
//         }

//         function startSlideShow() {
//             intervalId = setInterval(slide, 5000); 
//         }

//         function stopSlideShow() {
//             clearInterval(intervalId);
//         }

//         function isSpecialPage() {
//             return window.location.pathname.includes('index');
//         }

//         if (isSpecialPage()) {
//             startSlideShow();
//         }

//         document.addEventListener('visibilitychange', function () {
//             if (document.hidden) {
//                 stopSlideShow();
//             } else if (isSpecialPage()) {
//                 startSlideShow();
//             }
//         });
//     });
// }

{
    $(document).ready(function() {
        const slideImg = ["imgs/crestfactor-17.jpg", "imgs/crestfactor-29.jpg", "imgs/crestfactor-36.jpg"];
        let count = 0;
        let intervalId;
    
        function slide() {
            $('#changePic').removeClass('fade-in-out');
            setTimeout(function() {
                $('#changePic').attr('src', slideImg[count]);
                $('#changePic').addClass('fade-in-out');
            }, 2000);
            count = (count + 1) % slideImg.length;
        }
    
        function startSlideShow() {
            intervalId = setInterval(slide, 5000);
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
    
        $(document).on('visibilitychange', function() {
            if (document.hidden) {
                stopSlideShow();
            } else if (isSpecialPage()) {
                startSlideShow();
            }
        });
    });
}



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
                'imgs/crestfactor-4.jpg',
                'imgs/crestfactor-6.jpg',
                'imgs/crestfactor-8.jpg'
            ],
            name: 'Sweat',
            size: 'S  M  L  XL',
            price: 'CAD: 60$',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vitae ea, facere commodi nam magni eos esse ullam dignissimos molestias! Repellat architecto necessitatibus voluptatibus libero facilis quos consequuntur minus maiores.'
        },

        {
            images: [
                'imgs/crestfactor-5.jpg',
                'imgs/crestfactor-9.jpg',
                'imgs/crestfactor-13.jpg'
            ],
            name: 'Sweat',
            size: 'S  M  L  XL',
            price: 'CAD: 60$',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vitae ea, facere commodi nam magni eos esse ullam dignissimos molestias! Repellat architecto necessitatibus voluptatibus libero facilis quos consequuntur minus maiores.'
        },

        {
            images: [
                'imgs/crestfactor-13.jpg',
                'imgs/crestfactor-32.jpg',
                'imgs/crestfactor-26.jpg'
            ],
            name: 'Hoodie',
            size: 'S  M  L  XL',
            price: 'CAD: 66$',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis vitae ea, facere commodi nam magni eos esse ullam dignissimos molestias! Repellat architecto necessitatibus voluptatibus libero facilis quos consequuntur minus maiores.'
        },
    ];


    let product;

    function openModal(index) {
        document.getElementById('myModal').style.display = 'block';
        currentSlide = 0; 
        product = products[index];
        updateModalContent();
    }

    function closeModal() {
        document.getElementById('myModal').style.display = 'none';
    }

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('myModal'); // modal変数をここで定義
        if (event.target === modal) {
            closeModal();
        }
    });

    function prevSlide() {
        currentSlide = (currentSlide - 1 + product.images.length) % product.images.length;
        updateCarousel();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % product.images.length;
        updateCarousel();
    }

    function updateCarousel() {
        carousel.innerHTML = `<img src="${product.images[currentSlide]}" alt="Product Image">`;
    }

    function updateModalContent() {
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


