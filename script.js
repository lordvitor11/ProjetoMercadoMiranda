function switchPage() {
    var popup = document.getElementById("popup-container");
    popup.style.cssText = "display: none;";
    window.location.href = "login.html";
}

function switchPage2() {
    var popup = document.getElementById("popup-container");
    var popupText = document.getElementById("popup-span");

    if (popupText.textContent == "Credenciais inválidas!") {
        popup.style.cssText = "display: none;";
    } else {
        popup.style.cssText = "display: none;";
        window.location.href = "landpage.html";
    }
}

function landpageLoad() {
    document.getElementById("logged-user").innerHTML = localStorage.getItem("name");
}

function login() {
    var email = localStorage.getItem("email");
    var passwd = localStorage.getItem("passwd");
    var popup = document.getElementById("popup-container");
    var popupText = document.getElementById("popup-span");

    var emailTemp = document.querySelector("#email").value;
    var passwdTemp = document.querySelector("#passwd").value;
    
    if (emailTemp === email && passwdTemp === passwd) {
        popup.style.cssText = "display: block;";
        popupText.innerText = "Logado(a)!";
    } else {
        popup.style.cssText = "display: block;";
        popupText.innerText = "Credenciais inválidas!";
    }
}

function save() {
    var popupText = document.getElementById("popup-span");
    var popup = document.getElementById("popup-container");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;

    name = name.replace(name.charAt(0), name.charAt(0).toUpperCase());
    
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("passwd", passwd);

    popup.style.cssText = "display: block;";
    popupText.innerText = "Cadastro efetuado com sucesso!";
}

function passwdChange() {
    var string = "";
    var upper = false;
    var lower = false;
    var num = false;
    var strength = 0;
    var passwdT = document.getElementById("passwd").value;
    var span = document.getElementById("strength");

    for (var c = 0; c < passwdT.length; c++) {
        if (passwdT[c] === passwdT[c].toUpperCase() && passwdT[c] != parseInt(passwdT[c])) {
            upper = true; break;
        }
    }

    for (var c = 0; c < passwdT.length; c++) {
        if (passwdT[c] === passwdT[c].toLowerCase() && passwdT[c] != parseInt(passwdT[c])) {
            lower = true; break
        }
    }

    for (var c = 0; c < passwdT.length; c++) {
        if (!isNaN(passwdT[c])) {
            num = true; break
        }
    }

    if (lower) {
        strength += 1;
    }

    if (upper) {
        strength += 1;
    }

    if (num) {
        strength += 1;
    }

    if (passwdT.length >= 6) {
        strength += 1;
    }

    if (passwdT.length >= 10) {
        strength += 1;
    }

    for (c = 0; c < strength;++c) {
        string += "*"
    }

    span.innerText = string;

    switch (string.length) {
        case 1: span.style.color = "red"; break;
        case 2: span.style.color = "orange"; break;
        case 3: span.style.color = "orange"; break;
        case 4: span.style.color = "lime"; break;
        case 5: span.style.color = "lime"; break;
        default: break;

    } 
}		
