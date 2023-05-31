<template>
    <div id="backgroundview">
        <div id="form">
            <form @submit="signalProblem">
                <div class="top">
                    <h1>SIGNAL A PROBLEM</h1>
                </div>
                <label>TYPE</label>
               <FormSelect :options="inputs.types" @update_value="(value_type) => {inputs.problem.type = value_type}"></FormSelect>
                <label>STORE SHELF</label>
               <FormSelect :options="inputs.store_shelves"
                           @update_value="(value_shelf) => {inputs.problem.store_shelf = value_shelf}"></FormSelect>
                <label>DESCRIPTION</label>
                <FormTextArea
                        @update_value="(value_description) => {inputs.problem.description = value_description}"></FormTextArea>
                <br>
                <FormButton type="'submit'">Signal</FormButton>
            </form>
        </div>
    </div>
</template>

<script setup>

import http from "../../http-common";
import FormButton from "@/components/FormButton.vue";
import {ref} from "vue";
import FormSelect from "@/components/FormSelect.vue";
import FormTextArea from "@/components/FormTextArea.vue";


const inputs = ref({
    types: ["Type 1", "Type 2"],
    store_shelves: ["Shelf 1", "Shelf 2"],
    problem:{
        type:"",
        store_shelf: "",
        description: ""
    }

})

const signalProblem = async (e) => {
    e.preventDefault();
    const data_problem = {
        type: inputs.value.problem.type,
        store_shelf: inputs.value.problem.store_shelf,
        description: inputs.value.problem.description
    };
    console.log(data_problem);
    http
        .post("/problem/createProblem",data_problem)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
            if(error.response.status === 404){
              alert("Can't add a problem !");
            }
        });
}


</script>

<style scoped>
.top h1 {
    padding: 30px 0px;
}
</style>