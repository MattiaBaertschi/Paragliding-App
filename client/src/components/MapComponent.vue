<script setup>
import { defineProps, onMounted, toRaw, ref, computed } from 'vue'

const props = defineProps({
  flightPath: { 
    type: Array,
    default: [
  [46.376067, 8.02655],
  [46.376067, 8.026633]
]},

mapControls: {
  type: Boolean,
  default: false
  },
})

const center = ref([828127, 5934275]);
const projection = ref('EPSG:3857');
const view = ref()
const zoom = ref(8)
const rotation = ref(0)
const strokeWidth = ref(2)
const strokeColor = ref('black')
const startColor = ref("green")
const stopColor = ref("red")
const coordinate = ref(toWebMercator([46.70383, 7.67178]));
const radius = ref(5)
const selected = ref(
      "http://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
    );

const flightPathWebMecator = computed(() => props.flightPath.map(toWebMercator));

const start_coordinate = flightPathWebMecator.value[0]
const stop_coordinate = flightPathWebMecator.value[flightPathWebMecator.value.length -1]
//const stop_coordinate = computed(()=> flightPathWebMecator.value[flightPathWebMecator.value.length -1])

function toWebMercator(coord) {
  const [lon, lat] = coord;
  const r_major = 6378137.0; // Equatorial radius in meters
  const x = r_major * (Math.PI * lon / 180);
  const scale = x / lon;
  const y = (180.0 / Math.PI * Math.log(Math.tan(Math.PI / 4.0 + lat * (Math.PI / 180.0) / 2.0))) * scale;
  return [x, y];
  }

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
  const lats = geometry.value.map(coord => coord[1]);
  const max_lat = Math.max(...lats);
  const min_lat = Math.min(...lats);

  const longs = geometry.value.map(coord => coord[0]);
  const max_long = Math.max(...longs);
  const min_long = Math.min(...longs);

  // Format the results as specified and add some padding
  const result = [
    parseFloat(min_long.toFixed(14))-(max_long-min_long)*0.1,
    parseFloat(min_lat.toFixed(14))-(max_lat-min_lat)*0.1,
    parseFloat(max_long.toFixed(14))+(max_long-min_long)*0.1,
    parseFloat(max_lat.toFixed(14))+(max_lat-min_lat)*0.1,
  ];
  console.log("mapExtent:", result);
  return(result)
}


onMounted( () => {   
    view.value.view.fit(calcGeomExtent(flightPathWebMecator))   
  })

</script>

<template>

  <div class="w-full h-full object-cover">
  <ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" :mouseWheelZoom="mapControls" :key="mapControls" style="height:100%">

  <ol-view ref="view" :center=calcMapCenter(flightPathWebMecator) :rotation="rotation" :zoom="zoom" :projection="projection" />
  <ol-zoom-control v-if="mapControls"/>
  <ol-fullscreen-control v-if="mapControls"/>
  <!--
  <ol-tile-layer>
      <ol-source-osm />
  </ol-tile-layer>
  -->
  <ol-tile-layer>
      <ol-source-xyz url="http://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png" />
      <!--<ol-source-xyz url="https://stamen-tiles-c.a.ssl.fastly.net/terrain/{z}/{x}/{y}@2x.png" />-->
  </ol-tile-layer>


  <ol-vector-layer>
    <ol-source-vector>

        <ol-feature>
            <ol-geom-line-string :coordinates=flightPathWebMecator></ol-geom-line-string>
            <ol-style>
                    <ol-style-stroke :color="strokeColor" :width="strokeWidth"></ol-style-stroke>          
            </ol-style>
        </ol-feature>

        <ol-feature>
          <ol-geom-point :coordinates="start_coordinate"></ol-geom-point>
          <ol-style>
            <ol-style-circle :radius="radius">
              <ol-style-fill :color="startColor"></ol-style-fill>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
              ></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>

        <ol-feature>
          <ol-geom-point :coordinates="stop_coordinate"></ol-geom-point>
          <ol-style>
            <ol-style-circle :radius="radius">
              <ol-style-fill :color="stopColor"></ol-style-fill>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
              ></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
  </ol-source-vector>
  </ol-vector-layer>



  </ol-map>
</div>
</template>

