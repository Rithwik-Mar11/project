var login_id = ""
function login() {
    login_id = document.getElementById("login").value;
    localStorage.setItem("login_id", login_id);
    window.location="kwitter_room.html";
}