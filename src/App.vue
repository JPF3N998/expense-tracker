<script setup lang="ts">
import Layout from '@views/Layout.vue'
import TheForm from '@components/TheForm.vue';
import TransactionsAccordion from '@components/TransactionsAccordion.vue';
import OpenDialogButton from '@components/OpenDialogButton.vue';
</script>

<template>
  <Layout>
    <TheForm />
    <TransactionsAccordion />

    <div class="ctaWrapper">
      <OpenDialogButton :button-text="'+ Add new transaction'" v-slot="slotProps">
        <h1>Dialog body</h1>
        <button @click="slotProps.closeDialog">Close</button>
      </OpenDialogButton>
    </div>
  </Layout>
</template>

<style scoped>
.ctaWrapper {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>