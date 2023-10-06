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

function addToCart(id) {
    const qtty = document.getElementById("quantity").value;
    $.ajax({
        url: "http://localhost:3000/cart",
        type: 'POST',
        headers: {
            "task": "addtocart" // custom header
        },
        data: {
            id: id,
            quantity: qtty
        },
        success: function (response) {
            // if a success response is received, print it here:
            console.log("Response:", response);
        },
        error: function (error) {
            console.error("Error:", error);
        }    
    });
}