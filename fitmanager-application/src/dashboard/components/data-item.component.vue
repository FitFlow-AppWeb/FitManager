<script>
/**
 * Data Item Component
 *
 * This component is used to display individual data items in the bottom list of the dashboard.
 * It expects a `data` prop, which contains details such as the title, image, value, and change data.
 * It uses PrimeVue's `PvDivider` component for visual separation between sections.
 *
 * Author: Tomio Nakamurakare
 */

import { Data } from "../model/data.entity.js";
import { useRouter, useRoute } from 'vue-router'; // Importar useRoute

export default {
  name: "data-item.component",

  props: {
    data: { type: Data, required: true }
  },

  setup(props) {
    const router = useRouter();
    const route = useRoute(); // Inicializar useRoute

    // Función para obtener el nombre de la ruta objetivo
    const getTargetRouteName = (title) => {
      switch (title) {
        case 'Total Members':
        case 'Active Members':
        case 'New Members/Month':
        case 'Pending Payments':
          return 'Members';
        case 'Attendance Today':
          return 'Attendance';
        case 'Revenue/Month':
          return 'Finances';
        default:
          return 'Dashboard'; // Ruta por defecto
      }
    };

    // Función para navegar a la sección
    const navigateToSection = () => {
      const routeName = getTargetRouteName(props.data.title);
      router.push({ name: routeName });
    };

    // Propiedad computada para determinar si el data-item actual está activo
    const isActive = () => {
      const targetRouteName = getTargetRouteName(props.data.title);
      // Compara el nombre de la ruta actual con el nombre de la ruta objetivo del data-item
      return route.name === targetRouteName;
    };

    return {
      navigateToSection,
      isActive // Exponer isActive al template
    };
  }
}
</script>

<template>
  <div class="custom-card" :class="{ 'active-data-item': isActive() }" role="region" aria-labelledby="data-item-title">
    <div class="custom-card-header">
      <p class="title-text" id="data-item-title">{{ data.title }}</p>
      <div @click="navigateToSection" class="clickable-icon" :aria-label="`go to ${data.title} section`" role="button" tabindex="0">
        <img src="../../../public/assets/expand.svg" alt="Expand icon">
      </div>
    </div>

    <div class="custom-card-body">
      <div class="numbers">
        <img :alt="data.title" :src="data.image" class="image-fit" />
        <p class="number">{{ data.value }}</p>
      </div>

      <pv-divider class="custom-divider"/>

    </div>
  </div>
</template>


<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}

/* Styling for the divider between sections */
.custom-divider {
  margin-bottom: 1rem;
  border-bottom: 1.5px solid #000000;
}

/* Main card styling */
.custom-card {
  background-color: #fff; /* White background */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Light shadow effect */
  max-width: 250px; /* Maximum width of the card */
  min-height: 80px;
  margin: 1rem; /* Margin around the card */
  transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Añade box-shadow a la transición */
  border: 1px solid transparent; /* Define un borde transparente por defecto */
}

/* Header styling */
.custom-card-header {
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 1rem; /* Padding for alignment */
}

/* Body of the card, aligned in a column */
.custom-card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-card:hover:not(.active-data-item) {
  background-color: #96bcbd; /* Color de hover del sidebar, para un efecto consistente */
  cursor: pointer;
}

/* Considera si el cursor pointer debe ir en .custom-card si el click es en la imagen o en todo el card */
/* Si el click es en toda la tarjeta: */
/* .custom-card {
  cursor: pointer;
}
.custom-card-header .clickable-icon {
  cursor: default; // Opcional para deshabilitar el cursor pointer extra en el ícono
}

/* Styling for the numbers section in the card */
.numbers {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem; /* Space between the image and number */
}

/* Styling for the number text */
.number {
  font-size: 1.8rem;
  margin:0; /* No margin around the number */
}

/* Image inside the card */
.image-fit {
  height: 40px; /* Fixed width for the image */
  object-fit: cover; /* Ensure image covers its container */
}

/* Styling for the title text */
.title-text {
  font-size: 1.1rem; /* Size of the title text */
  font-weight: normal; /* Normal font weight */
  color: #575757;
}



.clickable-icon {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Animación */
  transition: transform 0.5s ease-in-out; /* Transición para el efecto de escala */
}

.clickable-icon:hover {
  transform: scale(1.1); /* Ligeramente más grande al hacer hover */
  background-color: #a7d1d2;
}

.active-data-item {
  /* Usar los colores exactos del sidebar para el estado activo */
  background-color: #86a7a8; /* Color de fondo del item activo en el sidebar */
  color: #222222; /* Color de texto si también quieres que cambie */
  border: 1px solid #769798; /* Un borde sutil que combine con el color de fondo o el color de texto del sidebar */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para darle un poco de profundidad */
}

/* Asegúrate de que estas variables CSS estén definidas en alguna parte de tu CSS global
   o reemplaza los var() por los valores directos de color que usa tu sidebar.
   Por ejemplo, si en tu sidebar usas directamente background-color: #ABCDEF; */
/*
:root {
  --sidebar-active-bg-color: #e6f2ff;
  --sidebar-active-border-color: #007bff;
}
</style>
