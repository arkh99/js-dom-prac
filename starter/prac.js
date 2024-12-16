let user;
let pass;
let button = document.getElementById("button");
button.addEventListener("click", (event) => {
    event.preventDefault();
    user = document.getElementById("user").value
    pass = document.getElementById("pass").value
    let form = document.getElementById("myform")
    if (!user || !pass) {
        alert("please fill all the information")
    }
    else {
        console.log(`your username is: ${user} and your password is: ${pass}`);
        form.reset();
        const name = user.slice(1, user.length)
        document.getElementById("h1").textContent = `Welcome ${user[0].toUpperCase() + name}`
    }
})
