document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var successMessage = document.getElementById('success-message');
    successMessage.textContent = 'Message sent successfully!';
    successMessage.style.display = 'block';
    successMessage.style.animation = 'slideIn 1s forwards';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
