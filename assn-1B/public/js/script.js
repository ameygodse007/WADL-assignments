$(document).ready(function () {
  $("#submit").click(function () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log(username + " " + password);
    var userPass = {
      username: username,
      password: password,
    };
    localStorage.setItem("data", JSON.stringify(userPass));
    window.location.href = "/assn-1B/public/index2.html";
  });
});
