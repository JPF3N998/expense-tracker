<script setup lang="ts">
import TransactionAccordionItem from '@components/TransactionAccordionItem.vue';

import { useTransactionsStore } from '@stores/transactionsStore';

const transactionsStore = useTransactionsStore();
</script>

<template>
  <div class="accordionWrapper">
    <fluent-accordion expand-mode="single">
      <fluent-accordion-item v-for="tx in transactionsStore.transactions" :key="tx.getId()">
        <TransactionAccordionItem :transaction="tx" />
      </fluent-accordion-item>
    </fluent-accordion>
  </div>
</template>

<style>
fluent-accordion-item::part(button) {
  color: var(--foreground-on-accent-rest);
}

fluent-accordion-item::part(heading) {
  background-color: var(--accent-fill-rest);
  border-radius: calc(var(--layer-corner-radius) * 1px);
}

fluent-accordion-item::part(heading):hover {
  background-color: var(--accent-fill-hover);
  border-radius: calc(var(--layer-corner-radius) * 1px);
}

fluent-accordion-item[expanded]::part(heading) {
  border-radius: calc(var(--layer-corner-radius) * 1px) calc(var(--layer-corner-radius) * 1px) 0 0;
}
</style>

<style scoped>
.accordionWrapper {
  max-height: 45%;
  overflow: overlay;
  padding: 1rem;
}
</style>
