<script setup>
import { defineProps, onMounted, ref } from 'vue'

defineProps({
  msg: String,
  flightPath: Array,
})

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

onMounted( () => {
    console.log("hoit")
  })


</script>

<template>
  <div class="w-full h-full object-cover bg-gray-200">
  <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" :mouseWheelZoom="true" style="height:100%">
    
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

