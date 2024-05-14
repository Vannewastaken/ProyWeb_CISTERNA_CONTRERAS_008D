

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
    else if (p.length < 8) {
        alert('Error..debe ingresar una contraseña válida');
        document.getElementById('password').value = "";
        document.getElementById('password').focus();
    }
    else{
        alert('Has iniciado sesión correctamente...')
    }

}


// LUKAS REGISTRO

function registrarUsuario(){
    let nom= document.getElementById('name').value;
    let usu= document.getElementById('uname').value;
    let em= document.getElementById('email').value;
    let tel= document.getElementById('telefono').value;
     let con= document.getElementById('contraseña').value;
    let concon= document.getElementById('confirmarContraseña').value;

    em=em.toLowerCase();
    const validar = expresion.test(em);


    if (nom.length < 20) {
        alert('Error..debe ingresar el nombre completo');
        document.getElementById('name').value = "";
        document.getElementById('name').focus();
    }
    else if (usu.length < 4) {
         alert('Error..debe ingresar un nombre de usuario mayor a 3 caracteres');
         document.getElementById('uname').value = "";
         document.getElementById('uname').focus();
        
     }
     else if(validar==false){
        alert('El correo electronico no es valido');
        document.getElementById('email').value = "";
        document.getElementById('email').focus();

    }
    else if (tel.length < 8) {
        alert('Error..debe ingresar un telefono correcto');
        document.getElementById('telefono').value = "";
        document.getElementById('telefono').focus();
    }
    else if (con.length < 8) {
        alert('Error..debe ingresar una contraseña de 8 caracteres o más');
        document.getElementById('contraseña').value = "";
        document.getElementById('contraseña').focus();
    }
     else if (concon !== con) {
        alert('Error..las contraseñas no coinciden');
        document.getElementById('contraseña').value = "";
        document.getElementById('confirmarContraseña').value = "";
        document.getElementById('contraseña').focus();
    }
    else{
        alert('Te has registrado correctamente!')
    }
    
}

fetch('https://api.boostr.cl/holidays.json')
    .then(response => response.json())
    .then(data => {
        // Manipular los datos recibidos y mostrarlos en el elemento holidays
        const holidaysElement = document.getElementById('holidays');
        holidaysElement.innerHTML = '<h2>Días festivos</h2>';
        data.forEach(holiday => {
            holidaysElement.innerHTML += `<p>${holiday.date}: ${holiday.name}</p>`;
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });



    //API NUESTRA(SERVICIOS =CAMIONES)

    function mostrarRampla(){
        let url='http://localhost:3300/conrampla';
         //implementar Fetch que permita la información de los camiones
       fetch(url)
        .then(response => response.json())
        .then(data => mostrarRampla(data))
         .catch(error => console.log(error))
    
        const mostrarRampla=(data)=>{
            console.log(data)
            let texto=""
           for(var i=0;i<data.length;i++){
              texto+=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].metros}</td>
                    <td>${data[i].capacidad}</td>
                    <td>${data[i].cityxvalor.santiago}</td>
                    <td>${data[i].cityxvalor.rancagua}</td>
                    <td><img src="${data[i].img}"></td>
                    </tr>`
            }
             document.getElementById('rampla').innerHTML=texto;
         }
    
    
    }
    
    function mostrarCamiones(){
        let url='http://localhost:3300/camiones';
         //implementar Fetch que permita la información de los camiones
        fetch(url)
        .then(response => response.json())
        .then(data => mostrarCamiones(data))
        .catch(error => console.log(error))
    
        const mostrarCamiones=(data)=>{
            console.log(data)
            let texto=""
            for(var i=0;i<data.length;i++){
                texto+=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].marca}</td>
                    <td>${data[i].capacidad}</td>
                    <td>${data[i].valorxruta}</td>
                    <td><img src="${data[i].img}"></td>
                    </tr>`
            }
            document.getElementById('camiones').innerHTML=texto;
        }
    
    
    }