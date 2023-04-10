<script setup lang="ts">
import Layout from '@views/Layout.vue';
import TheFormWrapper from '@components/modal_bodies/TheFormWrapper.vue';
import TransactionsAccordion from '@components/TransactionsAccordion.vue';
import OpenDialogButton from '@components/OpenDialogButton.vue';
</script>

<template>
  <Layout>
    <TransactionsAccordion />

    <div class="ctaWrapper">
      <OpenDialogButton :button-text="'+ Add new transaction'" v-slot="slotProps">
        <TheFormWrapper @closeDialog="slotProps.closeDialog" />
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
