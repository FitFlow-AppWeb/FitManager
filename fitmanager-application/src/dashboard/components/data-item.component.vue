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

import { Data } from "../model/data.entity.js"; // The data model for the statistics

export default {
  name: "data-item.component", // Name of the component

  props: {
    data: { type: Data, required: true } // Requires the data prop to be passed into the component
  }
}
</script>

<template>
  <!-- Card layout for displaying individual data items -->
  <div class="custom-card">
    <!-- Header section with the title and an expandable icon -->
    <div class="custom-card-header">
      <p class="title-text">{{ data.title }}</p>
      <img src="../../../public/assets/expand.svg" :alt="`go to ${data.title} section`">
    </div>

    <!-- Body of the card with the numbers and additional data details -->
    <div class="custom-card-body">
      <div class="numbers">
        <!-- Display image, and value in the card body -->
        <img :alt="data.title" :src="data.image" class="image-fit" />
        <p class="number">{{ data.value }}</p>
      </div>

      <!-- Divider between sections -->
      <pv-divider class="custom-divider"/>

      <!-- Change box showing the positive/negative change in value -->
      <div class="change-box" :class="{'positive': data.change.startsWith('+'),'negative': data.change.startsWith('-')}">
        <span class="triangle">
          {{ data.change.startsWith('+') ? '▲' : '▼' }} <!-- Up/Down arrow based on change -->
        </span>
        <span class="change-text">
          {{ data.change }} — {{ data.period }} <!-- Change value and the period it corresponds to -->
        </span>
      </div>
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
  font-size: 1rem; /* Size of the title text */
  font-weight: normal; /* Normal font weight */
}

/* Styling for the change box at the bottom */
.change-box {
  margin-bottom: 1rem;
  font-size: 0.75rem; /* Smaller font size for the change text */
}

/* Positive change styling (green) */
.positive {
  color: #48bb78; /* Green color for positive changes */
}

/* Negative change styling (red) */
.negative {
  color: #f56565; /* Red color for negative changes */
}
</style>
