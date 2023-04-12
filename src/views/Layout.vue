<template>
  <div class="sidebar">
    <nav>
      <slot name="sidenav">Sidebar content</slot>
    </nav>
    <main class="main">
      <slot>Main content</slot>
      <footer class="footer">
        <slot name="footer">Footer content</slot>
      </footer>
    </main>
  </div>
</template>

<style scoped>
.footer {
  height: 10rem;
}

.main {
  padding: 1rem;
}

.sidebar {
  display: grid;
  grid-template-columns: fit-content(20ch) minmax(min(50vw, 30ch), 1fr);
}
</style>
