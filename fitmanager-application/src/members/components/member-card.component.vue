<script>
/**
 * Member Card Component
 *
 * This component displays detailed information about a single member,
 * including their profile picture, personal and contact information,
 * membership status and dates. It also provides action buttons to
 * edit or deactivate the member.
 *
 * Author: Cassius Martel
 */

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
  <pv-card
      v-if="member"
      class="member-card"
      role="region"
      :aria-label="`Profile card for ${member.fullName}`"
  >
    <!-- Profile picture + Name header -->
    <template #header>
      <div class="header">
        <img
            src="https://i.imgur.com/jVyXxXV.jpg"
            alt="Profile picture"
            class="profile-img"
            role="img"
            :aria-label="`Profile picture of ${member.fullName}`"
        />
        <h2 class="name" role="heading" aria-level="2">{{ member.fullName }}</h2>
      </div>

      <!-- Status text -->
      <p class="status" :style="{ color: statusColor }">
        <strong>{{ member.membershipStatus.toUpperCase() }}</strong>
      </p>

      <hr />
    </template>

    <template #content>
      <!-- Personal info -->
      <div class="section" role="group" aria-label="Personal information">
        <p><strong>DNI:</strong> {{ member.dni }}</p>
        <p><strong>{{ $t("members.age") }}:</strong> {{ member.age }}</p>
        <p><strong>{{ $t("members.email") }}:</strong> {{ member.email }}</p>
        <p><strong>{{ $t("members.phone") }}:</strong> {{ member.phone }}</p>
        <p><strong>{{ $t("members.address") }}:</strong> {{ member.address }}</p>
      </div>

      <hr />

      <!-- Membership dates & type -->
      <div class="section" role="group" aria-label="Membership details">
        <p><strong>{{ $t("members.membership-type") }}:</strong> {{ member.membershipType }}</p>
        <p><strong>{{ $t("members.start-date") }}:</strong> {{ member.membershipStartDate }}</p>
        <p><strong>{{ $t("members.expiration-date") }}:</strong> {{ member.expirationDate }}</p>
      </div>

      <hr />

      <!-- Action buttons -->
      <div class="actions" role="group" aria-label="Action buttons">
        <pv-button
            :label="$t('members.edit-details')"
            class="action-btn"
            @click="$emit('edit-request')"
        />
        <pv-button
            :label="$t('members.payments')"
            class="action-btn"
            @click="$emit('payments-request')"

        />
        <pv-button
            :label="$t('members.remove-member')"
            class="action-btn"
            @click="$emit('deactivate-request')"
        />
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

hr {
  border: 1px solid #A7D1D2;
  margin: 1rem 0;
}

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
  color: black;
}

.action-btn:hover {
  background-color: #A7D1D2 !important;
  color: white !important;
  border-color: #8FBFC0 !important;
}
</style>
