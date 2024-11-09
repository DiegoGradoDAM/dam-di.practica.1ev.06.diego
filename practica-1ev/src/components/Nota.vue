<template>
    <!--El :class aplica la clase seleccionada solo si es true esSeleccionada -->
    <div class="nota" :class="{ seleccionada: esSeleccionada }"@click="seleccionarNota">
        <p>{{ id }}</p>
        <p><u>Nota-{{ idOriginal }}</u></p>
        <div class="descripcion">Descripcion</div>
        <div class="botones">
            <!-- El click de seleccionar una nota me daba problemas con los botones de la nota y la seleccion de ella, he encontrado en internet que click.stop evita que el evento de clic en un botón se propague a otros elementos padres-->
            <button @click.stop="duplicarNota"><font-awesome-icon :icon="['fas', 'square-plus']" /></button>
            <button @click.stop="eliminarNota"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
            <button @click.stop="seleccionarNota"><font-awesome-icon :icon="['fas', 'bullseye']" /></button>
        </div>
    </div>
</template>
<script setup>
    import { defineProps, defineEmits } from 'vue';

    // Definir las propiedades (props)
    const props = defineProps({
    id: Number,
    idOriginal: Number,
    esSeleccionada: Boolean
    });


    // Definir los eventos emitidos
    const emit = defineEmits(['duplicar', 'eliminar', 'seleccionar']);

    // Hago el emit de los eventos 
    const duplicarNota = () => emit('duplicar', props.id);
    const eliminarNota = () => emit('eliminar', props.id);
    const seleccionarNota = () => emit('seleccionar', props.id);
</script>
<style scoped>
.nota {
  display: flex;
  flex-direction: column; /* Organiza los elementos dentro de la nota de arriba a abajo */
  background-color: #ffffff; /* Fondo blanco para las notas */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 200px; /* Limita el tamaño máximo de las notas */
  text-align: center; /* Centra el texto dentro de la nota */
}

.nota.seleccionada {
  background-color: #1a73e8; /* Azul oscuro */
  color: white; /* Cambia el texto a blanco */
}

.nota.seleccionada .descripcion{
  color: white; /* Cambia el color de los botones e iconos a blanco */
}

.nota p {
  margin: 5px 0;
}

.nota .descripcion {
  margin-top: 10px;
  font-size: 0.9em;
  color: #555;
}

.nota .botones {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}

.nota button {
  background-color: #1a73e8; /* Azul oscuro */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nota button:hover {
  background-color: #155bb5; /* Azul más intenso al pasar el ratón */
}

.nota button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(26, 115, 232, 0.5);
}
</style>
