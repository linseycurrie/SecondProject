<template>
  <div  class="map">
      <h2>MAP</h2>
    <l-map v-if="countries" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker 
      v-for="(country, index) in countries" :key="index" 
       :lat-lng="latLng(country.latlng[0], country.latlng[1])"></l-marker>
    </l-map>

  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';


export default {
    name: 'world_map',
    props: ['countries'],
    components: {
          LMap,
          LTileLayer,
          LMarker
    },
    data (){
    return {
      zoom:13,
      center: [47.413220, -1.219482],
      url:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
    }
},
    methods: {
      latLng: function(lat, lng){
        return L.latLng(lat, lng);
      }
    }

}

</script>
<style>

.map {
    height: 95%;
}

</style>