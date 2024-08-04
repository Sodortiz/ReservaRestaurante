var db = firebase.firestore();


document.getElementById('usuarioForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;
  var password = document.getElementById('password').value;

  db.collection("usuarios").add({
    nombre: nombre,
    email: email,
    telefono: telefono,
    password: password
  })
  .then(function() {
    alert("Datos del usuario guardados con éxito!");
    document.getElementById('usuarioForm').reset();
  })
  .catch(function(error) {
    console.error("Error al guardar los datos del usuario: ", error);
  });
});
