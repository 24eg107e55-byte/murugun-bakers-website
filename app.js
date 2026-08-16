function validate() {
    const name = document.getElementById("name").value.trim();
    const tel = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    const namepattern = /^[A-Za-z ]{3,15}$/;
    const phonepattern = /^[0-9]{10}$/;
    const passwordpattern = /^[A-Za-z0-9]+$/;

    if (!namepattern.test(name)) {
        alert("Name should contain 3 to 15 characters");
    }
    else if (!phonepattern.test(tel)) {
        alert("Phone number should contain exactly 10 digits");
    }
    else if (!passwordpattern.test(password)) {
        alert("Password should contain only A-Z, a-z and 0-9");
    }
    else {
        alert("Registration successful!");
    }
}
