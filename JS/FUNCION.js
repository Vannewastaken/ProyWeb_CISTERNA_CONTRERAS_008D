

// PARA MOSTRAR LA CONTRASEÑA
function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    let checkbox = document.getElementById("showPasswordCheckbox");

    if (checkbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

const expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
function iniciarSesion(){
    let c = document.getElementById('email').value;
    c = c.toLowerCase();
    const validar = expresion.test(c);
    let p= document.getElementById('password').value;

    if(validar==false){
        alert('El correo electronico no es valido');
        document.getElementById('email').value = "";
        document.getElementById('email').focus();

    }
    else if (p.length < 3) {
        alert('Error..debe ingresar una contraseña válida');
        document.getElementById('password').value = "";
        document.getElementById('password').focus();
    }
    else{
        alert('Has iniciado sesión correctamente...')
    }

}
