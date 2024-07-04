function faqAnswer(element, text) {
    element.style.transition = 'opacity 0.5s ease-in-out'; // Add transition effect for opacity
    element.textContent = text; // Set the text content of the element
    element.classList.add('smooth'); // Add 'smooth' class for styling
}

function hide(element) {
    element.classList.remove('smooth'); // Remove 'smooth' class
    setTimeout(() => {
        element.innerHTML = ''; // Clear the inner HTML after 500ms
    }, 500);
}

function iconChanging(element, icon) {
    icon.style.transition = 'transform 0.5s ease-in-out'; // Add transition effect for transform
    icon.style.outline = 'none'
    icon.classList.add('smooth'); // Add 'smooth' class for styling

    if (element.classList.contains('ans-text')) { // Check if element has 'ans-text' class
            icon.style.transform = "scale(1.2) rotate(135deg)"; // Apply transform when answer is visible
    } else {
        icon.style.transform = "scale(1) rotate(270deg)"; // Reset transform when answer is hidden
        icon.classList.remove('smooth')
    }
}

function executer(button, element, text) {
    button.addEventListener('click', () => { // Add click event listener to the button
        element.classList.toggle('ans-text'); // Toggle 'ans-text' class on the element
        if (element.classList.contains('ans-text')) { // Check if element has 'ans-text' class

            faqAnswer(element, text); // Show the answer
            iconChanging(element, button); // Change the icon
            text.style.transition = 'opacity 0.5s ease-in-out'


        } else {
            iconChanging(element, button); // Change the icon
            hide(element); // Hide the answer
        }
    });
}

// Initialize FAQ sections
const faqs = [
    {
        element: document.querySelector('.faq-answer-1'),
        icon: document.querySelector('.plus-icon-1'),
        text: "I offer front-end web development, including HTML, CSS, JavaScript, and responsive design, using Tailwind CSS for a mobile-first approach."
    },
    {
        element: document.querySelector('.faq-answer-2'),
        icon: document.querySelector('.plus-icon-2'),
        text: "You can contact me through the form above. Simply fill out the required fields with your name, email, and message, and I will get back to you as soon as possible. If you prefer, you can also reach out to me via my social media profiles or email directly. I look forward to discussing how I can help with your project!"
    },
    {
        element: document.querySelector('.faq-answer-3'),
        icon: document.querySelector('.plus-icon-3'),
        text: "The turnaround time varies depending on the project's complexity and scope. Generally, small projects can be completed within a week, while larger projects may take several weeks."
    },
    {
        element: document.querySelector('.faq-answer-4'),
        icon: document.querySelector('.plus-icon-4'),
        text: "Yes, I offer ongoing maintenance and support services to ensure your website remains up-to-date and functions smoothly."
    },
    {
        element: document.querySelector('.faq-answer-5'),
        icon: document.querySelector('.plus-icon-5'),
        text: "To get started, I'll need detailed information about your project, including your goals, target audience, design preferences, and any specific functionality you require."
    },
    {
        element: document.querySelector('.faq-answer-6'),
        icon: document.querySelector('.plus-icon-6'),
        text: "Yes, I can help with basic SEO optimization to improve your website's visibility on search engines. For more advanced SEO services, I can recommend specialized experts."
    },
    {
        element: document.querySelector('.faq-answer-7'),
        icon: document.querySelector('.plus-icon-7'),
        text: "Payment terms can vary based on the project's scope. Typically, I require a deposit upfront, with the balance due upon project completion. We can discuss specific terms during our initial consultation."
    },
    {
        element: document.querySelector('.faq-answer-8'),
        icon: document.querySelector('.plus-icon-8'),
        text: "Yes, I can help redesign your existing website to improve its look, feel, and functionality, ensuring it meets modern web standards and your business needs."
    },
    {
        element: document.querySelector('.faq-answer-9'),
        icon: document.querySelector('.plus-icon-9'),
        text: "I primarily use HTML, CSS, Tailwind CSS, JavaScript, and various JavaScript frameworks. I stay updated with the latest technologies to ensure your website is built with the best tools available."
    },
    {
        element: document.querySelector('.faq-answer-10'),
        icon: document.querySelector('.plus-icon-10'),
        text: "Yes, I can integrate various third-party services and APIs into your website, such as payment gateways, social media platforms, and email marketing tools."
    }
];

faqs.forEach(faq => {
    if (faq.element && faq.icon) {
        executer(faq.icon, faq.element, faq.text);
    }
});