<template>
    <div id="probleme">
        <span v-for="problem in problems" :key="problem.id">
            <SingleProblem @solve_problem="handleSolveProblem" v-if="problem.solved === false">{{ problem.description}}</SingleProblem>    
        </span>
        
    </div>
</template>

<script setup lang="ts">
import SingleProblem from '../../components/SingleProblem.vue';

const handleSolveProblem = () => {
    alert('dd')
}
const problems = [
    {
        id: 1,
        type: " type ",
        rayon: " Rayon ",
        description: " Problem with tomatoes ",
        solved: false
    },
    {
        id: 2,
        type: " type ",
        rayon: " Rayon ",
        description: " Problem with plates ",
        solved: false
    }
]
</script>
    
<style scoped></style>