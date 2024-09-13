// Razorpay payment integration script
var options = {
    "key": "YOUR_RAZORPAY_KEY_ID", // Enter the Key ID generated from the Razorpay Dashboard
    "amount": "150000", // Amount is in paise, so 150000 = ₹1500
    "currency": "INR",
    "name": "Job Application Fee",
    "description": "Payment for Job Application",
    "image": "https://your-logo-url.com/logo.png", // Replace with your company logo URL
    "handler": function (response) {
        alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
        // You can handle the success here (e.g., redirect to a thank you page)
    },
    "prefill": {
        "name": "Applicant Name", // Replace with the applicant's actual name
        "email": "applicant@example.com", // Replace with the applicant's actual email
        "contact": "9999999999" // Replace with the applicant's actual contact number
    },
    "theme": {
        "color": "#3399cc"
    }
};

// Pay button event listener
document.getElementById('rzp-button1').onclick = function (e) {
    var rzp1 = new Razorpay(options);
    rzp1.open();
    e.preventDefault();
}
