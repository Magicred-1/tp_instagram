document.addEventListener("DOMContentLoaded", () => {
    console.log("Loading ...");
    let btn, warning, email, password;
    let regexmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let regexmdp = /^[a-zA-Z0-9._-]{2,15}$/;

    warning = document.querySelector(".form p");
    email = document.getElementsByTagName("input")[0].value;
    password = document.getElementsByTagName("input")[1].value;
    btn = document.getElementsByTagName("input")[2];

    btn.addEventListener("click", e => {
        e.preventDefault();
        formActive();
    });
    let formActive = () => {

        email = document.getElementsByTagName("input")[0].value;
        password = document.getElementsByTagName("input")[1].value;

        if (email.match(regexmail) && password.match(regexmdp)) {
            warning.classList.add("success");
            warning.classList.remove("error");
            warning.innerText = "Connexion réussie";
            localStorage.setItem("user", email);
            sessionStorage.setItem("user", "sessionid");
            document.location.assign("accueil.html");
        } else if (password.match(regexmdp)) {
            warning.classList.add("error");
            warning.innerText = "Mail invalide";
            warning.classList.remove("success");
        } else if (email.match(regexmail)) {
            warning.classList.add("error");
            warning.innerText = "Mot de passe invalide";
            warning.classList.remove("success");
        } else {
            warning.classList.add("error");
            warning.innerText = "Mail ou mot de passe incorrecte";
            warning.classList.remove("success");
        };
    };
});