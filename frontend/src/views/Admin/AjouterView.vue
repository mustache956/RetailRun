<template>
    <div id="ajouter">
        <form action="" @submit.prevent="addProduit">
            <FormInput :svg_value="data.nom.svg" class="add_input div1"
                @update_value="(name) => { data.nom.value = name, message = '' }" :placeholder="data.nom.placeholder"
                :type="data.nom.type">
            </FormInput>
            <FormSelect :options="data.rayons" @update_value="
               (value_type) => {data.rayon.type = value_type;}"></FormSelect>
            <FormInput :svg_value="data.prix.svg" class="add_input div3"
                @update_value="(name) => { data.prix.value = name, message = '' }" :placeholder="data.prix.placeholder"
                :type="data.prix.type">
            </FormInput>
            <FormInput :svg_value="data.quantite.svg" class="add_input div4"
                @update_value="(name) => { data.quantite.value = name, message = '' }" :placeholder="data.quantite.placeholder"
                :type="data.quantite.type">
            </FormInput>
            <div class="form_part">
                <FormInput :svg_value="data.caracteristiques.svg" class="add_input div5"
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
import FormSelect from "@/components/FormSelect.vue";
import ProblemeView from "@/views/Admin/ProblemeView.vue";
import LogOutButton from "@/components/LogOutButton.vue";
import http from '../../../http-common';

const data = ref({
    nom: {
        value: "",
        type: 'text',
        placeholder: 'Nom',
    },
    rayons: ["Fruits et Légumes", "Epicerie", "Liquides", "Surgelés", "Produits non alimentaires"],
    rayon: {type:""},
    image: "",
    coordinates: ["",""],
    promo:"",
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

const addProduit = async (e) => {
    e.preventDefault();
    const produit = {
        name: data.value.nom.value,
        price: data.value.prix.value,
        image: data.value.image,
        coordinates: JSON.parse(JSON.stringify(data.value.coordinates)),
        promo: data.value.promo,
        quantity: data.value.quantite.value
    }

    console.log(produit);
    /* Backend ...  */
    http
        .post("/product/create",produit)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.response.data);
            if(error.response.status === 404){
              alert("Can't add a product !");
            }
        });

}
</script>
    
<style scoped>

#ajouter {
    
}

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