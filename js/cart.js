// var id = null;
// var pos = 0;

// function toggleCart() {
//     if($("#cartCheck").prop('checked') == true) {
//         clearInterval(id);
//         id = setInterval(frame, 0.1);
//         function frame() {
//             if (pos == 200) {
//                 clearInterval(id);
//             } else {
//                 pos++;
//             }
//         }
//     } else {
//         clearInterval(id);
//         id = setInterval(frame, 0.1);
//         function frame() {
//             if (pos == 0) {
//                 clearInterval(id);
//             } else {
//                 pos--;
//             }
//         }
//     }
// }

function addToCart(id) {
    const qtty = document.getElementById("quantity").value;
    const username = window.sessionStorage.getItem('currentUser');
    $.ajax({
        url: "http://localhost:3000/cart",
        type: 'PUT',
        headers: {
            "task": "addtocart"
        },
        data: {
            id: id,
            quantity: qtty,
            username: username
        },
        success: function (response) {
            console.log("Response:", response);
        },
        error: function (error) {
            console.error("Error:", error);
        }    
    });
}

function rmFromCart(id) {
    const username = window.sessionStorage.getItem('currentUser');
    $.ajax({
        url: "http://localhost:3000/cart",
        type: 'PUT',
        headers: {
            "task": "rmfromcart"
        },
        data: {
            id: id,
            username: username
        },
        success: function (response) {
            console.log("Response:", response);
        },
        error: function (error) {
            console.error("Error:", error);
        }    
    });
}

$('#shopping-cart').click(() => {
    const username = window.sessionStorage.getItem('currentUser');
    $.ajax({
        url: `http://localhost:3000/cart?username=${username}`,
        type: 'GET',
        headers: {
            "task": "loadcart"
        },
        dataType: 'json',
        success: function (response) {
            console.log("Response:", response);
            for(let i = 0; i < response.length; i++){
                $('#cartList').append(response[i]);
            }
        },
        error: function (error) {
            console.error("Error:", error);
        }    
    });
});