<template>
  <div id="map">
    <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-if="countries"
        v-for="(country, index) in countries" :key="index" :value="country"
        :lat-lng="latLng(country.latlng[0], country.latlng[1])">
    </l-marker>
        
    </l-map>

  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';


export default {
    name: 'world_map',
    props: ['countries']
    data (){
        return{
            zoom:13,
            center: L.latLng(47.413220, -1.219482),
            url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: L.latLng(47.413220, -1.219482)
        }
    },

    components: {
        LMap,
        LTileLayer,
        LMarker
    },

    methods: {
        latLng: function(lat, lng){
            return L.latLng(lat, lng);
        },
}

</script>

<style>

#map {
    height: 95hv;
}

</style>