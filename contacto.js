const form = document.getElementById("contacto-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const message = messageInput.value;

    const data = {
        name: name,
        email: email,
        phone: phone,
        message: message,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit-form.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));

    xhr.onload = () => {
        if (xhr.status === 200) {
            sendEmail(data);
        } else {
            alert("Error submitting form: " + xhr.statusText);
        }
    };
});

function sendEmail(data) {
    const to = "green_factor_duel@hotmail.com";
    const subject = "Prowebdev email";
    const message = `From: ${data.name}

Email: ${data.email}

Phone: ${data.phone}

Message: ${data.message}`;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        user: "green_factor_duel@hotmail.com",
        password: "",
    });

    transporter.sendMail({
        to: to,
        from: "green_factor_duel@hotmail.com",
        subject: subject,
        text: message,
    });
}