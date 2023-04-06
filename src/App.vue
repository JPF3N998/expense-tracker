<script setup lang="ts">
import { ref } from 'vue';
import Layout from '@views/Layout.vue'

const count = ref(0);

function onClick() {
  count.value++;
}
</script>

<template>
  <Layout></Layout>
</template>
