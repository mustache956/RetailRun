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
            <p>{{ product.price }} €</p>
          </div>
          <div class="product-button-container">
            <button class="product-button">Trouver</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import getAllProducts from '@/backend/app/routes/products.route/getAllProducts'

export default {
  name: 'ProductView',
  data () {
    return {
      search: '',
      products: [
        {
          id: 1,
          name: 'chips',
          image: 'https://m.media-amazon.com/images/I/8141nrQe0aL._AC_UF894,1000_QL80_.jpg',
          price: 10
        },
        {
          id: 2,
          name: 'eau',
          image: 'https://m.media-amazon.com/images/I/8141nrQe0aL._AC_UF894,1000_QL80_.jpg',
          price: 20
        },
        {
          id: 3,
          name: 'pomme',
          image: 'https://m.media-amazon.com/images/I/8141nrQe0aL._AC_UF894,1000_QL80_.jpg',
          price: 30
        },
        {
          id: 4,
          name: 'biere',
          image: 'https://m.media-amazon.com/images/I/8141nrQe0aL._AC_UF894,1000_QL80_.jpg',
          price: 40
        },
        {
          id: 5,
          name: 'stylo',
          image: 'https://m.media-amazon.com/images/I/8141nrQe0aL._AC_UF894,1000_QL80_.jpg',
          price: 50
        },
        {
          id: 6,
          name: 'riz',
          image: 'https://m.media-amazon.com/images/I/8141nrQe0aL._AC_UF894,1000_QL80_.jpg',
          price: 60
        },
        {
          id: 7,
          name: 'pâtes',
          image: 'https://m.media-amazon.com/images/I/8141nrQe0aL._AC_UF894,1000_QL80_.jpg',
          price: 70
        }
      ],
      search: ''
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
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
  padding: 0 5px;
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