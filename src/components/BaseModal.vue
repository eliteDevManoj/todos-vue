<template>
    <div :class="classObject" :style="style">
        <div class="modal-header">
            <h3>{{ title }}</h3>
        </div>
       <div class="modal-body">
        <p> Ut in arcu quis magna consectetur dictum. Vivamus maximus, diam at pulvinar malesuada, sem lectus finibus erat, in facilisis massa lorem ut ipsum. Nullam lacinia nisl ac magna interdum dapibus. Morbi in venenatis arcu. Duis cursus vitae purus ut porta. Integer id semper nisi, at ultricies dolor. Aenean ullamcorper mi sollicitudin urna porta rhoncus. Donec id purus a ligula ultrices tempus. Donec velit magna, dictum id tristique nec, placerat in orci.
            Donec a tincidunt mi, non bibendum augue. Morbi sed imperdiet risus. Nulla tincidunt velit sit amet neque commodo dignissim. Nulla suscipit lacus nec eros blandit, eu pretium libero tempus. Aliquam justo tellus, aliquam nec dictum ac, tempus id mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ullamcorper mauris sit amet mollis dictum. In ullamcorper pellentesque neque quis porttitor. Quisque hendrerit tellus iaculis urna lobortis, consequat efficitur augue euismod. Quisque interdum lobortis dui, vitae tempor ex ultricies quis.

Donec gravida urna ac ex posuere placerat. Etiam nec erat ut lectus ullamcorper volutpat. Aenean iaculis, elit a interdum sollicitudin, est augue lobortis lorem, vel porta metus quam at nulla. Nunc blandit porta egestas. Proin condimentum nunc arcu, nec lobortis ex luctus dictum. Nam in commodo ipsum. Pellentesque fermentum nunc maximus risus interdum lacinia.

Nullam ligula metus, iaculis quis dui et, volutpat faucibus felis. Quisque tristique a magna in egestas. Sed venenatis tincidunt nulla, ac consequat est. Sed hendrerit pulvinar nisl, molestie ultricies metus consequat in. Phasellus quis nunc lobortis sapien dignissim porta. Praesent nec fermentum sem. Nullam sit amet lobortis libero. Praesent elit lorem, dapibus eget molestie sit amet, sodales at lectus. Cras id turpis sed lorem sagittis molestie. Nunc dictum a erat sed malesuada. Pellentesque accumsan risus ac dolor volutpat venenatis. Etiam consectetur in nisl malesuada semper.

        </p>
       </div>
        <div class="modal-footer">
            <BaseButton type="button" class="btn-success" label="save"/>
            <BaseButton type="button" class="btn-danger" label="cancel" @click="closeModal"/>
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
    style: String
})

const emit = defineEmits(['close'])

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
</script>

