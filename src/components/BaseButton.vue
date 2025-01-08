<template>
    <button :type="type" :disabled="disabled" :class="classObject" :style="style"> {{ label }}</button>
</template>

<style scoped>
.btn {
    width: 75px;
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
    box-shadow: 2px 3px 6px #030f8f;
    background: linear-gradient(90deg, #515ff3, #818bff);
    color: white;
}

.btn-danger {
    box-shadow: 2px 3px 6px #850606;
    background: linear-gradient(90deg, #fb1b1b, #f91f1f70);
    color: white;
}

.btn-warning {
    background-color: #e7e704db;
    color: black;
}

.btn-success {
    box-shadow: 2px 3px 6px #005b00;
    background: linear-gradient(90deg, #00a500, #20cf20);
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
    style: Object,
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