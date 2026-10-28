const boton = document.getElementById('btn-tema');
const formulario = document.getElementById('form-contacto');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');
});

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  mensaje.textContent = '¡Gracias por tu mensaje! El formulario fue enviado correctamente.';
  formulario.reset();
});
