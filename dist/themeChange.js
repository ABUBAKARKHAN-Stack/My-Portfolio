// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    // Selecting elements from the DOM
    const body = document.querySelector('body'); // Selecting the <body> element
    const devName = document.querySelector('.webkit'); // Selecting elements with class '.webkit'
    const themeTogglerLg = document.querySelectorAll('.theme-toggler-desktop'); // Selecting all elements with class '.theme-toggler-desktop'
    const themeTogglerSm = document.querySelectorAll('.theme-toggler-sm'); // Selecting all elements with class '.theme-toggler-sm'
    const iconLg = document.querySelectorAll('.icon-desktop'); // Selecting all elements with class '.icon-desktop'
    const iconSm = document.querySelectorAll('.icon-sm'); // Selecting all elements with class '.icon-sm'
    const profileLinks = document.querySelectorAll('.profile-links'); // Selecting all elements with class '.profile-links'
    const footerLogos = document.querySelectorAll('.logo-transition'); // Selecting all elements with class '.logo-transition'
    const hamBg = document.querySelectorAll('.ham-icon div'); // Selecting all <div> elements inside elements with class '.ham-icon'
    const mobileMenuBg = document.querySelector('.mobile-menu'); // Selecting the element with class '.mobile-menu'

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme); // Apply saved theme class to <body>
        if (savedTheme === 'dark-theme') {
            applyDarkTheme(); // Apply dark theme if saved theme is 'dark-theme'
        } else {
            applyLightTheme(); // Apply light theme if saved theme is 'light-theme'
        }
    } else {
        // Default to dark theme if no saved theme found
        body.classList.add('dark-theme');
        applyDarkTheme();
    }

    // Add click event listener to each desktop theme toggler
    themeTogglerLg.forEach((toggler) => {
        toggler.addEventListener('click', () => {
            toggleTheme(); // Toggle theme on click
        });
    });

    // Add click event listener to each small theme toggler
    themeTogglerSm.forEach((toggler) => {
        toggler.addEventListener('click', () => {
            toggleTheme(); // Toggle theme on click
        });
    });

    // Function to apply light theme styles
    function applyLightTheme() {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        // Apply styles for light mode
        iconLg.forEach((BTN) => {
            BTN.style.transform = 'translateX(0px)';
            BTN.style.fill = '#000';
        });
        iconSm.forEach((BTN) => {
            BTN.style.transform = 'translateX(0px)';
            BTN.style.fill = '#000';
        });
        themeTogglerLg.forEach((toggler) => {
            toggler.style.background = '#fff';
        });
        themeTogglerSm.forEach((toggler) => {
            toggler.style.background = '#fff';
        });
        body.style.background = '#18181b';
        body.style.color = '#ccc';
        footerLogos.forEach((eachLogo) => {
            eachLogo.style.border = '1px solid #ccc';
            eachLogo.addEventListener('mouseover', () => {
                eachLogo.style.border = '1px solid transparent'; // Change border to transparent on mouseover
            });
            eachLogo.addEventListener('mouseout', () => {
                eachLogo.style.border = '1px solid #ccc'; // Restore border on mouseout
            });
        });
        profileLinks.forEach((links) => {
            links.style.fill = '#ccc';
        });
        hamBg.forEach((element) => {
            element.style.backgroundColor = '#fff';
        });
        // Apply devName style only on home and about pages
        if (devName) {
            devName.style.webkitTextStroke = '1px #fff';
        }
    }

    // Function to apply dark theme styles
    function applyDarkTheme() {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        // Apply styles for dark mode
        iconLg.forEach((BTN) => {
            BTN.style.transform = 'translateX(35px) rotate(120deg)';
            BTN.style.fill = '#FDB813';
        });
        iconSm.forEach((BTN) => {
            BTN.style.transform = 'translateX(35px) rotate(120deg)';
            BTN.style.fill = '#FDB813';
        });
        themeTogglerLg.forEach((toggler) => {
            toggler.style.background = '#000';
        });
        themeTogglerSm.forEach((toggler) => {
            toggler.style.background = '#000';
        });
        body.style.backgroundColor = '#fff';
        body.style.transition = 'all 0.3s easy-in-out'; // Smooth transition for theme change
        body.style.color = 'black';
        footerLogos.forEach((eachLogo) => {
            eachLogo.style.border = '1px solid black';
            eachLogo.addEventListener('mouseover', () => {
                eachLogo.style.border = '1px solid transparent'; // Change border to transparent on mouseover
            });
            eachLogo.addEventListener('mouseout', () => {
                eachLogo.style.border = '1px solid black'; // Restore border on mouseout
            });
        });
        profileLinks.forEach((links) => {
            links.style.fill = '#000';
        });
        hamBg.forEach((element) => {
            element.style.backgroundColor = '#000';
            element.style.transition = 'all 0.3s ease-in-out'; // Smooth transition for background color change
        });
        mobileMenuBg.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        // Apply devName style only on home and about pages
        if (devName) {
            devName.style.webkitTextStroke = '1px #000';
        }
    }

    // Function to toggle theme
    function toggleTheme() {
        if (body.classList.contains('dark-theme')) {
            applyLightTheme(); // Toggle to light theme
            localStorage.setItem('theme', 'light-theme');
            console.log('DARK THEME !!');
        } else {
            applyDarkTheme(); // Toggle to dark theme
            localStorage.setItem('theme', 'dark-theme');
            console.log('LIGHT THEME !!');
        }
    }
});
