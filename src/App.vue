<script setup lang="ts">
import { onMounted } from 'vue';
import { useTransactionsStore } from '@stores/transactionsStore';
import Layout from '@views/Layout.vue';
import TheFormWrapper from '@components/modal_bodies/TheFormWrapper.vue';
import TransactionsAccordion from '@components/TransactionsAccordion.vue';
import OpenDialogButton from '@components/OpenDialogButton.vue';

const transactionsStore = useTransactionsStore()

onMounted(() => {
  transactionsStore.loadFromDatabase()
})

</script>

<template>
  <Layout>
    <TransactionsAccordion />
    <template #footer>
      <OpenDialogButton :button-text="'+ Add new transaction'" v-slot="slotProps">
        <TheFormWrapper @closeDialog="slotProps.closeDialog" />
      </OpenDialogButton>
    </template>
  </Layout>
</template>
