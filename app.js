var usersData = JSON.parse(localStorage.getItem("users")) || [];  // Initialize from localStorage or empty array

var registerBtn = document.getElementById("register");
registerBtn && registerBtn.addEventListener("click", function () {

    var rName = document.getElementById("registerName")
    var rEmail = document.getElementById("registerEmail")
    var rPassword = document.getElementById("registerPass")
    var rRepeatPassword = document.getElementById("registerRepeatPassword")

    // Check if the passwords match
    if (rPassword.value !== rRepeatPassword.value) {
        Swal.fire("Password do not match😱!");
        return;
    }

    var userObj = {
        name: rName.value,
        email: rEmail.value,
        password: rPassword.value
    }

    usersData.push(userObj)

    // Clear the input fields
    rName.value = ""
    rEmail.value = ""
    rPassword.value = ""
    rRepeatPassword.value = ""

    // Save usersData to localStorage
    localStorage.setItem("users", JSON.stringify(usersData));

    console.log(usersData);

    // Redirect to login page
    location.href = "login.html"
});

var loginBtn = document.getElementById("login");
loginBtn && loginBtn.addEventListener("click", function () {

    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");

    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if users data exists
    if (users.length === 0) {
        Swal.fire("No user registered yet!");
        return;
    }

    // Loop through the users to check login credentials
    for (var user of users) {
        if (user.email === loginEmail.value) {
            // Check if password matches
            if (user.password === loginPassword.value) {
Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Login Successfully😊",
  showConfirmButton: false,
  timer: 1500
});

                // Perform any post-login actions here
                return;  // Exit after successful login
            } else {
                Swal.fire("Email is correct, but password is wrong🤔");
                return;  // Exit after password mismatch
            }
        }
    }

    // If no matching email was found
    Swal.fire("Email not found🤨");

});
