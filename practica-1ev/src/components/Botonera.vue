<template>
    <div class="listaBotones">
        <div class="botonGrupo">
            <button><font-awesome-icon :icon="['fas', 'square-plus']" /> Nueva</button>
            <button><font-awesome-icon :icon="['fas', 'clone']" /> Clonar</button>
            <button><font-awesome-icon :icon="['fas', 'trash-can']" /> Borrar</button>
            <button><font-awesome-icon :icon="['fas', 'broom']" /> Limpiar</button>
            <button><font-awesome-icon :icon="['fas', 'square-check']" /> Seleccionar</button>
            <button><font-awesome-icon :icon="['fas', 'arrow-rotate-left']" /> Invertir</button>
            <button><font-awesome-icon :icon="['fas', 'ban']" /> Anular</button>
        </div>
        <div class="botonGrupo">
            <button><font-awesome-icon :icon="['fas', 'bug']" /> Debug</button>
            <button><font-awesome-icon :icon="['fas', 'eraser']" /> Limpiar</button>
            <button><font-awesome-icon :icon="['fas', 'terminal']" /> Consola</button>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
  .listaBotones {
    display: flex;
    flex-direction: column; /* Alinea los divs de botones en columna */
    background-color: #f0f8ff; /* Azul claro */
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
  }

  .botonGrupo {
    display: flex;
    gap: 10px;
    justify-content: center; /* Centra los botones dentro de cada grupo */
    margin-bottom: 10px; /* Espacio entre los grupos de botones */
  }

  .listaBotones button {
    background-color: #1a73e8; /* Azul oscuro */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    min-width: 100px; /* Asegura que los botones tengan un tamaño mínimo uniforme */
  }

  .listaBotones button:hover {
    background-color: #155bb5; /* Azul más intenso al pasar el ratón */
  }

  .listaBotones button:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(26, 115, 232, 0.5);
  }
</style>
