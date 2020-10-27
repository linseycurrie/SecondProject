<template>
  <div  id="map">

    <l-map v-if="countries"
        :zoom="zoom" :center="center" :max-bounds="maxBounds">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <!-- <l-marker class="marker" 
          v-for="(country, index) in countries" :key="index" 
          :lat-lng="latLng(country.latlng[0], country.latlng[1])">
          <l-icon class="largeArrow" v-if="country == selectedCountry" :icon-url="redIcon" :icon-size="largeIcon"></l-icon>
          <l-icon class="normalArrow" v-else :icon-url="icon" :icon-size="normalIcon"></l-icon>

        </l-marker> -->
      <l-marker v-if="selectedCountry" class="marker"
          :lat-lng="latLng(selectedCountry.latlng[0], selectedCountry.latlng[1])">
          <l-icon class="lrgArrow" :icon-size="largeIcon" :icon-url="icon"></l-icon>
      </l-marker> 
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet';
import { latLngBounds } from "leaflet"
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet';
import { eventBus } from'../main.js';
import Arrow from '../assets/arrow.png'
import RedArrow from '../assets/RedArrow.png'




export default {
    name: 'world_map',
    props: ['countries', 'selectedCountry'],
    data (){
        return{
            zoom:3,
            center: L.latLng(55.8642, 4.2518), 
            url:'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=02874bea11474c4c8f8ed1de617533f2',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            markerLatlng: [55.8642, 4.2518],
            icon: Arrow,
            redIcon: RedArrow,
            normalIcon: [30,30],
            largeIcon: [100,100],
            maxBounds: latLngBounds([
              [27,-10],
              [27,-10]
            ])
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

        center: function(){
          return [this.selectedCountry.latLng[0], this.selectedCountry.latlng[1]]
        }


  }
}

</script>
<style>
#map {
  height: 900px;
  width:100%;
}

img{
  height: 90px;
}


</style>