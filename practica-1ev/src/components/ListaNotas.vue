
<template>
    <Botonera
    @nuevaNota="crearNuevaNota" @clonarSeleccionada="clonarSeleccionada" @borrarSeleccionada="borrarSeleccionada"
    @limpiarTodo="limpiarTodo" @seleccionarTodo="seleccionarTodo" @invertir="invertir" @quitarSeleccion="quitarSeleccion"
    @consola="consola" @limpiarDebug="limpiarDebug">
    </Botonera>
    <div class="listaNotas">
        <div v-for="nota in notas" :key="nota.id">
        <Nota
            :id="nota.id"
            :idOriginal="nota.idOriginal"
            :esSeleccionada="notasSeleccionadas.includes(nota.id)"
            @duplicar="duplicarNota"
            @eliminar="eliminarNota"
            @seleccionar="seleccionarNota"
        />
        </div>
    </div>
    <Consola v-show="mostrarConsola" :logs="textoConsola"/>
</template>
  
<script setup>
    import { ref, reactive} from 'vue';
    import Nota from './Nota.vue';
    import Botonera from './Botonera.vue';
    import Consola from './Consola.vue';
    import {actualizarHora} from '../LogicaHoras';

    // Datos reactivos
    const notas = ref([
        reactive({ id: 0, idOriginal: 0}),
        reactive({ id: 1, idOriginal: 1})
    ]);
    const mostrarConsola = ref(false);
    const textoConsola = ref([]);
    const notasSeleccionadas = ref([])

    // Función para alternar la selección de una nota
    const seleccionarNota = (id) => {
    if (notasSeleccionadas.value.includes(id)) {
        // Si la nota ya está seleccionada, la desmarcamos quitándola del array
        notasSeleccionadas.value = notasSeleccionadas.value.filter(notaId => notaId !== id);
        textoConsola.value.push({value:"Nota con id "+id+" desmarcada. "+actualizarHora()});
        console.log(textoConsola.value);
    } else {
        // Si la nota no está seleccionada, la agregamos al array
        notasSeleccionadas.value.push(id);
        textoConsola.value.push({value:"Nota con id "+id+" marcada. "+actualizarHora()});
    }
    };
    
// Métodos para manipular las notas que vienen de Nota
    const duplicarNota = (id) => {
        const notaOriginal = notas.value.find(nota => nota.id === id);
        if (notaOriginal) {
            const nuevaNota = {
            id: generarNuevoId(notas.value),
            idOriginal: notaOriginal.idOriginal,
            };
            notas.value.push(nuevaNota);
            textoConsola.value.push({value:"Nota con id "+id+" duplicada. "+actualizarHora()});
        }
    };
    //Funcion para buscar en la lista de notas el ID mas alto y devolverlo
    const encontrarIdMaximo = (notas) => {
        let maxId = 0;

        for (let i = 0; i < notas.length; i++) {
            if (notas[i].id > maxId) {
            maxId = notas[i].id;
            }
        }
        return maxId;
    };
    const eliminarNota = (id) => {
        notas.value = notas.value.filter(nota => nota.id !== id);
        textoConsola.value.push({value:"Nota con id "+id+" eliminada. "+actualizarHora()});
    };
    const generarNuevoId = (notas) => {
        const maxId = encontrarIdMaximo(notas);
        return (maxId+1);
    };

//Metodos que vienen de la botonera

    const crearNuevaNota = () => {
        const nuevaNota = {
        id: generarNuevoId(notas.value),
        idOriginal: generarNuevoId(notas.value),
        };
        notas.value.push(nuevaNota);
        textoConsola.value.push({value:"Nota con id "+nuevaNota.id+" creada. "+actualizarHora()});
    };

    const clonarSeleccionada = () => {
        notasSeleccionadas.value.forEach(nota => {
            duplicarNota(nota);
        });
    }

    const borrarSeleccionada = () => {
        notasSeleccionadas.value.forEach(nota => {
            eliminarNota(nota);
        });
    }
    const limpiarTodo = () => {
        notas.value = [];
        notasSeleccionadas.value = [];
        textoConsola.value.push({value:"Limpiar. Todas las notas eliminadas. "+actualizarHora()});
    }

    const seleccionarTodo = () => {
        notas.value.forEach(nota => {
            notasSeleccionadas.value.push(nota.id);
            textoConsola.value.push({value:"Todas las notas seleccionadas. "+actualizarHora()});
        })
    }

    const invertir = () => {
        notas.value.forEach(nota => {
            seleccionarNota(nota.id)
        })
    }

    const quitarSeleccion = () => {
        notasSeleccionadas.value = [];
        textoConsola.value.push({value:"Todas las notas desmarcadas."+actualizarHora()});
    }
//Metodos para manejar la consola

    const consola = () => {
        if(mostrarConsola.value==false){
            mostrarConsola.value = true;
            textoConsola.value.push({value:"Mostrando Consola."+actualizarHora()});
        }else{
            mostrarConsola.value = false;
            textoConsola.value.push({value:"Consola ocultada."+actualizarHora()});
        }
    }
    const limpiarDebug = () => {
        textoConsola.value = [];
        textoConsola.value.push({value:"Texto de la consola limpiado."+actualizarHora()});
    }
</script>
<style scoped>
    .listaNotas {
    display: flex;
    flex-wrap: wrap; /* Permite que las notas se acomoden en varias filas si es necesario */
    gap: 20px; /* Espacio entre las notas */
    justify-content: center; /* Centra las notas en el contenedor */
    margin: 20px;
    }

    .listaNotas > * {
    width: 200px; /* Asegura que las notas no sean demasiado grandes */
    background-color: #f0f8ff; /* Azul claro */
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
</style>
  