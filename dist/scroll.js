// Function to scroll to an element smoothly
function scroll(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

// Function to add click event listener to a link for smooth scrolling
function funcToScroll(link, target) {
    // Check if both link and target elements exist
    if (link && target) {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default link behavior
            scroll(target); // Scroll to the target element
        });
    } else {
        console.warn(`Provided Link ${link} and Target ${target} Not Found`); // Log a warning if elements are not found
    }
}

// Home page Element selections for sections
const featureSec = document.querySelector('.feature-sec'); // Feature section
const pricingSec = document.querySelector('.pricing-sec'); // Pricing section
const footerSec = document.querySelector('.footer-sec'); // Footer section

// About Page Element selections for sections
const skillsSec = document.querySelector('.skill-sec'); // Skills section
const profileHighlightSec = document.querySelector('.profile-highlights'); // Profile highlights section
const whatWeDo = document.querySelector('.what-we-do'); // What We Do section
const footerSecAbout = document.querySelector('.footer-sec-about-us'); // Footer section

// Contact Page Element selections for sections
const contactMeSec = document.querySelector('.contact-Me'); // Contact Me section
const faqSec = document.querySelector('.faq-sec'); // FAQ section
const locationSec = document.querySelector('.location-sec'); // Location section
const footerSecContact = document.querySelector('.footer-sec-contact-page'); // Footer section

// T&C Page Element selections for sections
const termsAndConditionSec = document.querySelector('.tc-sec'); // Terms and Conditions section
const termsAndConditionSecContact = document.querySelector('.tc-contact-info'); // Terms and Conditions contact section
const privacyAndPolicySec = document.querySelector('.pp-sec'); // Privacy Policy section
const privacyAndPolicySecContact = document.querySelector('.pp-contact-info'); // Privacy Policy contact section

// Array of link-target pairs for smooth scrolling
const links = [
    // Home page links
    { link: document.querySelector('.feature-link'), target: featureSec }, // Feature link (desktop)
    { link: document.querySelector('.feature-mobile'), target: featureSec }, // Feature link (mobile)
    { link: document.querySelector('.pricing-link'), target: pricingSec }, // Pricing link (desktop)
    { link: document.querySelector('.pricing-mobile'), target: pricingSec }, // Pricing link (mobile)
    { link: document.querySelector('.about-link'), target: footerSec }, // About link (desktop)
    { link: document.querySelector('.about-mobile'), target: footerSec }, // About link (mobile)

    // About page links
    { link: document.querySelector('.skills-link'), target: skillsSec }, // Skills link (desktop)
    { link: document.querySelector('.skills-mobile'), target: skillsSec }, // Skills link (mobile)
    { link: document.querySelector('.profile-link'), target: profileHighlightSec }, // Profile link (desktop)
    { link: document.querySelector('.profile-mobile'), target: profileHighlightSec }, // Profile link (mobile)
    { link: document.querySelector('.what-we-do-link'), target: whatWeDo }, // What We Do link (desktop)
    { link: document.querySelector('.what-we-do-mobile'), target: whatWeDo }, // What We Do link (mobile)
    { link: document.querySelector('.what-we-do-footer-link'), target: whatWeDo }, // What We Do link (footer)
    { link: document.querySelector('.about-link'), target: footerSecAbout }, // About link (desktop)
    { link: document.querySelector('.about-mobile'), target: footerSecAbout }, // About link (mobile)

    // Contact page links
    { link: document.querySelector('.contact-me-link'), target: contactMeSec }, // Contact Me link (desktop)
    { link: document.querySelector('.faqs-link'), target: faqSec }, // FAQ link (desktop)
    { link: document.querySelector('.location-link'), target: locationSec }, // Location link (desktop)
    { link: document.querySelector('.about-link'), target: footerSecContact }, // About link (desktop)
    { link: document.querySelector('.contact-me-link-mobile'), target: contactMeSec }, // Contact Me link (mobile)
    { link: document.querySelector('.faqs-link-mobile'), target: faqSec }, // FAQ link (mobile)
    { link: document.querySelector('.location-link-mobile'), target: locationSec }, // Location link (mobile)
    { link: document.querySelector('.about-link-mobile'), target: footerSecContact }, // About link (mobile)

    // T&C page links
    { link: document.querySelector('.tc-link'), target: termsAndConditionSec }, // Terms and Conditions link (desktop)
    { link: document.querySelector('.tc-contact-link'), target: termsAndConditionSecContact }, // Terms and Conditions contact link (desktop)
    { link: document.querySelector('.pp-link'), target: privacyAndPolicySec }, // Privacy Policy link (desktop)
    { link: document.querySelector('.pp-contact-link'), target: privacyAndPolicySecContact }, // Privacy Policy contact link (desktop)
    { link: document.querySelector('.tc-link-mobile'), target: termsAndConditionSec }, // Terms and Conditions link (mobile)
    { link: document.querySelector('.tc-contact-link-mobile'), target: termsAndConditionSecContact }, // Terms and Conditions contact link (mobile)
    { link: document.querySelector('.pp-link-mobile'), target: privacyAndPolicySec }, // Privacy Policy link (mobile)
    { link: document.querySelector('.pp-contact-link-mobile'), target: privacyAndPolicySecContact }, // Privacy Policy contact link (mobile)
    { link: document.querySelector('.pp-footer-link'), target: privacyAndPolicySec }, // Privacy Policy link (footer)
    { link: document.querySelector('.tc-footer-link'), target: termsAndConditionSec } // Terms and Conditions link (footer)
];

// Add event listeners to all links for smooth scrolling
links.forEach(({ link, target }) => funcToScroll(link, target));
