<template>
    <div id="probleme">

        <h3 v-if="problems.some(element => element.solved === false)"> Non-solved problems </h3>
        <span v-for="problem in problems" :key="problem.id">
            <SingleProblem @solve_problem="handleSolveProblem(problem.id)" v-if="!problem.solved">{{
                problem.description }}</SingleProblem>
        </span>

        <h3 v-if="problems.some(element => element.solved === true)"> Solved problems </h3>
        <span v-for="problem in problems" :key="problem.id">
            <SingleProblem @solve_problem="handleSolveProblem(problem.id)" v-if="problem.solved">{{
                problem.description }}</SingleProblem>
        </span>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import SingleProblem from '../../components/SingleProblem.vue';

const problems = ref([
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
])

const handleSolveProblem = (id) => {
    const index = problems.value.findIndex(element => element.id === id);
    problems.value[index].solved = true
}
</script>
    
<style scoped></style>