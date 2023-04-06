<script setup lang="ts">
import { ref } from 'vue';
import Alo from '@components/Alo.vue'

const count = ref(0);

function onClick() {
  count.value++;
}
</script>

<template>
  <div>
    <Alo />
    <fluent-card>
      <fluent-button appearance="accent" v-on:click="onClick">{{ count }}</fluent-button>
    </fluent-card>
  </div>
</template>
