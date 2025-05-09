<script>
import { Button as PvButton } from "primevue";

export default {
  name: "MemberCard",
  components: { PvButton },
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusColor() {
      switch (this.member.membershipStatus) {
        case 'active':
          return 'darkgreen';
        case 'pending':
          return 'darkgoldenrod';
        case 'inactive':
          return 'darkred';
        default:
          return 'black';
      }
    }
  }
};
</script>

<template>
  <pv-card v-if="member" class="member-card">
    <!-- Profile picture + Name header -->
    <template #header>
      <div class="header">
        <img :src="member.profilePicture" alt="Profile" class="profile-img" />
        <h2 class="name">{{ member.fullName }}</h2>
      </div>

      <!-- Status text -->
      <p class="status" :style="{ color: statusColor }">
        <strong>{{ member.membershipStatus.toUpperCase() }}</strong>
      </p>

      <hr />
    </template>

    <template #content>
      <!-- Personal info -->
      <div class="section">
        <p><strong>DNI:</strong> {{ member.dni }}</p>
        <p><strong>Age:</strong> {{ member.age }}</p>
        <p><strong>Email:</strong> {{ member.email }}</p>
        <p><strong>Phone:</strong> {{ member.phone }}</p>
        <p><strong>Address:</strong> {{ member.address }}</p>
      </div>

      <hr />

      <!-- Membership dates & type -->
      <div class="section">
        <p><strong>Membership Type:</strong> {{ member.membershipType }}</p>
        <p><strong>Start Date:</strong> {{ member.membershipStartDate }}</p>
        <p><strong>Expiration Date:</strong> {{ member.expirationDate }}</p>
      </div>

      <hr />

      <!-- Action buttons -->
      <div class="actions">
        <pv-button label="Edit Details" class="action-btn" @click="$emit('edit-request')"/>
        <pv-button label="Payments" class="action-btn" />
        <pv-button label="Deactivate" class="action-btn"  @click="$emit('deactivate-request')"/>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.p-card {
  background-color: white;
  color: black;
  width: 100%;
  max-width: 400px;
}

.member-card {
  max-width: 400px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.profile-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.75rem;
}

.name {
  margin: 0;
  font-size: 1.5rem;
}

.status {
  font-weight: bold;
}

.section {
  margin: 0.75rem 0;
}

/* Celeste lineas (hr) */
hr {
  border: 1px solid #A7D1D2;
  margin: 1rem 0;
}

/* Action buttons */
.actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.action-btn {
  width: 100%;
  background-color: white;
  border: 1px solid #A7D1D2;
  color: black; /* Texto negro */
}

/* Hover, ahora con !important para asegurar que no sea sobrescrito */
.action-btn:hover {
  background-color: #A7D1D2 !important; /* Fondo celeste en hover */
  color: white !important; /* Texto blanco en hover */
  border-color: #8FBFC0 !important;
}
</style>
