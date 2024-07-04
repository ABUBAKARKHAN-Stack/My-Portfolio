// Function to send email
function sendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const successCheck = document.querySelector('.success');
    const errorCheck = document.querySelector('.error');

    // Basic form validation
    if (!name || !email || !message) {
        errorCheck.innerHTML = '<div>Please fill in all fields ❌</div>';
        setTimeout(() => {
            errorCheck.innerHTML = '';
        }, 2000);
        return;
    }

    // Simple email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorCheck.innerHTML = '<div>Please enter a valid email address ❌</div>';
        setTimeout(() => {
            errorCheck.innerHTML = '';
        }, 2000);
        return;
    }

    const params = {
        name: name,
        email: email,
        message: message
    };
    const serviceId = "service_66n2vzk";
    const templateId = "template_e5qcrwc";

    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            successCheck.innerHTML = '<div>Message Sent Successfully ✅</div>';
            setTimeout(() => {
                successCheck.innerHTML = '';
            }, 2000);
        })
        .catch((err) => {
            console.error(err);
            errorCheck.innerHTML = '<div>Failed to send message ❌</div>';
            setTimeout(() => {
                errorCheck.innerHTML = '';
            }, 2000);
        });
}

// Event listener for form submission
const sendBTn = document.querySelector('.send-msg-btn');
sendBTn.addEventListener('click', function (e) {
    e.preventDefault();
    sendMail();
});
