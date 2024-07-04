// Function to scroll to an element smoothly
function scroll(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

// Function to check if the URL has a fragment and scroll to the corresponding section
function scrollToSectionIfNeeded() {
    const fragment = window.location.hash;
    if (fragment) {
        const target = document.querySelector(fragment);
        if (target) {
            scroll(target);
        }
    }
}

// Call scrollToSectionIfNeeded when the page finishes loading
window.addEventListener('DOMContentLoaded', scrollToSectionIfNeeded);
