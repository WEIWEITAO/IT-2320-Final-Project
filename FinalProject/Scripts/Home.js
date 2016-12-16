var Home = {}

Home.Button1Click = function () {
    var email = $("#username").val();
    var password = $("#password").val();
    if (email == '' || password == '') {
        $('#username,#password').css("border", "2px solid red");
        $("#loginMessage").append("<p>Table can't be empty!</p>");
    } else {
        $.get("login.json", { Username: username, Password: password },
        function (data) {
            if (data == 'Invalid') {
                $('input[type="text"]').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
                alert(data);
            } else if (data == 'Error') {
                $('input[type="password"]').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
                alert(data);
            } else if (data == 'Success') {
                $("form")[0].reset();
                $('input[type="text"],input[type="password"]').css({ "border": "2px solid #00F5FF", "box-shadow": "0 0 5px #00F5FF" });
                alert(data);
            } else {
                alert(data);
            }
        });
    }
};

Home.Button2Click = function () {
    var newUserName = $("#newusername").val();
    var newPassword = $("#newpassword").val();
    var emailAdded = $("#emailAdd").val();
    var emailCon = $("#emailCon").val();

    if (newUserName.length < 6) {
        $("#createAccountMessage").append("<p>Must be at least 6 characters!</p>");
        $('#newusername').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
    }

    if (newPassword.length < 6) {
        $("#createAccountMessage").append("<p>Must be at least 6 characters!</p>");
        $('#newpassword').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
    }

    if (emailAdded != emailCon) {
        $("#createAccountMessage").append("<p>Email addresses do not match!</p>");
        $('#emailAdd, #emailCon').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
    }

    $.get("CreateAccount.json", { Username: username, Password: password, EmailAdd: emailAdded, EmailCon: emailCon },
        function (data) {
            if (data == 'Error') {
                $('input[type="text"]').css({ "border": "2px solid red", "box-shadow": "0 0 3px red" });
                alert(data);
            } else if (data == 'Success') {
                $("form")[0].reset();
                $('input[type="text"],input[type="password"]').css({ "border": "2px solid #00F5FF", "box-shadow": "0 0 5px #00F5FF" });
                alert(data);
            } else {
                alert(data);
            }
        });
}

$(document).ready(function () {
    $("#login").click(Home.Button1Click);
    $("#createAccount").click(Home.Button2Click);
});