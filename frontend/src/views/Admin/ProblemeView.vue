<template>
    <div id="probleme">
        <h3 v-if="problems.some(element => element.status === false)"> Problèmes non résolus </h3>
        <span v-for="problem in problems" :key="problem._id">
            <SingleProblem @solve_problem="handleSolveProblem(problem._id)" v-if="!problem.status">{{
                problem.description }}</SingleProblem>
        </span>

        <h3 class="solved" v-if="problems.some(element => element.status === true)"> Problèmes résolus </h3>
        <span class="green" v-for="problem in problems" :key="problem._id">
            <SingleProblem @solve_problem="handleSolveProblem(problem._id)" v-if="problem.status">{{
                problem.description }}</SingleProblem>
        </span>
    </div>
</template>

<script>
import LogOutButton from "../../components/LogOutButton.vue";
import http from '../../../http-common';
import SingleProblem from "../../components/SingleProblem.vue";


export default {
  name: 'ProblemView',
  components: {
    SingleProblem
  },
  data() {
    return {
      problems: []
    };
  },
  created() {
    this.fetchProblems();
  },
  methods: {
    fetchProblems() {
      http.get('/problem/getAllProblems')
        .then(response => {
          this.problems = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteProblem(problemId) {
     http.delete(`/problem/deleteProblem/${problemId}`)
        .then(response => {
          console.log(response)
        })
        .catch(e => {
          console.log(e);
        });
    },
    handleSolveProblem(problemId) {
      const problem = this.problems.find(p => p._id === problemId);
      if (problem) {
        problem.status = true;
        this.deleteProblem(problemId)
      }
    }
  }
};
/* async function logJSONData() {
  const response = await fetch("http://localhost:5000/api/problem/getAllProblems");
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData
}

const problems = logJSONData() */


//problems.value.problemsTab = res;

/* const handleSolveProblem = (id) => {
    const index = problems.value.findIndex(element => element.id === id);
    problems.value[index].solved = true
} */
</script>
    
<style scoped>
#probleme .green .notif {
    pointer-events: none;
    opacity: 0.6;
    background-color: #4FCE66 !important;
    color: #004b23 !important;
}
#probleme .green .btn-solve {
    background-color: blue !important;
}

.solved {
    padding: 40px 0px;
}
</style>