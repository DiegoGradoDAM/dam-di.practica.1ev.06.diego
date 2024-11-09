<template>
    <div class="header">
        <img src="../assets/logo.png" alt="logo" class="logo">
        <span class="title">Practica DI Primera Evaluación</span>
    </div>
</template>
<script setup>
</script>
<style scoped>
    .header {
        display: flex;
        align-items: center;
        background-color: #f0f8ff; /* Un tono azul claro */
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 20px; /* margen alrededor del contenedor */
    }

    .logo {
        height: 50px;
        width: 50px;
        margin-right: 15px;
    }

    .title {
        
        font-size: 1.2em;
        color: #1a73e8; /* Azul más oscuro para el texto */
        font-weight: bold;
    }
</style>
