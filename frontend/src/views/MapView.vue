<template>
    <div>
        <panZoom :options="{minZoom: 0.5, maxZoom: 5}">
            <Map></Map>
        </panZoom>
        <button class="button" @click="this.$router.push('/products')">Products</button>
        
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
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    min-height: 56px;
    min-width: 120px;
    padding: 16px 20px;
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
