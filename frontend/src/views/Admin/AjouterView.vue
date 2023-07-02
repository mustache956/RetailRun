<template>
    <div id="ajouter">
        <form action="" @submit.prevent="addProduit">
            <FormInput :svg_value="data.nom.svg" class="add_input div1"
                       @update_value="(name) => { data.nom.value = name, message = '' }"
                       :placeholder="data.nom.placeholder"
                       :type="data.nom.type">
            </FormInput>
            <FormSelect :options="data.rayons" @update_value="
               (value_type) => {data.rayon = value_type;}"></FormSelect>
            <FormInput :svg_value="data.prix.svg" class="add_input div3"
                       @update_value="(name) => { data.prix.value = name, message = '' }"
                       :placeholder="data.prix.placeholder"
                       :type="data.prix.type">
            </FormInput>
            <FormInput :svg_value="data.quantite.svg" class="add_input div4"
                       @update_value="(name) => { data.quantite.value = name, message = '' }"
                       :placeholder="data.quantite.placeholder"
                       :type="data.quantite.type">
            </FormInput>
            <FormInput :svg_value="data.coordonneeX.svg" class="add_input div5"
                       @update_value="(name) => { data.coordonneeX.value = name, message = '' }"
                       :placeholder="data.coordonneeX.placeholder"
                       :type="data.coordonneeX.type">
            </FormInput>
            <FormInput :svg_value="data.coordonneeY.svg" class="add_input div6"
                       @update_value="(name) => { data.coordonneeY.value = name, message = '' }"
                       :placeholder="data.coordonneeY.placeholder"
                       :type="data.coordonneeY.type">
            </FormInput>
            <div class="form_part">
                <FormInput :svg_value="data.caracteristiques.svg" class=""
                           @update_value="(name) => { data.image.value = name, message = '' }"
                           :placeholder="data.image.placeholder"
                           :type="data.image.type">
                </FormInput>
                <br>
                <FormButton :type="'submit'"> Ajouter produit</FormButton>
            </div>
        </form>
    </div>
</template>

<script setup>
import FormInput from '../../components/FormInput.vue';
import FormButton from '../../components/FormButton.vue';
import {ref} from 'vue';
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
    rayon: "",
    image: {
        value: "",
        type: 'text',
        placeholder: 'Image'
    },
    coordinates: ["", ""],
    promo: "",
    coordonneeX: {
        value:"",
        type: "text",
        placeholder: "Position en X"
    },
    coordonneeY: {
        value:"",
        type:"text",
        placeholder: "Position en Y"
    },
    prix: {
        value: "",
        type: 'text',
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
        placeholder: 'Image',
    },
})

const addProduit = async (e) => {
    e.preventDefault();
    const produit = {
        name: data.value.nom.value,
        store_shelf: data.value.rayon,
        price: data.value.prix.value,
        image: data.value.image.value,
        coordinates: [data.value.coordonneeX.value, data.value.coordonneeY.value],
        promo: data.value.promo,
        quantity: data.value.quantite.value
    }

    console.log(produit);
    /* Backend ...  */
    http
        .post("/product/create", produit)
        .then((response) => {
            console.log(response);
            alert("Produit ajouté dans le catalogue.");
        })
        .catch((error) => {
            console.log(error.response.data);
            if (error.response.status === 404) {
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
.div5 {
    grid-area: 3 / 1 / 4 / 2;
}
.div6 {
    grid-area: 3 / 2 / 4 / 3;
}

.form_part {
    grid-area: 4 / 1 / 5 / 3;
}

/* .form_part {
    back
} */


</style>