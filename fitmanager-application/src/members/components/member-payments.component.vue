<script>
import { MemberApiService } from "../services/member-api.service.js";

export default {
  name: "MemberPayments",
  props: {
    memberId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      payments: []
    };
  },
  async mounted() {
    try {
      const service = new MemberApiService();
      const response = await service.getAllPayments();
      const allPayments = response.data;
      this.payments = allPayments.filter(p => p.memberId === this.memberId);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString();
    }
  }
};
</script>

<template>
  <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="paymentsTitle">
    <div class="modal-content">
      <h2 id="paymentsTitle" class="modal-title">{{ $t("members.payments-title") }}</h2>

      <div v-if="payments.length > 0">
        <ul>
          <li v-for="payment in payments" :key="payment.id">
            <strong>{{ formatDate(payment.date) }}</strong> —
            {{ payment.amount }} {{ payment.currency }} ({{ payment.method }})
          </li>
        </ul>
      </div>
      <div v-else>
        <p>{{ $t("members.no-payments") }}</p>
      </div>

      <div class="actions">
        <pv-button
            :label="$t('general.close')"
            class="p-button-danger"
            @click="$emit('close')"
            aria-label="Close payments modal"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 450px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #A7D1D2;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
}

li:last-child {
  border-bottom: none;
}

.actions {
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
}
</style>
