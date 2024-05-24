function login()
{

    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("password").value;

    if(user=="chris" && pass=="123")
    {

      window.open('file:///C:/Users/jonat/Desktop/Snap_prueba_bootstrap/Snap_responsive/index.html');

    }else{

      alert("Usuario o contraseña incorrectos");

    }

}