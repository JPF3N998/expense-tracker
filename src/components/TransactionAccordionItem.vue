<script setup lang="ts">
import { Ref, ref } from 'vue'
import Transaction from '@models/Transaction';

const props = defineProps<{
  transaction: Omit<Transaction, '#id'>
}>()

defineEmits<{
  (e: 'deleteTransaction', transactionId: string): void
}>()

const description = ref(props.transaction.details)

const deleteBtn: Ref<HTMLElement | null> = ref(null)

// How to set color to specific elements
// onMounted(() => {
//   if (!!deleteBtn.value) {
//     accentBaseColor.setValueFor(deleteBtn.value, SwatchRGB.create(92,209,170))
//   }
// })

</script>

<template>
  <section class="heading" slot="heading">
    <div>
      <label class="header">{{ transaction.name }}</label>
      <p>{{ transaction.amount }} {{ transaction.currency }}</p>
    </div>
    <span class="date">{{ transaction.date }}</span>
  </section>
  <section class="panel">
    <label class="header">Details</label>
    <p>{{ description }}</p>
    <fluent-button ref="deleteBtn" appearance="outline" @click="$emit('deleteTransaction', transaction.id)">Delete</fluent-button>
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

.panel {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

p {
  margin: 0 0
}
</style>