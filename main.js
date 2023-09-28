$(document).ready(function () {

    $('#login-btn').click(function (e) {
        e.preventDefault();

        const username = $("input[type='text']").val();
        const password = $("input[type='password']").val()

        // sessionStorage.setItem('username', username);
        // const storedUsername = sessionStorage.getItem('username');
        // if (storedUsername) {
        //     const userNameHeader = document.getElementById('userName');
        //     userNameHeader.innerText = "Username: " + storedUsername;
        // }
        


        $.ajax({
            url: "http://localhost:3000/login",
            type: 'GET',
            headers: {
                "task": "login" // custom header
            },
            data: {
                username: username,
                password: password
            },
            success: function (response) {
                // if a success response is received, print it here:
                console.log("Response:", response);
                // const userName = document.getElementById('userName');
                // userName.innerText = username;
                if (response === "Login Successful") {
                    // Redirect to home.html
                    console.log("if condition for Login Successful triggered");
                    // window.location.href = "./index.html";
                    // const usernameFromHeader = xhr.getResponseHeader('username');
                    // const userNameHeader = $('#userName');
                    // userNameHeader.text("Username: " + usernameFromHeader);
                    
                    

                } else {
                    // Display "Login Failed"
                    alert(response);
                }
            },
            error: function (error) {
                console.error("Error:", error);
            }
        });

    });

    $('#signup-btn').click(function (e) {
        e.preventDefault();

        const username = $("input[type='text']").val();
        const password = $("input[type='password']").val();

        console.log("Username:", username);
        console.log("Password:", password);

        $.ajax({
            url: "http://localhost:3000/login",
            type: 'POST',
            headers: {
                "task": "signup" // custom header
            },
            data: {
                username: username,
                password: password
            },
            success: function (response) {
                // if a success response is received, print it here:
                console.log("Response:", response);
            },
            error: function (error) {
                console.error("Error:", error);
            }
        });
    });

    $('#update-btn').click((e) => {
        e.preventDefault();

        const username = $("input[type='text']").val();
        const newPassword = $("#updatePassword").val();

        console.log("Username:", username);
        console.log("New Password:", newPassword);

        $.ajax({
            url: "http://localhost:3000/login",
            method: 'PUT',
            headers: {
                "task": "updateUser" // custom header
            },
            data: {
                username: username,
                newPassword: newPassword
            },
            success: function(response) {
                // if a success response is received, print it here:
                console.log("Response:", response); 
            },
            error: function(error) {
                alert("Error:", error);
            }
        });

        // axios({
        //     url: "http://localhost:3000/login",
        //     method: 'PUT',
        //     headers: {
        //         "task": "updateUser" // custom header
        //     },
        //     data: {
        //         username: username,
        //         newPassword: newPassword
        //     },
        //     success: function(response) {
        //         // if a success response is received, print it here:
        //         console.log("Response:", response); 
        //     },
        //     error: function(error) {
        //         alert("Error:", error);
        //     }
        // });
    });

});








