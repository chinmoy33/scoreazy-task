
// Mobile Menu Toggle (existing)
const mobileMenuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// --- Booking Form and Modal Logic ---
const bookingForm = document.getElementById('bookingForm');
const modal = document.getElementById('bookingConfirmationModal');
const closeButton = document.querySelector('.close-button');

// Function to show the modal
function showModal() {
    modal.classList.add('show');
}

// Function to hide the modal
function hideModal() {
    modal.classList.remove('show');
}

// Event listener for form submission
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission (page reload)

    // Here you would typically send the form data to a server
    // For this example, we'll just simulate success.
    console.log('Form submitted!'); // For debugging

    // Show the success modal
    showModal();

    // Optionally, clear the form fields after successful submission
    bookingForm.reset();
});

// Event listener for close button
closeButton.addEventListener('click', hideModal);

// Event listener to close modal if user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        hideModal();
    }
});
