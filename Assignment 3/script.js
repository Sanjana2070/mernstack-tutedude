$(document).ready(function () {
    $('#togglePassword').click(function () {
        const passwordField = $('#password');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).text(type === 'password' ? 'Show' : 'Hide');
    });

    $('#registrationForm').submit(function (e) {
        e.preventDefault();
        $('#messageBox').hide().removeClass('error success');

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const password = $('#password').val().trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!name || !email || !phone || !password) {
            showMessage("All fields are required.", "error");
        } else if (!emailRegex.test(email)) {
            showMessage("Please enter a valid email address.", "error");
        } else if (!phoneRegex.test(phone)) {
            showMessage("Phone number must be exactly 10 digits.", "error");
        } else if (!passwordRegex.test(password)) {
            showMessage("Password must be at least 6 characters and include uppercase, lowercase, and a number.", "error");
        } else {
            showMessage("Form submitted successfully!", "success");
            this.reset();
            $('#togglePassword').text('Show');
        }
    });

    function showMessage(message, type) {
        $('#messageBox')
            .addClass(type)
            .text(message)
            .fadeIn();
    }
});
