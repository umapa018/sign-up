// Select the password input and the eye icon
const passwordInput = document.querySelector('input[name="password"]');
const eyeIcon = document.querySelector('.bi-eye');
// Show password while holding the eye icon
eyeIcon.addEventListener('mousedown', () => {
    passwordInput.type = 'text'; // Show password
});

// Revert to hidden password when releasing the hold
eyeIcon.addEventListener('mouseup', () => {
    passwordInput.type = 'password'; // Hide password
});

// Handle the case when the user moves the cursor away from the icon while holding
eyeIcon.addEventListener('mouseleave', () => {
    passwordInput.type = 'password'; // Hide password
});

//--------

// Select the form and its input fields
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

// Add event listener for the form submission
form.addEventListener('signup', (e) => {
    let allFilled = true; // Flag to track if all fields are filled

    // Remove any existing error messages
    document.querySelectorAll('.error-message').forEach((error) => error.remove());

    // Check each input field
    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            allFilled = false; // Mark as not filled

            // Highlight the input field
            input.style.border = '2px solid red';

            // Create an error message
            const errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'This field is required';
            errorMessage.style.color='red';
            errorMessage.style.fontSize='0.8rem';

            // Add the error message after the input field
            if (!input.nextElementSibling?.classList.contains('error-message')) {
                input.parentNode.insertBefore(errorMessage, input.nextSibling);
            }
        } else {
            // Reset border for filled fields
            input.style.border = '';
        }
    });

    if (!allFilled) {
        e.preventDefault(); // Prevent form submission
    }
});
