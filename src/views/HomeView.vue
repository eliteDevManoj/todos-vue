<template>
  <div class="home">
    <BaseModal title="Add new task" v-if="showTaskModal" @close="toggleTaskModal"/>
    <BaseButton class="btn-primary"  type="submit" label="save" @click="toggleTaskModal"/>
    <BaseTable :headers="tableHeaders" :items="tableData">
        <template #column0="{ entity }">
          {{ entity.name }}
        </template>

        <template #column1="{ entity }">
          {{ entity.designation }}
        </template>

        <template #column2="{ entity }">
          <span v-for="(skill, i) in entity.skills" :key="`${skill}-${i}`">
           <span v-if="i==entity.skills.length-1"> {{ `${skill}. ` }}</span>
           <span v-else> {{ `${skill}, ` }}</span>
          </span>
        </template>

        <template #column3="">
          <BaseButton class="btn-danger" label="delete" type="button" style="width: 70px"/>
        </template>
    </BaseTable>
  </div>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import BaseModal from '../components/BaseModal.vue'
import BaseTable from '../components/BaseTable.vue'

import { ref } from 'vue'

const showTaskModal = ref(false)

const tableHeaders = ref([
  'Name',
  'Designation',
  'Skills',
  'Actions'
])

const tableData = ref([
  {
    name: 'James',
    designation: 'Executive',
    skills: ['PHP', 'Laravel']
  },
  {
    name: 'Carol',
    designation: 'Manager',
    skills: ['Vue.js', 'Pinia', 'Vue-router']
  },
  {
    name: 'Sam',
    designation: "Director",
    skills: ['WordPress', 'Zoho CRM', 'GIT']
  }
])

function toggleTaskModal() {
  showTaskModal.value = !showTaskModal.value
}

</script>
