<template>
    <div id="stock">
        <input class="search-bar" v-model="filterQuery" placeholder="Rechercher un produit">
        <ul>
            <li>
                <span>Image</span>
                <span>Nom</span>
                <span>Rayon</span>
                <span>Prix</span>
                <span>Quantité</span>
            </li>
            <li v-for="item in filteredList" :key="item.id">
                <img class="image" :src="item.image" alt="">
                <span>{{ item.name }}</span>
                <span>{{ item.store_shelf }}</span>
                <span>{{ formatPrice(item.price) }} €</span>
                <span>{{ item.quantity }}</span>
                <button @click="deleteProduct(item._id)" class="buttonProduct">Supprimer</button>
            </li>
        </ul>
    </div>
</template>

<script setup>

import {ref, computed, onMounted} from 'vue';
import LogOutButton from "@/components/LogOutButton.vue";
import http from "../../../http-common";

var list = ref([]);


onMounted(() => {
    http.get('/product/getAllProducts')
        .then(response => {
            console.log(response);
            list.value = response.data;
        })
        .catch(e => {
            console.log(e);
        })
})
const formatPrice = function (priceString) {
    if (priceString.indexOf('.') !== -1) {
        priceString = priceString.replace('.', ',');
    }
    return priceString;
}

const filterQuery = ref('');

const filteredList = computed(() => {
    const query = filterQuery.value.toLowerCase();
    return list.value.filter(item => item.name.toLowerCase().includes(query));
});
const deleteProduct = (productId) => {
    http.delete(`product/delete/${productId}`)
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.log(e);
        })
}


</script>

<style scoped>
#stock input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 25px;
}


ul li:nth-child(1) {
    background-color: transparent !important;
    border: none !important;
}

ul li {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr 1fr;
    list-style-type: none;
    border: 1px solid grey;
    background-color: #ccc;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 20px;
}

.search-bar {
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
}

.image {
    width: 50px;
    height: 50px;
}

span {
    padding-top: 15px;
}

.buttonProduct {
    height: 40px
}

</style>