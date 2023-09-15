// Reference to the login form
const staffLoginForm = document.getElementById("staffLoginForm");

// Event listener for the login form submission
staffLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the entered username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform simple username and password validation
    if (validateLogin(username, password)) {
        // Redirect to the validation page or perform staff-related actions
        // For demonstration purposes, we'll just show a success message
        alert("Login successful! Redirecting...");
        // You can redirect using window.location.href or other methods
    } else {
        // Display an error message for invalid login
        alert("Invalid username or password. Please try again.");
    }
});

// Function to validate the username and password (replace with your authentication logic)
function validateLogin(username, password) {
    // Replace this logic with your actual staff authentication logic
    // For demonstration purposes, we'll use a simple hardcoded check
    const validUsername = "staff";
    const validPassword = "password123";

    return username === validUsername && password === validPassword;
}
