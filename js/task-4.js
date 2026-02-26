const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
  
    if (email === "" || password === "") {
        // console.log("All form fields must be filled in");
        return alert("All form fields must be filled in");
    }

    const loginData = {
        email,
        password,
    }
    console.log(`Login: ${email}, Password: ${password}`);
    console.log(loginData);

    form.reset();
}
