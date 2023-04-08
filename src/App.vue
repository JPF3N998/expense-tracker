<script setup lang="ts">
import Layout from '@views/Layout.vue'
import TheForm from '@components/TheForm.vue';
import TransactionsAccordion from '@components/TransactionsAccordion.vue';
</script>

<template>
  <Layout>
    <TheForm />
    <TransactionsAccordion #sidenav />
  </Layout>
</template>
