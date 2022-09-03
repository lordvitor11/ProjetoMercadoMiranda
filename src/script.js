function login() {
    let usr = document.querySelector("#usr").value;
    let passwd = document.querySelector("#passwd").value;

    if (usr == "admin" && passwd == "admin") {
        alert("Bem-vindo(a)!");
    } else {
        alert("Credenciais inválidas!");
    }
}

