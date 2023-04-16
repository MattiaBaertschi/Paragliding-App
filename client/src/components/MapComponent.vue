<script setup>
import { defineProps, onMounted, toRaw, ref } from 'vue'
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';
import {get as getProjection} from 'ol/proj.js';


const props = defineProps({
  flightPath: { 
    type: Array,
    default: [
		[8.6, 46.9],
		[8.7, 46.9],
		[8.4, 46.4],
		[8.7, 46.4]
	]},
})

const center = ref([2600000, 1200000]);
const projection = ref('EPSG:2056');
const espg2056Extent = [2420000, 1030000, 2900000, 1350000];
const view = ref()
const zoom = ref(8)
const rotation = ref(0)
const strokeWidth = ref(2)
const strokeColor = ref('black')

//https://openlayers.org/doc/faq.html#how-do-i-change-the-projection-of-my-map-
proj4.defs('EPSG:21781',
  '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 ' +
  '+x_0=600000 +y_0=200000 +ellps=bessel ' +
  '+towgs84=660.077,13.551,369.344,2.484,1.783,2.939,5.66 +units=m +no_defs');
register(proj4);
const swissProjection = getProjection('EPSG:21781');

const calcMapCenter = (coordinates) => {

  let sumLongitudes = 0;
  let sumLatitudes = 0;

  for (let i = 0; i < coordinates.length; i++) {
  sumLongitudes += coordinates[i][0];
  sumLatitudes += coordinates[i][1];
  }

  const avgLongitude = Math.round(sumLongitudes / coordinates.length);
  const avgLatitude = Math.round(sumLatitudes / coordinates.length);
  console.log(avgLatitude)

  const mapCenter = [avgLongitude,avgLatitude]
  console.log(mapCenter)

  return mapCenter
}

const calcGeomExtent = (geometry) => {
  // Find the highest and lowest latitude and longitude
  const lats = geometry.map(coord => coord[1]);
  const max_lat = Math.max(...lats);
  const min_lat = Math.min(...lats);

  const longs = geometry.map(coord => coord[0]);
  const max_long = Math.max(...longs);
  const min_long = Math.min(...longs);

  // Format the results as specified and add some padding
  const result = [
    parseFloat(min_long.toFixed(14))-0.01,
    parseFloat(min_lat.toFixed(14))-0.01,
    parseFloat(max_long.toFixed(14))+0.01,
    parseFloat(max_lat.toFixed(14))+0.01
  ];
  console.log("mapExtent:", result);
  return(result)
}

onMounted( () => {   
        view.value.view.fit(calcGeomExtent(props.flightPath))    
  })

</script>

<template>

  <div class="w-full h-full object-cover">
  <ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" :mouseWheelZoom="false" style="height:100%">
   <ol-projection-register projectionName="EPSG:2056" :projectionExtent="espg2056Extent" projectionDef="++proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs"/>
  <ol-view ref="view" :center=calcMapCenter(flightPath) :rotation="rotation" :zoom="zoom" :projection="projection" />

  <ol-tile-layer>
      <ol-source-osm />
  </ol-tile-layer>
<!--
    <ol-vector-layer>
    <ol-source-vector :url="url" :format="geoJson">

    </ol-source-vector>

  </ol-vector-layer>
-->
  <ol-vector-layer>
    <ol-source-vector>
        <ol-feature>
            <ol-geom-line-string :coordinates=flightPath></ol-geom-line-string>
            <ol-style>
                    <ol-style-stroke :color="strokeColor" :width="strokeWidth"></ol-style-stroke>          
            </ol-style>
        </ol-feature>
  </ol-source-vector>
  </ol-vector-layer>
  </ol-map>
</div>
</template>

