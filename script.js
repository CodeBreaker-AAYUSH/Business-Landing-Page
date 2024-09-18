document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can implement your form submission logic
    // For demonstration, we'll just show an alert
    alert(`Thank you for your message, ${name}! We will get back to you shortly.`);

    // Clear the form
    this.reset();
});
