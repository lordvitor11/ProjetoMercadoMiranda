function login() {
    let usr = document.querySelector("#usr").value;
    let passwd = document.querySelector("#passwd").value;

    if (usr == "admin" && passwd == "admin") {
        alert("Bem-vindo(a)!");
    } else {
        alert("Credenciais inválidas!");
    }
}

function textChange() {
    var passwd = document.getElementById("passwd").value
    var passwd1 = document.getElementById("passwd1");
    var passwd2 = document.getElementById("passwd2");
    var passwd3 = document.getElementById("passwd3");
    var upper = false;
    var lower = false;

    for (var c = 0; c < passwd.length; c++) {
        if (passwd[c] === passwd[c].toUpperCase() && passwd[c] != parseInt(passwd[c])) {
            upper = true; break;
        }
    }

    for (var c = 0; c < passwd.length; c++) {
        if (passwd[c] === passwd[c].toLowerCase() && passwd[c] != parseInt(passwd[c])) {
            lower = true; break
        }
    }

    if (passwd.length >= 6) {
        passwd1.style.color = "green";
    } else {
        passwd1.style.color = "red";
    }

    if (upper) {
        passwd2.style.color = "green";
    } else {
        passwd2.style.color = "red";
    }

    if (lower) {
        passwd3.style.color = "green";
    } else {
        passwd3.style.color = "red";
    }
}

