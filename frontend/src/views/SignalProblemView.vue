<template>
    <div id="backgroundview">
        <div id="form">
            <form @submit="signalProblem">
                <div class="top">
                    <h1>SIGNALER UN PROBLEME</h1>
                </div>
                <label>TYPE DE PROBLEME</label>
               <FormSelect  :options="inputs.types" @update_value="
               (value_type) => {inputs.problem.type = value_type;}"></FormSelect>
                <label>NOUVEAU TYPE DE PROBLEME</label>
                <FormInput @update_value="(value_newType) => {inputs.problem.newType = value_newType;}" :svg_value="inputs.icons.svg" placeholder="Renseigner un nouveau problème" type="text"></FormInput>
                <label>RAYON DU MAGASIN</label>
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
import router from "@/router";
import FormInput from "@/components/FormInput.vue";


const inputs = ref({
    types: ["Produit manquant", "Propreté du rayon"],
    store_shelves: ["Fruits et Légumes", "Epicerie", "Liquides", "Surgelés", "Produits non alimentaires"],
    problem:{
        type:"",
        newType:"",
        store_shelf: "",
        description: ""
    },
    icons:{
       svg: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
    }

})

const signalProblem = (e) => {
    e.preventDefault();
    const data_problem = {
        type: inputs.value.problem.newType === "" ? inputs.value.problem.type : inputs.value.problem.newType,
        store_shelf: inputs.value.problem.store_shelf,
        description: inputs.value.problem.description
    };
    console.log(data_problem);
    http
        .post("/problem/createProblem",data_problem)
        .then((response) => {
            console.log(response);
            alert("Problème pris en compte.");
            router.push('/');
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

@media screen and (max-width: 1500px){
    #backgroundview{
        height: 130vh;
    }
}

@media screen and (max-width: 900px){
    #form{
        width: 75%;
        padding:40px;
        margin-top: 20px;
    }
    .top h1{
        padding: 0px 0px;
        font-size: 20px;
    }
    #backgroundview{
        height: 150vh;
    }

}

@media screen and (max-width: 750px){
    #backgroundview{
        height: 160vh;
    }
    label{
        font-size: 14px;
    }
    #form{
        margin-top: 20px;
    }
}

@media screen and (min-width: 630px) and (max-width: 660px){
    #backgroundview{
        height: 280vh;
    }

}

@media screen and (max-width: 430px){
    #backgroundview{
        height: 130vh;
    }
    #form{
        margin: auto;
        width: 90%;
    }

}

@media screen and (max-width: 380px){
    #backgroundview{
        height: 130vh;
    }
    #form{
        margin: auto;
    }

}

</style>