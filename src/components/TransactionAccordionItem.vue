<script setup lang="ts">
import { ref } from 'vue'
import Transaction from '@models/Transaction';

const props = defineProps<{
  transaction: Omit<Transaction, '#id'>
}>()

const description = ref(props.transaction.details)

</script>

<template>
  <section class="heading" slot="heading">
    <div>
      <label class="header">{{ transaction.name }}</label>
      <p>{{ transaction.amount }} {{ transaction.currency }}</p>
    </div>
    <span class="date">{{ transaction.date }}</span>
  </section>
  <section>
    <label class="header">Details</label>
    <p>{{ description }}</p>
  </section>
</template>

<style scoped>
.date {
  font-style: italic;
}

.heading {
  display: flex;
  justify-content: space-between;
}

.header {
  font-size: larger;
  font-weight: bold;
}

p {
  margin: 0 0
}
</style>