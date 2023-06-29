<template>
    <div id="adminhome" v-if="isAuthenticated">
        <div class="left">
            <button class="left_part" :class="{ tab_active: current_section === 'Ajouter' }" @click="check_active_tab('Ajouter'); current_component = AjouterView">
                <h3> Ajouter un produit </h3>
            </button>
            <button class="left_part" :class="{ tab_active: current_section === 'Stock' }" @click="check_active_tab('Stock'); current_component = StockView">
                <h3> Stock </h3>
            </button>
            <button class="left_part" :class="{ tab_active: current_section === 'Probleme' }" @click="check_active_tab('Probleme'); current_component = ProblemeView">
                <h3> Problèmes signalés </h3>
            </button>
        </div>
        <div class="right">
            <h1> {{ current_section }} </h1>
            <component :is='current_component' />
        </div>
    </div>
    <div id="backgroundview" v-else>
        <div id="form">
            <h1>Cannot acces the webpage because you are not logged in.</h1>
            <div id="btns">
                <button @click="this.$router.push('/login')" class="button">
                    Go to Login
                </button>
            </div>
        </div>
    </div>
    <LogOutButton></LogOutButton>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';
import AjouterView from '../Admin/AjouterView.vue';
import StockView from '../Admin/StockView.vue';
import ProblemeView from '../Admin/ProblemeView.vue';
import {useUserStore} from '../Admin/../../stores/auth.store.js';
import LogOutButton from "../../components/LogOutButton.vue";
// ajouter, stock et probleme
const current_section = ref('Ajouter')
const current_component = AjouterView
const store = useUserStore();
const isAuthenticated = computed(() => {
    return store.isLoggedIn;
});
const check_active_tab = (tab) => {
    current_section.value = tab;
};





</script>

<style scoped>
#adminhome {
   /*  min-height: 100vh;
    display: grid;
    /* grid-template-columns: 1fr; 
    grid-template-rows: .5fr 4fr;
    gap: 30px 0px;
    grid-auto-flow: row;
    grid-template-areas: "." "."; */
}
.left {
    height: 100px;
    text-align: center;
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: grey;
}
.left button {
    border: none;
    padding: 40px 0px;
}
.tab_active {
    background-color: #0E2A47;
    color: white;
}
.right {
    position: relative;
    width: 60%;
    margin: auto;
    padding: 0px 40px;
}
.right h1 {
    padding: 30px 0;
}

#btns {
    display: flex;
    justify-content: space-around;
    margin-top: 10%;
}

.button {
    text-decoration: none;
    text-align: center;
    border: 1px solid #37B3EA;
    border-radius: 10px;
    background-color: #37B3EA;
    height: 60px;
    width: 100%;
    margin-right: 5px;
    margin-left: 5px;
    color: white;
    outline: none;
    cursor: pointer;
}

.button:hover {
    color: #37B3EA;
    background-color: white;
    transition: background-color 0.5s linear;
}
</style>
