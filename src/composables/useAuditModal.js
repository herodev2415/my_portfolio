import { ref } from 'vue'

const auditOpen = ref(false)

export function useAuditModal() {
  function openAudit() {
    auditOpen.value = true
  }

  function closeAudit() {
    auditOpen.value = false
  }

  return {
    auditOpen,
    openAudit,
    closeAudit
  }
}
