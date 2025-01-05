<template>
    <button :type="type" :disabled="disabled" :class="classObject" :style="style"> {{ label }}</button>
</template>

<style scoped>
.btn {
    width: 100px;
    max-width: 100px;
    height: 35px;
    max-height: 35px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    margin: 2px;
    border: none;
}

.btn-primary {
    box-shadow: 4px 4px 5px #030f8f;
    background: linear-gradient(180deg, #0011bf, #3c4dff);
    color: white;
}

.btn-danger {
    box-shadow: 4px 4px 5px #850606;;
    background: linear-gradient(180deg, #cf0000, #e7000070);
    color: white;
}

.btn-warning {
    background-color: #e7e704db;
    color: black;
}

.btn-success {
    box-shadow: 4px 4px 5px #005b00;
    background: linear-gradient(180deg, #005b00, #3cdb3c);
    color: white;
}

.btn-secondary {
    background-color: grey;
    color: white;
}

.btn-dark {
    background-color: black;
    color: white;
}
</style>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    class: String,
    style: String,
    type: String,
    label: String,
    disabled: Boolean
})

const classObject = computed({
    get() {
        return {
            'btn': true,
            'btn-primary': props.class.includes('btn-primary'),
            'btn-danger': props.class.includes('btn-danger'),
            'btn-warning': props.class.includes('btn-warning'),
            'btn-success': props.class.includes('btn-success'),
            'btn-secondary': props.class.includes('btn-secondary'),
            'btn-dark': props.class.includes('btn-dark')
        }
    }
})
</script>