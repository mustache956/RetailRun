<template>
    <div id="stock">
        <input v-model="filterQuery" placeholder="Rechercher un produit">
        <ul>
            <li>
                <span>Nom</span>
                <span>Rayon</span>
                <span>Prix</span>
                <span>Quantité</span>
            </li>
            <li v-for="item in filteredList" :key="item.id">
                <span>{{ item.nom }}</span>
                <span>{{ item.rayon }}</span>
                <span>{{ item.prix }}</span>
                <span>{{ item.quantite }}</span>
            </li>
        </ul>
    </div>
</template> 
    
<script setup>

import { ref, computed } from 'vue';
const list = ref([
    { id: 1, nom: 'John', rayon: 'Patisserie', prix: 25, quantite: 54 },
    { id: 2, nom: 'Jane', rayon: 'Surgelés', prix: 25, quantite: 54 },
    { id: 3, nom: 'Bob', rayon: 'Patisserie', prix: 25, quantite: 54 },
    
]);

const filterQuery = ref('');

const filteredList = computed(() => {
    const query = filterQuery.value.toLowerCase();
    return list.value.filter(item => item.nom.toLowerCase().includes(query));
});

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
    grid-template-columns: 2fr 2fr 1fr 1fr;
    list-style-type: none;
    border: 1px solid grey;
    background-color: #ccc;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 20px;
}
</style>