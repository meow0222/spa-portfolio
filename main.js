$(document).ready(function () {
    const login_icon = document.getElementsByClassName('login-icon');
    const user_name = document.getElementById('userName');
    if (window.sessionStorage.getItem('currentUser') != null) {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
        console.log(login_icon);
        console.log(login_icon.length);
        for (let i = 0; i < login_icon.length; i++) {
            login_icon[i].style.display = 'none';
        }
        user_name.innerHTML = `${window.sessionStorage.getItem('currentUser')}`;
    }
    $('#login-btn').click(function (e) {
        e.preventDefault();

        const username = $("input[type='text']").val();
        const password = $("input[type='password']").val()
        const open = document.getElementById('loginIcon');
        const modal = document.getElementById('modal');
        const mask = document.getElementById('mask');
        // sessionStorage.setItem('username', username);
        // const storedUsername = sessionStorage.getItem('username');
        // if (storedUsername) {
        //     const userNameHeader = document.getElementById('userName');
        //     userNameHeader.innerText = "Username: " + storedUsername;
        // }
        

        console.log(window.sessionStorage.getItem('currentUser'));
        if (window.localStorage.getItem('currentUser')) {
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
                    let result = response.message;
                    currentUser = response.currentUser;
                    // const userName = document.getElementById('userName');
                    // userName.innerText = username;
                    if (result === "Login Successful") {
                        // Redirect to home.html
                        console.log("if condition for Login Successful triggered");
                        // window.location.href = "./index.html";
                        // const usernameFromHeader = xhr.getResponseHeader('username');
                        // const userNameHeader = $('#userName');
                        // userNameHeader.text("Username: " + usernameFromHeader);
                        modal.classList.add('hidden');
                        mask.classList.add('hidden');
                        console.log(login_icon);
                        console.log(login_icon.length);
                        for (let i = 0; i < login_icon.length; i++) {
                            login_icon[i].style.display = 'none';
                        }
                        window.sessionStorage.setItem('currentUser',currentUser);
                        user_name.innerHTML = `${window.sessionStorage.getItem('currentUser')}`;
                        
                    } else {
                        // Display "Login Failed"
                        alert(response);
                    }
                },
                error: function (error) {
                    console.error("Error:", error);
                }
            });
        }

    });

    $('#logoutIcon').click(function (e){
        e.preventDefault();
        console.log('clicked');
        for (let i = 0; i < login_icon.length; i++) {
            login_icon[i].style.display = 'block';
        }
        user_name.innerHTML = '';
        window.sessionStorage.clear();
    })

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








