<script setup>
import { defineProps, onMounted, toRaw, ref } from 'vue'

const props = defineProps({
  flightPath: Array
})

const view = ref()
const center = ref([8.5, 47])
const projection = ref('EPSG:4326')
const zoom = ref(8)
const rotation = ref(0)
const strokeWidth = ref(2)
const strokeColor = ref('black')

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

  // Format the results as specified
  const result = [
    parseFloat(min_long.toFixed(14))-0.1,
    parseFloat(min_lat.toFixed(14))-0.1,
    parseFloat(max_long.toFixed(14))+0.1,
    parseFloat(max_lat.toFixed(14))+0.1
  ];
  console.log("mapExtent:", result);
  return(result)
}


onMounted( () => {   
        view.value.view.fit(calcGeomExtent(props.flightPath))    
  })

//console.log(props.flightPath)

</script>

<template>
  <div class="w-full h-full object-cover bg-gray-200">
  <ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" :mouseWheelZoom="true" style="height:100%">
    
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

