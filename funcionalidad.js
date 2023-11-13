document.addEventListener('DOMContentLoaded', function () {
    // Manejar el evento submit del formulario
    document.querySelector('.matricula-form').addEventListener('submit', function (event) {
      // Evitar que el formulario se envíe automáticamente
      event.preventDefault();
  
      // Realizar la validación antes de guardar los datos
      if (validarFormulario()) {
        // Si la validación es exitosa, llamar a la función para guardar los datos
        guardarDatos();
      } else {
        // Si la validación falla, mostrar un mensaje de error
        alert("Por favor, llene todos los campos.");
      }
    });
  
    // Función para validar que todos los campos estén llenos
    function validarFormulario() {
      var campos = document.querySelectorAll('.matricula-form input, .matricula-form select');
  
      for (var i = 0; i < campos.length; i++) {
        if (campos[i].hasAttribute('required') && !campos[i].value.trim()) {
          return false; // Retorna falso si encuentra algún campo requerido vacío
        }
      }
  
      return true; // Retorna true si todos los campos requeridos están llenos
    }
  
    // Función para guardar los datos del formulario
    function guardarDatos() {
      var formData = {
        estudiante: {
          id: document.getElementById('id_estudiante').value,
          tipo_id: document.getElementById('tipo_id').value,
          // ... (otros campos del estudiante)
        },
        acudiente: {
          id: document.getElementById('id_acudiente').value,
          tipo_id: document.getElementById('tipo_id_acudiente').value,
          // ... (otros campos del acudiente)
        },
        sede: {
          id: document.getElementById('id_sede').value,
          nombre: document.getElementById('nombre_sede').value,
          // ... (otros campos de la sede)
        },
        grado: {
          id: document.getElementById('id_grado').value,
          opciones: document.getElementById('opciones_grado').value,
          // ... (otros campos del grado)
        },
        curso: {
          id: document.getElementById('id_curso').value,
          opciones: document.getElementById('opciones_curso').value,
          // ... (otros campos del curso)
        },
        matricula: {
          numero: document.getElementById('numero_matricula').value,
          folio: document.getElementById('folio').value,
          fecha: document.getElementById('fecha_matricula').value,
          // ... (otros campos de la matrícula)
        },
      };
  
      // Puedes hacer algo con los datos, por ejemplo, mostrar una alerta
      alert("Datos guardados:\n" + JSON.stringify(formData, null, 2));
    }
  });
  
