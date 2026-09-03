<template>
  <div class="app-shell">
    <AppNavbar />
    <main>
      <RouterView />
    </main>
    <AppFooter />
    <AuditModal />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import AuditModal from './components/AuditModal.vue'
</script>
