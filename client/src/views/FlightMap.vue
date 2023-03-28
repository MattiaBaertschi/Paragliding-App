<script setup>
import { ref, inject } from 'vue'
const center = ref([8.5, 47])
  const projection = ref('EPSG:4326')
  const zoom = ref(8)
  const rotation = ref(0)
  const strokeWidth = ref(2)
  const strokeColor = ref('black')

  const url = ref("http://localhost:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=ne:countries&outputFormat=application/json")
  
  const format = inject('ol-format');
  console.log(format)
  const geoJson = new format.GeoJSON();


defineProps({
  msg: String,
})

</script>

<template>
  <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:400px">
  
  <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" 
  :projection="projection" />

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
            <ol-geom-line-string :coordinates="[[8.5,47],[8.6,47.1],[8.6,47.3],[8.8,47.2]]"></ol-geom-line-string>
            <ol-style>
                    <ol-style-stroke :color="strokeColor" :width="strokeWidth"></ol-style-stroke>          
            </ol-style>
        </ol-feature>

  </ol-source-vector>

</ol-vector-layer>

</ol-map>
</template>

