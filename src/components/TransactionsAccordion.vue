<script setup lang="ts">
import TransactionAccordionItem from '@components/TransactionAccordionItem.vue';

import { useTransactionsStore } from '@stores/transactionsStore';

const transactionsStore = useTransactionsStore()
</script>

<template>
  <fluent-accordion expand-mode="single">
    <fluent-accordion-item v-for="tx in transactionsStore.transactions" :key="tx.getId()">
      <TransactionAccordionItem :transaction="tx" />
    </fluent-accordion-item>
  </fluent-accordion>
</template>