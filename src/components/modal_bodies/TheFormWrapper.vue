<script setup lang="ts">
import TheForm from '@components/TheForm.vue';
</script>

<template>
  <div class="formWrapper">
    <TheForm />
    <fluent-button class="closeButton" appearance="stealth" @click="$emit('closeDialog')">
      Close
    </fluent-button>
  </div>
</template>

<style scoped>
.formWrapper {
  display: grid;
  grid-template-columns: 10fr 1fr;
}
</style>
