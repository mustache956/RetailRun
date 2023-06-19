<template>
    <div id="backgroundview">
        <div id="form">
            <div id="logo">
                <img src="../assets/LogoRetailRun.png" alt="RETAIL RUN" width="244">
            </div>
            <div id="btns">
                <button @click="this.$router.push('/products')" class="button">
                    Rechercher un produit
                </button>
                <!-- <button @click="this.$router.push('/admin')" class="button">
                    Rechercher un produit
                </button> -->
                <button @click="this.$router.push('/signalProblem')" class="button">
                    Signaler un problème
                </button>

            </div>

        </div>
    </div>


</template>

<script setup>

</script>

<style scoped>
#form {
    width: 50%;
}

#logo {
    display: flex;
    justify-content: center;
}

h1 {
    text-align: center;
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


@media screen and (max-width: 850px){
#form{
    width: 75%;
    height: auto;
    padding:40px;
}


}

</style>

