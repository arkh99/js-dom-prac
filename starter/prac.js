let user;
let pass;
let button = document.getElementById("button");
button.addEventListener("click", () => {
    event.preventDefault();
    user = document.getElementById("user").value
    pass = document.getElementById("pass").value
    if (!user || !pass) {
        alert("please fill all the information")
    }
    else {
        console.log(`your username is: ${user} and your password is: ${pass}`);
    }
})