import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useEmployeeStore = defineStore('employeeStore', () => {

    const employees = reactive([])

    const selectedEmployee = reactive({})

    async function fetchEmployees() {
        this.employees = []
        await axios.get('http://127.0.0.1/lumen-api-demo/public/api/employees')
        .then((res) => {
            this.employees = res.data.data
        })
        .catch((error) => {
           console.log(error)
        })
    }

    async function storeEmployee() {
        await axios.post('http://127.0.0.1/lumen-api-demo/public/api/employees', this.selectedEmployee)
        .then((res) => {
            this.fetchEmployees()
        })
        .catch((error) => {
          console.log(error)
        })
    }

    async function deleteEmployee(id) {
        await axios.delete('http://127.0.0.1/lumen-api-demo/public/api/employees', {
            params: {
                id:id
            }
        })
        .then((res) => {
            this.fetchEmployees()
        })
        .catch((error) => {
          console.log(error)
        })
    }
    
    async function fetchEmployee(id) {
        this.selectedEmployee = {}
        await axios.get('http://127.0.0.1/lumen-api-demo/public/api/employees/fetch', { params : {
            id: id
        }})
        .then((res) => {
            this.selectedEmployee = res.data.data
        })
        .catch((error) => {
            console.log(error)
        })
    }

    async function updateEmployee() {
        await axios.put('http://127.0.0.1/lumen-api-demo/public/api/employees', this.selectedEmployee)
        .then((res) => {
            this.fetchEmployees()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function clearEmployee() {
        this.selectedEmployee = {}
    }

    return {
        employees,
        selectedEmployee,
        storeEmployee,
        deleteEmployee,
        clearEmployee,
        fetchEmployee,
        updateEmployee,
        fetchEmployees
    }
});