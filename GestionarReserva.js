// Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  
  function renderReserva(doc) {
    let reservaContainer = document.getElementById('reservas-container');
    
    let div = document.createElement('div');
    div.classList.add('reserva-card');
    div.setAttribute('data-id', doc.id);
  
    let nombre = document.createElement('h3');
    nombre.textContent = doc.data().nombre;
  
    let email = document.createElement('p');
    email.textContent = 'Correo: ' + doc.data().email;
  
    let telefono = document.createElement('p');
    telefono.textContent = 'Teléfono: ' + doc.data().telefono;
  
    let fecha = document.createElement('p');
    fecha.textContent = 'Fecha: ' + doc.data().fecha;
  
    let hora = document.createElement('p');
    hora.textContent = 'Hora: ' + doc.data().hora;
  
    let personas = document.createElement('p');
    personas.textContent = 'Personas: ' + doc.data().personas;
  
    let notas = document.createElement('p');
    notas.textContent = 'Notas: ' + (doc.data().notas || 'Ninguna');
  
    let btnModificar = document.createElement('button');
    btnModificar.textContent = 'Modificar';
    btnModificar.classList.add('btn', 'btn-primary');
    btnModificar.onclick = function() {
      // Lógica para modificar la reserva
    };
  
    let btnCancelar = document.createElement('button');
    btnCancelar.textContent = 'Cancelar';
    btnCancelar.classList.add('btn', 'btn-danger');
    btnCancelar.onclick = function() {
      db.collection('reservas').doc(doc.id).delete();
    };
  
    div.appendChild(nombre);
    div.appendChild(email);
    div.appendChild(telefono);
    div.appendChild(fecha);
    div.appendChild(hora);
    div.appendChild(personas);
    div.appendChild(notas);
    div.appendChild(btnModificar);
    div.appendChild(btnCancelar);
  
    reservaContainer.appendChild(div);
  }
  
  // Obtener reservas desde Firebase y renderizarlas
  db.collection('reservas').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      renderReserva(doc);
    });
  });
  