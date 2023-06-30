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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
    flex-direction: column;
    justify-content: space-between;
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

@media (min-width: 768px) {
  .button {
    padding: 16px 44px;
    min-width: 150px;
  }
}


@media screen and (max-width: 850px){
#form{
    width: 80%;
    height: auto;
    padding:20px;
}
}

</style>
