function setFormMessage(formEl, type, message) {
    const messageEl = formEl.querySelector(".form-message");

    messageEl.textContent = message;
    messageEl.classList.remove("form-message-success", "form-message-error");
    messageEl.classList.add(`form-message-${type}`);
}

function setInputError(inputEl, message) {
    inputEl.classList.add("form-control-error");
    inputEl.parentElement.querySelector(".form-control-error-message").textContent = message;
}

function clearInputError(inputEl) {
    inputEl.classList.remove("form-control-error");
    inputEl.parentElement.querySelector(".form-control-error-message").textContent = "";
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const userEmail = "admin@gmail.com";
    const userPass = "pass1234";

    loginForm.addEventListener("submit", e => {
        //e.preventDefault();
        if (e.target[0].value === userEmail && e.target[1].value === userPass) {
            setFormMessage(loginForm, "success", "Email and password are correct");
            loginForm.onsubmit = () => {return 1};
        } else {
            if (e.target[0].value !== userEmail && e.target[1].value !== userPass) {                
                setFormMessage(loginForm, "error", "Email/password combination is not correct");
            } else if (e.target[0].value !== userEmail) {
                setFormMessage(loginForm, "error", "Email is not correct");
            } else if (e.target[1].value !== userPass) {
                setFormMessage(loginForm, "error", "Password is not correct");
            }
        }
    })

    document.querySelectorAll(".form-control").forEach(inputEl => {
        inputEl.addEventListener("blur", e => {
            if (e.target.id === "loginEmail") {
                if (e.target.value.length < 0 || !validateEmail(e.target.value)) {
                    setInputError(inputEl, "Email input is not valid");
                }
            } else if (e.target.id === "loginPass") {
                if (e.target.value.length < 8) {
                    setInputError(inputEl, "The password must be at least 8 characters in length");
                }
            }
        })

        inputEl.addEventListener("input", e => {
            clearInputError(inputEl);
        })
    })
})