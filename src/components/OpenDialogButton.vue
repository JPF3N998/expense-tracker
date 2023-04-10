<script setup lang="ts">
import { ref } from 'vue';

const dialog: any = ref(null);

const props = defineProps({
  buttonText: String,
});

function openDialog() {
  dialog.value.hidden = false;
}

function closeDialog() {
  dialog.value.hidden = true;
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeDialog();
  }
}
</script>

<template>
  <div @keydown="handleKeyDown">
    <fluent-button class="ctaWrapper" appearance="accent" ref="dialogOpener" @click="openDialog">
      {{ props.buttonText }}
    </fluent-button>
    <fluent-dialog ref="dialog" hidden trap-focus modal>
      <div class="contentWrapper">
        <slot :closeDialog="closeDialog">No modal content provided</slot>
      </div>
    </fluent-dialog>
  </div>
</template>

<style scoped>
/* To enable dialog resizing: https://github.com/microsoft/fluentui-blazor/issues/207#issuecomment-1216541219 */
::part(control) {
  --dialog-height: min-content;
}

.contentWrapper {
  min-height: fit-content;
  max-height: 96%;
  overflow-y: overlay;
  padding: 1rem;
}

.ctaWrapper {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>
