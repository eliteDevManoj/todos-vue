<template>
    <div>
        <table>
            <tr class="table-header">
                <th
                    v-for="(header, i) in headers"
                    :key="`${header}${i}`"
                    class="header-item"
                >
                {{ header }}
                </th>
            </tr>
            <tr
                v-for="entity in items"
                :key="`entity-${entity.name}`"
                class="table-rows"
            >
                <td
                    v-for="(header, i) in headers"
                    :key="`${header}-${i}`"
                >
                    <slot :name="`column${i}`" :entity="entity"></slot>
                </td>
            </tr>
        </table>
    </div>
   
</template>

<script setup>

const props = defineProps({
    headers: Array,
    items: Array
})

</script>

<style scoped>

    table {
        background: #f9f7f7;
        margin-top: 10px;
        border: 1px solid #e5e2e2;
        box-shadow: 4px 4px 4px #afa6a6;
        border-radius: 5px;
        padding: 2%;
        width: 100%;
    }

    .table-header {

    }

    .header-item {
        text-align: left;
        border-bottom: 1px solid #ad9e9e;
    }

    .table-rows td {
        text-align: left;
        font-size: 14px;
    }

</style>