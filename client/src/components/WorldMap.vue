<template>
  <div  class="map">
      <h2>MAP</h2>
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>

  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';


export default {
    name: 'world_map',
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

}

</script>
<style>

.map {
    height: 95hv;
}

</style>