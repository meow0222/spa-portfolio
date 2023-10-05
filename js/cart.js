var id = null;

function toggleCart() {
    if($("#cartCheck").checked == false) {
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                $('.cart').css('height', pos+'px');
            }
        }
    } else {
        alert('bah pia');
    }
}