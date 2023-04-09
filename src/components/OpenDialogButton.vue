<script setup lang="ts">
import { ref } from 'vue'

const dialog: any = ref(null)

const props = defineProps({
  buttonText: String
})

function openDialog() {
  console.log('Clicked')
  dialog.value.hidden = false;
}

function closeDialog() {
  dialog.value.hidden = true;
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeDialog()
  }
}

</script>

<template>
  <div @keydown="handleKeyDown">
    <fluent-button appearance="accent" ref="dialogOpener" @click="openDialog">
      {{ props.buttonText }}
    </fluent-button>
    <fluent-dialog ref="dialog" hidden trap-focus modal>
      <slot :closeDialog="closeDialog">No modal content provided</slot>
    </fluent-dialog>
  </div>
</template>