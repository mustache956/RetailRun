<template>
    <div id="ajouter">
        <form action="" @submit.prevent="addProduit">
            <FormInput :svg_value="data.nom.svg" class="div1"
                @update_value="(name) => { data.nom.value = name, message = '' }" :placeholder="data.nom.placeholder"
                :type="data.nom.type">
            </FormInput>
            <select class="div2" name="pets" id="pet-select" v-model="data.rayon">
                <option value=""> Rayon </option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
            </select>
            <FormInput :svg_value="data.prix.svg" class="div3"
                @update_value="(name) => { data.prix.value = name, message = '' }" :placeholder="data.prix.placeholder"
                :type="data.prix.type">
            </FormInput>
            <FormInput :svg_value="data.quantite.svg" class="div4"
                @update_value="(name) => { data.quantite.value = name, message = '' }" :placeholder="data.quantite.placeholder"
                :type="data.quantite.type">
            </FormInput>
            <div class="form_part">
                <FormInput :svg_value="data.caracteristiques.svg" class="div5"
                    @update_value="(name) => { data.caracteristiques.value = name, message = '' }" :placeholder="data.caracteristiques.placeholder"
                    :type="data.caracteristiques.type">
                </FormInput>
                <br>
                <FormButton :type="'submit'"> Ajouter produit </FormButton>
            </div>
        </form>

    </div>
</template> 
    
<script setup>
import FormInput from '../../components/FormInput.vue';
import FormButton from '../../components/FormButton.vue';
import { ref } from 'vue';

const data = ref({
    nom: {
        value: "",
        type: 'text',
        placeholder: 'nom',
    },
    rayon: "",
    prix: {
        value: "",
        type: 'number',
        placeholder: 'Prix',
    },
    quantite: {
        value: "",
        type: 'number',
        placeholder: 'Quantité',
    },
    caracteristiques: {
        value: "",
        type: 'text',
        placeholder: 'Caractéristiques',
    },
})

const addProduit = async () => {
    const response = await fetch('http://localhost:3005/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.parse(JSON.stringify(data.value))
    })

    console.log(response)
    console.log(response.json)
}
</script>
    
<style scoped>

form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(3, 1fr); */
    grid-column-gap: 15px;
    grid-row-gap: 15px;
}

.div1 {
    grid-area: 1 / 1 / 1 / 2;
}

.div2 {
    grid-area: 1 / 2 / 2 / 3;
    margin: 10px 0px;
    padding: 0px 20px;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 5px;
}
.div3 {
    grid-area: 2 / 1 / 3 / 2;
}

.div4 {
    grid-area: 2 / 2 / 3 / 3;
}

.form_part {
    grid-area: 3 / 1 / 4 / 3;
}
/* .form_part {
    back
} */
</style>