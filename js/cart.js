var id = null;
var pos = 0;

function toggleCart() {
    if($("#cartCheck").prop('checked') == true) {
        clearInterval(id);
        id = setInterval(frame, 0.1);
        function frame() {
            if (pos == 200) {
                clearInterval(id);
            } else {
                pos++;
                $('.cart').css('height', pos+'px');
            }
        }
    } else {
        clearInterval(id);
        id = setInterval(frame, 0.1);
        function frame() {
            if (pos == 0) {
                clearInterval(id);
            } else {
                pos--;
                $('.cart').css('height', pos+'px');
            }
        }
    }
}

const username = 'user1';

function addToCart(id) {
    const qtty = document.getElementById("quantity").value;
    console.log('Username: ' + username + '\nID: ' + id + '\nQuantity: ' + qtty);
    $.ajax({
        url: "http://localhost:3000/cart",
        type: 'PUT',
        headers: {
            "task": "addtocart" // custom header
        },
        data: {
            username: username,
            id: id,
            quantity: qtty
        },
        success: function (response) {
            console.log("Response:", response);
        },
        error: function (error) {
            console.error("Error:", error);
        }    
    });
    //window.sessionStorage.getItem('currentUser')
}