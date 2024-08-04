var db = firebase.firestore();


document.getElementById('reservaForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;
  var fecha = document.getElementById('fecha').value;
  var hora = document.getElementById('hora').value;
  var personas = document.getElementById('personas').value;
  var notas = document.getElementById('notas').value;

  db.collection("reservas").add({
    nombre: nombre,
    email: email,
    telefono: telefono,
    fecha: fecha,
    hora: hora,
    personas: personas,
    notas: notas
  })
  .then(function() {
    alert("Reserva realizada con éxito!");
    document.getElementById('reservaForm').reset();
  })
  .catch(function(error) {
    console.error("Error al realizar la reserva: ", error);
  });
});
