<template>
    <div id="backgroundview">
        <div id="form">
            <form :onsubmit="sendResetLink" class="login">
                <div class="top">
                    <h1> Mot de passe oublié </h1>
                </div>
                <br>
                <label> Nom d'utilisateur </label>
                <FormInput class="login_input" :svg_value="inputs.login.username.svg"
                           @update_value="(value_email) => {inputs.login.username.email = value_email}"
                           :placeholder="inputs.login.username.placeholderEmail" :type="inputs.login.username.type">
                </FormInput>
                <label> Ancien mot de passe </label>
                <FormInput class="login_input" :svg_value="inputs.login.username.svgPassword"
                           @update_value="(value_previousPassword) => {inputs.login.username.previousPassword = value_previousPassword}"
                           :placeholder="inputs.login.username.placeholderPreviousPassword" :type="inputs.login.username.typePassword">
                </FormInput>
                <label> Nouveau mot de passe </label>
                <FormInput class="login_input" :svg_value="inputs.login.username.svgPassword"
                           @update_value="(value_nextPassword) => {inputs.login.username.nextPassword = value_nextPassword}"
                           :placeholder="inputs.login.username.placeholderNextPassword" :type="inputs.login.username.typePassword">
                </FormInput>
                <FormButton :type="'submit'"> Submit </FormButton>
            </form>
        </div>
    </div>
</template>

<script setup>

import FormInput from "@/components/FormInput.vue";
import {ref} from "vue";
import FormButton from "@/components/FormButton.vue";
import http from "../../http-common";
import {useRouter} from "vue-router";

const router = useRouter()

const inputs = ref({
    login: {
        username: {
            email: "",
            previousPassword: "",
            nextPassword: "",
            type: 'text',
            typePassword: 'password',
            placeholderEmail: "Nom d'utilisateur",
            placeholderPreviousPassword: "Ancien mot de passe",
            placeholderNextPassword: "Nouveau mot de passe",
            svg: 'M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z',
            svgPassword: 'M19 7H17C17 4.79086 15.2091 3 13 3C10.7909 3 9 4.79086 9 7V10H18C19.6569 10 21 11.3431 21 13V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V13C3 11.3431 4.34315 10 6 10H7V7C7 3.68629 9.68629 1 13 1C16.3137 1 19 3.68629 19 7ZM18 12H6C5.44772 12 5 12.4477 5 13V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V13C19 12.4477 18.5523 12 18 12Z'
        }
    }
})


const sendResetLink = (e) => {
    e.preventDefault();
    const user = {
        mail: inputs.value.login.username.email,
        previousPassword: inputs.value.login.username.previousPassword,
        nextPassword: inputs.value.login.username.nextPassword
    }

    http
        .post("/user/changePassword",user)
        .then((response) => {
            console.log(response);
            router.push('/login');
        })
        .catch((error) => {
            console.log(error);
            if(error){
                alert("L'email ou le mot de passe est incorrect !");
            }
        })




}
</script>
<style scoped>

</style>