<template>
    <div class="text_area">
        <textarea rows="" name="description" required @input="$emit('update_value', $event.target.value)"></textarea>
    </div>
</template>


<script setup>

</script>

<style scoped>
.text_area{
    margin: 10px 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
}

textarea{
    width: 100%;
    padding: 10px 10px;
    border: 0px;
    border-radius: 5px;
    outline: none;
    height: 75px;
    resize: none;
}


</style>