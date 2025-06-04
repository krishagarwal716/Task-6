$(document).ready(function () {
    $("#submit").click(function (e) {
        e.preventDefault();

        var email = $("#email").val();
        var phone = $("#phoneno").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        var missing = "";
        var error = "";
        var successMessage = "Form submitted successfully!";

        if (email == "") missing += "<p>Email is required</p>";
        if (phone == "") missing += "<p>Phone Number is required</p>";
        if (password == "") missing += "<p>Password is required</p>";

        if (email != "" && !validateEmail(email)) error += "<p>Invalid email address</p>";
        if (phone != "" && (!/^\d{10}$/.test(phone))) error += "<p>Enter a valid 10-digit phone number</p>";
        if (password != "" && password != confirmPassword) error += "<p>Password and Confirm Password do not match</p>";
        if (password != "" && !validatePassword(password)) error += "<p>Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number</p>";

        if (error != "" || missing != "") {
            $("#error").html(error + missing);
            $("#success").html(""); // Clear success message on error
        } else {
            $("#error").html(""); // Clear previous errors
            $("#success").html(successMessage); // Display success message
        }
    });

    $("#togglePassword").click(function () {
        var passwordField = $("#password");
        var type = passwordField.attr("type") === "password" ? "text" : "password";
        passwordField.attr("type", type);
        $(this).text(type === "password" ? "Show" : "Hide");
    });

    function validateEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(password);
    }
});