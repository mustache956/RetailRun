<template>
    <div id="backgroundview">
        <div id="form">
            <form :onsubmit="try_login" class="login">
                <div class="top">
                    <!-- <img src="@/assets/logo.svg" alt="logo" /> -->
                    <h1> LOGIN </h1>
                </div>
                <label> USER ID </label>
                <FormInput class="login_input" :svg_value="inputs.login.username.svg"
                    @update_value="(value_username) => {inputs.login.username.value = value_username, message = ''}"
                    :placeholder="inputs.login.username.placeholder" :type="inputs.login.username.type">
                </FormInput>
                <label> PASSWORD </label>
                <FormInput class="login_input" :svg_value="inputs.login.password.svg"
                    @update_value="(value_password) => {inputs.login.password.value = value_password, message = ''}"
                    :placeholder="inputs.login.password.placeholder" :type="inputs.login.password.type">
                </FormInput>
                <small :onclick="forgot"> Forgot my password ? </small><br><br>
                <FormButton :type="'submit'"> Login </FormButton>
                <br><br>
                <FormFeedback v-if="message !== ''"
                    :svg_value="'M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z'"
                    :feedback="feedback"> {{ message }}
                </FormFeedback>
                <br>

            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FormInput from '../components/FormInput.vue';
import FormButton from '../components/FormButton.vue';
import FormFeedback from '../components/FormFeedback.vue';

const router = useRouter()

const feedback = ref('success')
const message = ref('')

const inputs = ref({
    login: {
        username: {
            value: "",
            type: 'text',
            placeholder: 'Username',
            svg: 'M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
        },
        password: {
            value: "",
            type: 'password',
            placeholder: 'Password',
            svg: 'M19 7H17C17 4.79086 15.2091 3 13 3C10.7909 3 9 4.79086 9 7V10H18C19.6569 10 21 11.3431 21 13V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V13C3 11.3431 4.34315 10 6 10H7V7C7 3.68629 9.68629 1 13 1C16.3137 1 19 3.68629 19 7ZM18 12H6C5.44772 12 5 12.4477 5 13V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V13C19 12.4477 18.5523 12 18 12Z'
        },
    },
})

const try_login = async (e) => {
    e.preventDefault();

    const data_login = { mail: inputs.value.login.username.value, password: inputs.value.login.password.value }
    console.log(data_login);
    const response = await fetch('http://localhost:5000/api/user/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data_login)
    })
    console.log(response.status);
    const is_user = response.status === 200;
    console.log(is_user);
    if (is_user) {
        const res = await response.json()
        message.value = res.message
        feedback.value = 'success'
        window.localStorage.setItem('token', res.token);
        setTimeout(() => {
            /*
                Task : Redirect to the real next route  
            */      
            router.push('/')
        }, 2000);
    }
    else {
        message.value = "Failed";
        feedback.value = 'error';
    }

}

const forgot = () => {
    console.log("flemme")
}

</script>

<style scoped>
.top h1 {
    padding: 30px 0px;
}

</style>
