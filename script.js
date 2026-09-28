// Front page interaction logic
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmail = document.getElementById('newsletterEmail');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailValue = newsletterEmail.value;

            if (emailValue) {
                alert(`✨ Thank you for subscribing to kookieGlow, ${emailValue}!`);
                newsletterEmail.value = '';
            }
        });
    }
});