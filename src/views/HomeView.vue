<template>
  <div class="home">
    <BaseModal title="Add new task" v-if="showTaskModal" @close="toggleTaskModal" @submit="submitEmployee">
     <template #modal-body>
      <input type="text" v-model="employeeStore.selectedEmployee.emp_email">

      <input type="text" v-model="employeeStore.selectedEmployee.emp_name">
     </template>
    </BaseModal>
    <BaseButton class="btn-primary"  type="submit" label="create +" @click="toggleTaskModal"/>
    <BaseTable :headers="tableHeaders" :items="employeeStore.employees">
        
        <template #column0="{ entity }">
          {{ entity.id }}
        </template>

        <template #column1="{ entity }">
          {{ entity.emp_name }}
        </template>

        <template #column2="{ entity }">
          {{ entity.emp_code }}
        </template>

        <template #column3="{ entity }">
          {{ entity.emp_email }}
        </template>

        <template #column4="{ entity }">
          {{ entity.emp_phone }}
        </template>

        <template #column5="{ entity }">
          <BaseButton class="btn-danger" label="delete" type="button" @click="employeeStore.deleteEmployee(entity.id)"/>
          <BaseButton class="btn-primary" label="update" type="button" @click="toggleTaskModal(entity.id)"/>
        </template>
    </BaseTable>
  </div>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import BaseModal from '../components/BaseModal.vue'
import BaseTable from '../components/BaseTable.vue'

import { onMounted, ref, reactive } from 'vue'
import { useEmployeeStore } from '@/store/employee'

const employeeStore = useEmployeeStore()

const showTaskModal = ref(false)

const tableHeaders = reactive([
  'id',
  'name',
  'emp code',
  'email',
  'phone',
  'Actions'
])

onMounted(() => {
  employeeStore.fetchEmployees()
})

async function toggleTaskModal(id = null) {
 
  if(id) {
    await employeeStore.fetchEmployee(id)
    showTaskModal.value = !showTaskModal.value
    return
  }

  showTaskModal.value = !showTaskModal.value
}

async function submitEmployee() {
  if(employeeStore.selectedEmployee.id){

    await employeeStore.updateEmployee()
  }
  else{

    await employeeStore.storeEmployee()
  }

  showTaskModal.value = !showTaskModal.value
  employeeStore.clearEmployee()
}
</script>
