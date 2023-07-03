<template>
    <div id="adminhome" v-if="isAuthenticated">
        <div class="left">
            <button class="tab-button left_part" :class="{ tab_active: current_section === 'Ajouter' }" @click="check_active_tab('Ajouter'); current_component = AjouterView">
                <h3> Ajouter un produit </h3>
            </button>
            <button class="tab-button left_part" :class="{ tab_active: current_section === 'Stock' }" @click="check_active_tab('Stock'); current_component = StockView">
                <h3> Stock </h3>
            </button>
            <button class="tab-button left_part" :class="{ tab_active: current_section === 'Problèmes' }" @click="check_active_tab('Problèmes'); current_component = ProblemeView">
                <h3> Problèmes signalés </h3>
            </button>
        </div>
        <p class="getUser"><strong>Bonjour</strong> {{getUser}}</p>
        <LogOutButton></LogOutButton>
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
const getUser = computed(() => {
    return store.getUser.mail;
})
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

.getUser{
    font-family: "Space Grotesk",-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 18px;
    margin-top:15px;
    margin-left: 10px;
}
#btns {
    display: flex;
    justify-content: space-around;
    margin-top: 10%;
}


.tab-button:hover {
    color: #37B3EA;
    background-color: white;
    transition: background-color 0.3s linear;
    cursor: pointer;
}

.button {
    background-color: #37B3EA;
    border-radius: 10px;
    border: 0;
    box-shadow: rgba(56, 167, 216,.5) 0 -1px 3px 0 inset,rgba(56, 167, 216,.1) 0 3px 6px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: "Space Grotesk",-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin: 5px;
    min-height: 56px;
    min-width: 120px;
    padding: 16px 20px;
    position: relative;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    transition: all .2s cubic-bezier(.22, .61, .36, 1);
}

.button:hover {
    background-color: #38A7D8;
    transform: translateY(-2px);
}

</style>
