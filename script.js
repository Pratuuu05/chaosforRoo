function checkLogin() {
    const usernameInput = document.getElementById("username").value.toLowerCase().trim();
    const passwordInput = document.getElementById("password").value.toLowerCase().trim();
    const error = document.getElementById("error");

    if (usernameInput === "roo" && passwordInput === "pratuuu") {

        error.innerText = "Scanning identity... 🧐";

        setTimeout(() => {
            error.innerText = "Hmm… still not convinced 😒";
        }, 1500);

        setTimeout(() => {
            window.location.href = "questions.html";
        }, 3000);

    } else {
        const wrongMessages = [
            "You're not Roo, get lost 🤨",
            "Try again idiot 💀",
            "Fake detected 🚨",
            "Access denied 😂"
        ];

        error.innerText = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
    }
}