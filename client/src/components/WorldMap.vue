<template>
  <div  id="map">

    <l-map v-if="countries"
        :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-if="selectedCountry" class="marker"
          :lat-lng="latLng(selectedCountry.latlng[0], selectedCountry.latlng[1])">
          <l-icon class="arrow" :icon-size="normalIcon" :icon-url="icon"></l-icon>
          <l-popup id="popup"> 
            {{selectedCountry.name}}
            <img src="selectedCountry.flag" alt="">
          </l-popup>
      </l-marker> 
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet';
import { latLngBounds } from "leaflet"
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet';
import { eventBus } from'../main.js';
import YellowArrow from '../assets/yellow_arrow.png';




export default {
    name: 'world_map',
    props: ['countries', 'selectedCountry'],
    data (){
        return{
            zoom:4,
            center: L.latLng(55.8642, 4.2518), 
            url:'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=02874bea11474c4c8f8ed1de617533f2',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            icon: YellowArrow,
            normalIcon: [50,90],
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

#popup{
  font-size: 20px;
}


</style>