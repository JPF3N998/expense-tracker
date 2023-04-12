<script setup lang="ts">
import TransactionAccordionItem from '@components/TransactionAccordionItem.vue';

import { useTransactionsStore } from '@stores/transactionsStore';

const transactionsStore = useTransactionsStore();
</script>

<template>
  <div class="accordionWrapper hiddenScrollbar">
    <h1>Transactions</h1>
    <fluent-accordion class="accordion" expand-mode="single">
      <fluent-accordion-item v-for="tx in transactionsStore.transactions" :key="tx.getId()">
        <TransactionAccordionItem :transaction="tx" />
      </fluent-accordion-item>
    </fluent-accordion>
  </div>
</template>

<style>
fluent-accordion-item {
  background-color: var(--neutral-layer-card-container);
  box-shadow: var(--elevation-shadow-card-rest);
}

fluent-accordion-item::part(heading):hover {
  background-color: var(--accent-fill-hover);
  border-radius: calc(var(--layer-corner-radius) * 1px);
}

fluent-accordion-item::part(button):hover {
  border-radius: calc(var(--layer-corner-radius) * 1px);
  color: var(--foreground-on-accent-rest);
}

fluent-accordion-item[expanded]::part(heading) {
  background-color: var(--accent-fill-rest);
  border-radius: calc(var(--layer-corner-radius) * 1px) calc(var(--layer-corner-radius) * 1px) 0 0;
}

fluent-accordion-item[expanded]::part(button) {
  color: var(--foreground-on-accent-rest);
}
</style>

<style scoped>
.accordion {
  row-gap: 0.7rem;
}

.accordionWrapper {
  max-height: 45%;
  overflow: overlay;
  padding: 0.5rem;
}

.hiddenScrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hiddenScrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
