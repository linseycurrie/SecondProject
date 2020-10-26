<template>
  <div  id="map">

    <l-map v-if="countries"
        :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker class="marker" 
          v-for="(country, index) in countries" :key="index" 
          :lat-lng="latLng(country.latlng[0], country.latlng[1])">
          <l-icon :icon-url="icon"> </l-icon>>
          <l-popup> 
            {{country.name}}
            <img :src="country.flag" alt="">
            
          </l-popup>
        </l-marker>
        
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet';
import { eventBus } from'../main.js';
import Arrow from '../assets/arrow.png'


export default {
    name: 'world_map',
    props: ['countries', 'selectedCountry'],
    data (){
        return{
            zoom:5,
            center: L.latLng(55.8642, 4.2518),
            url:'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=02874bea11474c4c8f8ed1de617533f2',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            markerLatlng: [55.8642, 4.2518],
            icon: Arrow
        }
    },
    components: {
          LMap,
          LTileLayer,
          LMarker,
          LPopup,
          LIcon
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

img{
  height: 90px;
}


</style>