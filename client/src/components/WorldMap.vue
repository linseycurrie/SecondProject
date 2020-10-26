<template>
  <div  id="map">

    <l-map v-if="countries"
        :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker class="marker" 
          v-for="(country, index) in countries" :key="index" 
          :lat-lng="latLng(country.latlng[0], country.latlng[1])">
        </l-marker>
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { eventBus } from'../main.js';


export default {
    name: 'world_map',
    props: ['countries'],
    data (){
        return{
            zoom:5,
            center: L.latLng(55.8642, 4.2518),
            url:'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=02874bea11474c4c8f8ed1de617533f2',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            markerLatlng: [55.8642, 4.2518],
        }
    },
    components: {
          LMap,
          LTileLayer,
          LMarker
    },
    methods: {
        latLng: function(lat, lng){
            return [lat, lng];
        },


  }
}

</script>
<style>
#map {
  height: 800px;
  width:100%;
}


</style>