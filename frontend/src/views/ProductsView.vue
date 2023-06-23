<template>
  <div>
    <div class="search-bar-container">
      <input v-model="search" class="search-bar" type="text" placeholder="Rechercher un produit">
    </div>
    <div class="products">
      <div class="product" v-for="product in filteredProducts" :key="product.id">
        <div class="product-image-container">
          <img class="image" :src="product.image" alt="">
        </div>
        <div class="product-name-container">
          <p>{{ product.name }}</p>
        </div>
        <div class="product-right-container">
          <div class="product-price-container">
            <p class="product-price-text">{{ product.price }} €</p>
          </div>
          <div class="product-button-container">
            <button class="product-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white"><path d="M527-120 413-413 120-527v-43l720-270-270 720h-43Zm18-114 192-503-502 192 224 86 86 225Zm-86-225Z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import http from '../../http-common';

export default {
  name: 'ProductView',
  data () {
    return {
      search: '',
      products: [],
    }
  },
  created() {
    http.get('/product/getAllProducts')
    .then(response => {
      console.log(response)
      this.products = response.data
      console.log(this.products[0])
    })
    .catch(e => {
      console.log(e)
    })
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}

</script>

<style scoped>



.products {
  display: flex;
  flex-direction: column;
  justify-content: top;
  margin: auto;
  padding: 10px;
  width: 99%;
  height: 100%;
  background-color: #EEEEEE;
  border-radius: 10px;
}

.product {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2px;
  padding: 10px;
  width: 100%;
  height: 100px;
  background-color: #FFFFFF;
  border-radius: 10px;
}

.product-name-container {
  display: flex;
  justify-content: center;
  align-items: center; 
}

.product-right-container {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center; 
}

.product-button {
  background-color: #37B3EA;
  color: white;
  outline: none;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-price-text {
  font-weight: bold;
}

.product-button:hover {
    filter: brightness(0.8);
}

.image {
  width: 50px;
}

.search-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;
  width: 99%;
  height: 100px;
}

.search-bar {
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
}

</style>