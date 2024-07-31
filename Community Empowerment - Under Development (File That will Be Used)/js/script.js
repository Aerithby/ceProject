function togglePassword() {
    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePasswordButton.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        togglePasswordButton.textContent = 'Show';
    }
}
