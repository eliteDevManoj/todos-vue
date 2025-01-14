<template>
    <div :class="classObject" :style="style">
        <div class="modal-header">
            <h3>{{ title }}</h3>
        </div>
       <div class="modal-body">
        <slot name="modal-body"></slot>
       </div>
        <div class="modal-footer">
            <BaseButton type="button" class="btn-primary" label="save" style="margin-right: 10px;" @click="submitModal"/>
            <BaseButton type="button" class="btn-danger" label="cancel" style="margin-left: 10px;" @click="closeModal"/>
        </div>
    </div>
</template>

<style scoped>

.modal {
    border: 1px solid black;
    border: 1px solid #0011bf26;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #dbdbdb;
    position: absolute;
    height: auto;
    max-height: 550px;
    top: 10%;
}

.modal-medium {
    width: 50%;
    margin: 0px 25%;
}

.modal-header {
    background: #f7f7f7;
    border-bottom: 1px solid #83829533;
}

.modal-body {
    height: auto;
    max-height: 350px;
    overflow-y: auto;
    padding: 3%;
    text-align: left;
    background: #f7f7f7;
}

.modal-body p {
    line-height: 1.45;
    font-size: 14px;
}

.modal-body::-webkit-scrollbar {
  width: 1px; /* Adjust the width of the vertical scrollbar */
}

.modal-body::-webkit-scrollbar-track {
    background-color: #f5f5f5;
}

.modal-body::-webkit-scrollbar-thumb {
    background-color: #0013dd;
    border-radius: 1px;
}

/* Optional: Change thumb color on hover */
.modal-body::-webkit-scrollbar-thumb:hover {
  background-color: #f7f4f4;
}

.modal h3 {
    padding: 15px;
    margin: 0px;
    background: #f7f7f7;
}

.modal-footer {
    border-top: 1px solid #c3b7b7;
    padding: 15px;
    margin: 0px;
    background: #f7f7f7;
}
</style>

<script setup>
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
    title: String,
    class: String,
    style: Object
})

const emit = defineEmits([
    'close',
    'submit'
])

const classObject = computed({
    get() {
        return {
            'modal': true,
            'modal-medium': true
        }
    }
})


function closeModal() {
    emit('close')
}

function submitModal() {
    emit('submit')
}
</script>

