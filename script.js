// JavaScript to handle form submission and button enabling
document.getElementById('upi-id').addEventListener('input', function () {
    const upiId = this.value.trim();
    const payBtn = document.getElementById('pay-btn');
    
    // Enable the payment button if UPI ID is entered
    payBtn.disabled = !upiId;
});

// Handle form submission
document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const upiId = document.getElementById('upi-id').value.trim();
    
    if (upiId) {
        alert(`Payment of ₹1500 will be processed for UPI ID: ${upiId}`);
        // Replace the alert with actual payment integration logic
    } else {
        alert('Please enter a valid UPI ID.');
    }
});
