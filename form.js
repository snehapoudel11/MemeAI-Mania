document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    // Add focus effects to form inputs
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('.neon-underline').style.backgroundColor = 'var(--neon-primary)';
            this.parentElement.querySelector('.neon-underline').style.boxShadow = '0 0 10px var(--neon-primary)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('.neon-underline').style.backgroundColor = 'rgba(0, 243, 255, 0.3)';
            this.parentElement.querySelector('.neon-underline').style.boxShadow = 'none';
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simple validation
        if(!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields!');
            return;
        }
        
        // In a real app, you would send this to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert(`Thanks for your message, ${formData.name}! We'll get back to you soon.`);
        contactForm.reset();
        
        // Example AJAX request (commented out):
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        });
        */
    });
});