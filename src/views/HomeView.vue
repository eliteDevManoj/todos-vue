<template>
  <div class="home">
    <BaseModal title="Add new task" v-if="showTaskModal" @close="toggleTaskModal"/>
    <BaseButton class="btn-primary"  type="submit" label="save" @click="toggleTaskModal"/>
  </div>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import BaseModal from '../components/BaseModal.vue'

import { ref } from 'vue'

const showTaskModal = ref(false)

function toggleTaskModal() {
  showTaskModal.value = !showTaskModal.value
}

</script>
