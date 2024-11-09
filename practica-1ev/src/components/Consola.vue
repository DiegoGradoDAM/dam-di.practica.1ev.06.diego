<template>
    <div class="consola">
        <ul>
            <li v-for="(log, index) in logs" :key="index">{{ log.value }}</li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Definir las propiedades (props)
const props = defineProps({
    logs: Array
});
</script>

<style>
.consola {
    background-color: black;
    color: white;
    padding: 20px;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    margin-top: 20px; /* Espacio entre la consola y los componentes de arriba */
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    margin-bottom: 8px;
}
</style>
