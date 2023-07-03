<template>
    <div id="stock">
        <input class="search-bar" v-model="filterQuery" placeholder="Rechercher un produit">
        <ul>
            <li>
                <span>Image</span>
                <span>Nom</span>
                <span>Rayon</span>
                <span>Prix</span>
                <span style="text-align: center">Quantité</span>
            </li>
            <li v-for="item in filteredList" :key="item.id">
                <img class="image" :src="item.image" alt="">
                <span>{{ item.name }}</span>
                <span>{{ item.store_shelf }}</span>
                <span>{{ formatPrice(item.price) }} €</span>
                <span style="text-align: center">{{ item.quantity }}</span>
               <button class="buttonModified" @click="startEditing(item)">Modifier</button>
                <button v-if="item.status" @click="stopEditing(item)" class="buttonModified">Valider</button>
                <button @click="deleteProduct(item._id)" class="buttonDelete">
                Supprimer
                </button>
                <input class="inputUpdate" v-if="item.status" type="text" v-model="item.image" @blur="stopEditing">
                <input class="inputUpdate" v-if="item.status" type="text" v-model="item.name" @blur="stopEditing">
                <input class="inputUpdate" v-if="item.status" type="text" v-model="item.store_shelf" @blur="stopEditing">
                <input class="inputUpdate" v-if="item.status" type="text" v-model="item.price" @blur="stopEditing">
                <input class="inputUpdate" v-if="item.status" type="text" v-model="item.quantity" @blur="stopEditing">
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
const startEditing = (item) => {
    return item.status = true;
}

const stopEditing = (item) => {
    item.status = false;
    updateProduct(item);
    return item.status;
}

const updateProduct = (item) => {
    http.put('product/update/',item)
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.log(e);
        })
}

</script>

<style scoped>
#stock .search-bar {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 25px;
}

.inputUpdate{
    width: 80%;
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
    grid-template-columns: 2fr 2fr 2fr 1fr 1fr 1fr 1fr 1fr;
    list-style-type: none;
    border: 1px solid #16A085;
    background-color: #45B39D;
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

.buttonModified {
    margin-right: 5px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #138D75;
    transition: all .2s
}

.buttonDelete {
    margin-right: 5px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #dd0426;
    transition: all .2s
}

.buttonDelete:hover {
    background-color: #ff6666;
    color: white;
    font-weight: bold;
}

.buttonModified:hover {
    background-color: #A2D9CE;
    color: white;
    font-weight: bold;
}

</style>