<template>
    <div>
        <panZoom :options="{minZoom: 0.5, maxZoom: 5}">
            <Map></Map>
        </panZoom>
        <button class="button" @click="this.$router.push({ path: '/products' });">Products</button>
        
    </div>
    
</template>
  
<script>
    import Map from '@/components/Map.vue'

    

    export default {
        name: 'MapView',

        components: {
            Map
        }
    }
</script>

<style>
.vue-pan-zoom-item{
   height: 400px; 
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
