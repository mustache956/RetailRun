<template>
        <div class="select">
            <select   @input="$emit('update_value', $event.target.value)">
                <option selected>Select an option</option>
                <option v-for="(option,index) in options" :key="index" :value="option" >{{option}}</option>
            </select>
        </div>
</template>

<script setup>
defineProps({
    options:[String]
})
</script>
<style scoped>
.select{
    margin: 10px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
}

select{
    width: 100%;
    padding: 0px 20px;
    border: 0px;
    border-radius: 5px;
    outline: none;
    height: 50px;
}
</style>