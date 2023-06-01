<template>
  <div id="backgroundview">
      <div id="form">
      <h1 id="title">RETAIL RUN</h1>
       <div id="btns">
           <div class="clickBtn">
               <router-link to="/" class="button">
                   Rechercher un produit
               </router-link>
           </div>
           <div class="clickBtn">
               <router-link to="/signalProblem" class="button">
                   Signaler un problème
               </router-link>
           </div>
       </div>

      </div>
  </div>


</template>

<script setup>

</script>

<style scoped>
#form{
    width: 50%;
}
h1{
    text-align: center;
}

#btns{
    display: flex;
    justify-content: space-around;
    margin-top: 10%;

}

.clickBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #37B3EA;
    border-radius: 10px;
    background-color: #37B3EA;
    height: 50px;
    width: 100%;
    margin-right: 5px;
    margin-left: 5px;
}

.button{
    text-decoration: none;
    text-align: center;
    outline: none;
    cursor:pointer;
    color:white;

}


</style>

