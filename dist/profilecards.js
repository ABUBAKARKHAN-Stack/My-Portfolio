// Function to show text in elements
function showText(elements, text) {
    elements.style.transition = 'opacity 0.3s ease-in-out'; // Apply transition for smooth opacity change
    elements.innerHTML = text; // Set inner HTML content
    elements.classList.add('show'); // Add 'show' class to elements for visibility
}

// Function to hide text in elements
function hideText(elements) {
    elements.classList.remove('show'); // Remove 'show' class to hide elements
    setTimeout(() => {
        elements.innerHTML = ''; // Clear inner HTML after hiding animation
    }, 300); // Delay to match transition duration
}

function seeLess(element1 , element2) {
    setTimeout(() => {
        element1.innerHTML =  'to See Details'
        element2.innerHTML = ' See More ...'
    }, 300);
}
// Selecting 'See More' buttons and corresponding profile text elements
const seeMore1 = document.querySelector('.see-more-1');
const seeMore2 = document.querySelector('.see-more-2');
const seeMore3 = document.querySelector('.see-more-3');
const seeMore4 = document.querySelector('.see-more-4');

const profileText1 = document.querySelector('.profile-text-1');
const profileText2 = document.querySelector('.profile-text-2');
const profileText3 = document.querySelector('.profile-text-3');
const profileText4 = document.querySelector('.profile-text-4');

const viewHide1 = document.querySelector('.view-hide-1')
const viewHide2 = document.querySelector('.view-hide-2')
const viewHide3 = document.querySelector('.view-hide-3')
const viewHide4 = document.querySelector('.view-hide-4')
// Event listener for 'See More' button 1
seeMore1.addEventListener('click', () => {
    seeMore1.classList.toggle('see-less-1'); // Toggle 'see-less-1' class for button state

    if (seeMore1.classList.contains('see-less-1')) {
        // If 'See Less' state
        showText(profileText1,
            `<p> I have worked on various personal projects, including building interactive websites and web applications. 
            These projects have allowed me to apply my theoretical knowledge in practical scenarios, creating real-world solutions. 
            By experimenting with different technologies and frameworks, I have improved my coding skills, learned to debug effectively, 
            and enhanced my ability to work independently as well as part of a team.
            </p>`
        );
        viewHide1.innerHTML = 'to hide details'
        seeMore1.innerHTML = 'See Less'; // Update button text to 'See Less'
    } else {
        // If 'See More' state
        hideText(profileText1); // Hide text
        // viewHide1.innerHTML = 'to See details'
        // seeMore1.innerHTML = 'See More...'; // Update button text to 'See More...'
        seeLess(viewHide1, seeMore1)
    }
});

// Event listener for 'See More' button 2 (similar logic for other buttons)
seeMore2.addEventListener('click', () => {
    seeMore2.classList.toggle('see-less-2');

    if (seeMore2.classList.contains('see-less-2')) {
        showText(profileText2,
            `<p> I am currently pursuing my intermediate studies with a focus on technology and programming.
            My curriculum includes subjects like computer science, mathematics, and information
            technology, which provide me with a solid theoretical foundation. Additionally, I am
            actively participating in online courses and workshops to further enhance my coding skills
            and stay updated with the latest industry trends.</p>`
        );
        viewHide2.innerHTML = 'to hide details'
        seeMore2.innerHTML = 'See Less';
    } else {
        hideText(profileText2);
        seeLess(viewHide2, seeMore2)
    }
});

// Event listener for 'See More' button 3 (similar logic for other buttons)
seeMore3.addEventListener('click', () => {
    seeMore3.classList.toggle('see-less-3');

    if (seeMore3.classList.contains('see-less-3')) {
        showText(profileText3,
            `<p>I have worked on various personal projects, including building interactive websites and web
            applications. These projects have allowed me to apply my theoretical knowledge in practical
            scenarios, creating real-world solutions. By experimenting with different technologies and
            frameworks, I have improved my coding skills, learned to debug effectively, and enhanced my
            ability to work independently as well as part of a team.</p>`
        );
        viewHide3.innerHTML = 'to hide details'
        seeMore3.innerHTML = 'See Less';
    } else {
        hideText(profileText3);
        seeLess(viewHide3, seeMore3)
    }
});

// Event listener for 'See More' button 4 (similar logic for other buttons)
seeMore4.addEventListener('click', () => {
    seeMore4.classList.toggle('see-less-4');

    if (seeMore4.classList.contains('see-less-4')) {
        showText(profileText4  ,
            `<p>  My future goals include advancing my technical skills by learning new programming languages
            and
            exploring emerging technologies. I aim to work on more complex projects that challenge me
            and
            expand my knowledge base. Additionally, I am eager to delve into backend development to
            become a
            full-stack developer. Ultimately, I aspire to pursue a successful career in web development,
            contributing to innovative projects and making a meaningful impact in the tech industry.</p>`
        );
       
       viewHide4.innerHTML = 'to hide details'
        seeMore4.innerHTML = 'See Less';
    } else {
        hideText(profileText4);
        // seeLess(viewHide4 , seeMore4)
            //  viewHide4.innerHTML = 'to See details'
            //   seeMore4.innerHTML = 'See More...';
            seeLess(viewHide4, seeMore4)
    }
});
