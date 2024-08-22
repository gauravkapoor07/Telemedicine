function toggleAppointmentForm() {
    var form = document.getElementById('appointmentForm');
    var isVisible = form.style.display === 'block';
    
    // Toggle the appointment form visibility
    form.style.display = isVisible ? 'none' : 'block';
    
    if (!isVisible) {
        // Populate the upcoming appointments if they haven't been added yet
        populateAppointments();
    }
}

function populateAppointments() {
    const upcomingAppointments = [
        { name: 'Dr. Sharma', date: '2024-08-15', time: '10:00 AM' },
        { name: 'Dr. Kapoor', date: '2024-08-20', time: '02:00 PM' },
    ];

    const upcomingList = document.getElementById('upcomingAppointments');
    
    upcomingAppointments.forEach(appointment => {
        const li = document.createElement('li');
        li.textContent = `${appointment.date} at ${appointment.time} with ${appointment.name}`;
        upcomingList.appendChild(li);
    });
}

// Initial call to populate appointments on page load
document.addEventListener('DOMContentLoaded', function () {
    populateAppointments();

    // Existing appointment form submission handling
    document.getElementById('appointmentForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Form validation logic
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const doctor = document.getElementById('doctor').value;
        const reason = document.getElementById('reason').value;

        if (name && email && date && time && doctor && reason) {
            alert(`Appointment successfully booked with ${doctor} at ${time}!`);
            
            // Show the payment section after booking an appointment
            document.getElementById('payment').style.display = 'block';
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });

    // Existing payment form submission handling
    document.getElementById('paymentForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Payment form validation logic
        const cardName = document.getElementById('cardName').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        if (cardName && cardNumber && expiryDate && cvv) {
            alert('Payment successful!');
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
function toggleAppointmentForm() {
    var form = document.getElementById("appointmentForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
}

document.getElementById("appointmentBookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    showPaymentModal(); // Show the payment modal
});

function showPaymentModal() {
    var modal = document.getElementById("paymentModal");
    modal.style.display = "block";
}

function closePaymentModal() {
    var modal = document.getElementById("paymentModal");
    modal.style.display = "none";
}









// Show the payment modal
function showPaymentModal() {
    var modal = document.getElementById('paymentModal');
    modal.style.display = 'block';
}

// Close the payment modal
function closePaymentModal() {
    var modal = document.getElementById('paymentModal');
    modal.style.display = 'none';
}

// Show the thank you popup
function showThankYouPopup() {
    var popup = document.getElementById('thankYouPopup');
    popup.style.display = 'block';
}

// Close the thank you popup
function closeThankYouPopup() {
    var popup = document.getElementById('thankYouPopup');
    popup.style.display = 'none';
}

// Handle form submission for appointment booking
document.getElementById('appointmentBookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    showPaymentModal(); // Show the payment modal
});

// Handle form submission for payment
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    showThankYouPopup(); // Show the thank you popup
});

// Pharmacy Section JavaScript

// Handle Prescription Upload Form Submission
document.getElementById('prescriptionUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const prescriptionFile = document.getElementById('prescriptionFile').files[0];
    const selectedPharmacy = document.getElementById('pharmacy').value;

    if (prescriptionFile && selectedPharmacy) {
        // Simulate uploading the prescription
        const uploadMessage = `Prescription for ${prescriptionFile.name} sent to ${selectedPharmacy}.`;
        addDeliveryUpdate(uploadMessage);
        
        // Reset the form
        document.getElementById('prescriptionUploadForm').reset();
    } else {
        alert("Please upload a prescription and select a pharmacy.");
    }
});

// Add a delivery update message
function addDeliveryUpdate(message) {
    const deliveryUpdates = document.getElementById('deliveryUpdates');
    const newUpdate = document.createElement('li');
    newUpdate.textContent = message;
    deliveryUpdates.appendChild(newUpdate);
}


// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Handle Prescription Upload Form Submission
    document.getElementById('prescriptionUploadForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const prescriptionFile = document.getElementById('prescriptionFile').files[0];
        const selectedPharmacy = document.getElementById('pharmacy').value;

        if (prescriptionFile && selectedPharmacy) {
            // Simulate uploading the prescription
            const uploadMessage = `Prescription for ${prescriptionFile.name} sent to ${selectedPharmacy}.`;
            addDeliveryUpdate(uploadMessage);

            // Reset the form
            document.getElementById('prescriptionUploadForm').reset();
        } else {
            alert("Please upload a prescription and select a pharmacy.");
        }
    });

    // Handle Lab Test Booking Form Submission
    document.getElementById('labTestBookingForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const testName = document.getElementById('testName').value;
        const testDate = document.getElementById('testDate').value;
        const testTime = document.getElementById('testTime').value;
        const selectedLab = document.getElementById('lab').value;

        if (testName && testDate && testTime && selectedLab) {
            // Simulate booking the lab test
            const bookingMessage = `Lab Test "${testName}" booked at ${selectedLab} on ${testDate} at ${testTime}.`;
            addTestBookingUpdate(bookingMessage);

            // Reset the form
            document.getElementById('labTestBookingForm').reset();
        } else {
            alert("Please fill in all the details for the lab test.");
        }
    });

    // Function to add a delivery update message
    function addDeliveryUpdate(message) {
        const deliveryUpdates = document.getElementById('deliveryUpdates');
        const newUpdate = document.createElement('li');
        newUpdate.textContent = message;
        deliveryUpdates.appendChild(newUpdate);
    }

    // Function to add a test booking update message
    function addTestBookingUpdate(message) {
        const testBookingUpdates = document.getElementById('testBookingUpdates');
        const newUpdate = document.createElement('li');
        newUpdate.textContent = message;
        testBookingUpdates.appendChild(newUpdate);
    }
});

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Function to show symptom information
    function showSymptomInfo(symptom) {
        // Hide all symptom info boxes
        const infoBoxes = document.querySelectorAll('.symptom-info');
        infoBoxes.forEach(box => box.classList.remove('active'));

        // Show the selected symptom info box
        const infoBox = document.getElementById(`${symptom}-info`);
        if (infoBox) {
            infoBox.classList.add('active');
        }
    }

    // Event listeners for map control buttons
    document.querySelectorAll('.map-controls button').forEach(button => {
        button.addEventListener('click', function() {
            const symptom = this.textContent.toLowerCase();
            showSymptomInfo(symptom);
        });
    });
});

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the emergency button click
    document.getElementById('callEmergencyBtn').addEventListener('click', function() {
        if (confirm('Are you sure you want to call emergency services?')) {
            // This would normally trigger a call, but for the web, we'll just log a message
            alert('Calling Emergency Services...');
            // Example of triggering a phone call via link (this would work on mobile devices):
            // window.location.href = 'tel:911';  // Replace with the correct emergency number
        }
    });
});
// Example: Show detailed info on click (can be expanded further if needed)
document.addEventListener('DOMContentLoaded', function() {
    const securityFeatures = document.querySelectorAll('.security-features li');
    
    securityFeatures.forEach(feature => {
        feature.addEventListener('click', function() {
            alert(`More information about ${feature.textContent.split(':')[0]}`);
            // Here, you can replace the alert with a modal popup or detailed view
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const referralPopUp = document.getElementById('referralPopUp');
    const referralPopupContent = document.getElementById('referralPopupContent');
    const referralLink = document.getElementById('referralLink');
    const copyReferralLink = document.getElementById('copyReferralLink');

    // Toggle Referral Pop-Up
    referralPopUp.addEventListener('click', function() {
        referralPopupContent.style.display = referralPopupContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close Referral Pop-Up when clicking outside
    document.addEventListener('click', function(event) {
        if (!referralPopupContent.contains(event.target) && !referralPopUp.contains(event.target)) {
            referralPopupContent.style.display = 'none';
        }
    });

    // Copy referral link to clipboard
    copyReferralLink.addEventListener('click', function() {
        referralLink.select();
        document.execCommand('copy');
        alert('Referral link copied to clipboard!');
    });

    // Share via social media
    document.getElementById('shareFacebook').addEventListener('click', function() {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink.value)}`, 'facebook-share-dialog', 'width=800,height=600');
    });

    document.getElementById('shareTwitter').addEventListener('click', function() {
        window.open(`https://twitter.com/intent/tweet?text=Check%20out%20TeleMed!%20Use%20my%20referral%20link:%20${encodeURIComponent(referralLink.value)}`, 'twitter-share-dialog', 'width=800,height=600');
    });

    document.getElementById('shareLinkedIn').addEventListener('click', function() {
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(referralLink.value)}&title=Join%20TeleMed`, 'linkedin-share-dialog', 'width=800,height=600');
    });

    document.getElementById('shareEmail').addEventListener('click', function() {
        window.location.href = `mailto:?subject=Join%20TeleMed&body=Check%20out%20TeleMed!%20Use%20my%20referral%20link:%20${encodeURIComponent(referralLink.value)}`;
    });
});



let currentReview = 0;
const reviews = document.querySelectorAll('.review');

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.remove('active');
        if (i === index) {
            review.classList.add('active');
        }
    });
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}

function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
}

// Initialize the first review as active
showReview(currentReview);




