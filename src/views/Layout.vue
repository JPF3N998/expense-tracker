<template>
  <div class="sidebar">
    <nav>
      <slot name="sidenav">Sidebar content</slot>
    </nav>
    <main>
      <slot>Main content</slot>
    </main>
  </div>
</template>

<style scoped>
.sidebar {
  display: grid;
  grid-template-columns: fit-content(20ch) minmax(min(50vw, 30ch), 1fr);
}
</style>
