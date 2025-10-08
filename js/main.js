// ===== Scroll automático al hacer clic en "Ver más" =====
document.getElementById('btnVerMas').addEventListener('click', () => {
  document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
});

// ===== Validación del formulario =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !correo || !mensaje) {
    alert('⚠️ Todos los campos son obligatorios.');
    return;
  }

  if (!correo.includes('@')) {
    alert('⚠️ El correo debe contener un "@" válido.');
    return;
  }

  alert('✅ Formulario enviado correctamente.');
  e.target.reset();
});
