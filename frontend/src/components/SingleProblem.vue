<template>
    <div class="notif" :data-feedback="props.feedback">
        <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :color="props.color" fill-rule="evenodd" clip-rule="evenodd" :d="props.svg_value" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                    fill="currentColor" />
            </svg>
            <slot></slot>
        </span>
        <button class="btn-solve" @click="resolve"> Résolu </button>
    </div>
</template> 
    
<script setup lang="ts">

const emit = defineEmits(['solve_problem']);

const resolve = () => {
    emit('solve_problem');
};

const props = defineProps({
    svg_value: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
})

</script>
    
<style scoped>
.notif {
    position: relative;
    background-color: #ff9696;
    color : #dd0426;
    border-left: 3px solid;
    border-radius: 4px;
    padding: 15px 5px;
    display: grid;
    grid-template-columns: 90% 10%;
    padding: 25px 0px;
    margin: 10px 0px;
    overflow: hidden;
}

span {
    display: flex;
    flex-direction: row;
    align-items: center;
}

svg {
    margin: 0px 10px;
}
.btn-solve {
    background-color: #dd0426;
}
.green .btn-solve {
    background-color: #004b23;
}
.notif button {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 150px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;
    transition: all .2s
}
.notif button:hover {
    background-color: #ff6666;
    color: white;
    font-weight: bold;
}
</style>