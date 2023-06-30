<!-- https://vuejs.org/guide/components/v-model.html -->

<template>
    <div class="input">
        <div class="svg" v-if="svg_value">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path color="gray" fill-rule="evenodd" clip-rule="evenodd"
                    :d="svg_value"
                    fill="currentColor" />
            </svg>
        </div>
        <input :disabled="disabled" :type="type" :placeholder="placeholder" :value="input_value" @input="$emit('update_value', $event.target.value)">
    </div>
</template>

<script setup>
defineProps({
    svg_value: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    disabled:{
        type: String
    }
})
/* const input_value_updated = defineEmits('update_input_value') */
</script>

<style scoped>
.input {
    margin: 10px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
}

input {
    width: 100%;
    padding: 0px 20px;
    border: 0px;
    border-radius: 5px;
    outline: none;
    height: 50px;
    font-weight: 600;

}

.svg {
    padding: 0px 20px;
    display: grid;
    place-items: center;
}

</style>