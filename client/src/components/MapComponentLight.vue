<script setup>
import { defineProps, onMounted, toRaw, ref, computed } from 'vue'

const props = defineProps({
  flightPath: { 
    type: Array,
    default: [
  [46.376067, 8.02655],
  [46.376083, 8.026533],
  [46.375967, 8.026633],
  [46.3759, 8.026683],
  [46.375833, 8.02675],
  [46.375783, 8.026833],
  [46.375767, 8.026933],
  [46.375767, 8.027033],
  [46.375783, 8.027133],
  [46.375817, 8.027233],
  [46.375867, 8.027317],
  [46.375933, 8.027367],
  [46.376, 8.027383],
  [46.376067, 8.027367],
  [46.376133, 8.027317],
  [46.376183, 8.027233],
  [46.376217, 8.027133],
  [46.376217, 8.027033],
  [46.376183, 8.026933],
  [46.37615, 8.02685],
  [46.3761, 8.02675],
  [46.376067, 8.026633]
]},
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

const flightPathWebMecator = computed(() => props.flightPath.map(toWebMercator));

const start_coordinate = flightPathWebMecator.value[0]
const stop_coordinate = flightPathWebMecator.value[flightPathWebMecator.value.length -1]
//const stop_coordinate = computed(()=> flightPathWebMecator.value[flightPathWebMecator.value.length -1])

function toWebMercator(coord) {
  const [lat, lon] = coord;
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

  const mapCenter = [avgLongitude,avgLatitude]

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
  return(result)
}


onMounted( () => {   
    view.value.view.fit(calcGeomExtent(flightPathWebMecator))   
  })

</script>

<template>

  <div class="w-full h-full object-cover p-1 rounded-xl bg-white">
  <ol-map ref="map" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" :mouseWheelZoom="false" style="height:100%">

  <ol-view ref="view" :center=calcMapCenter(flightPathWebMecator) :rotation="rotation" :zoom="zoom" :projection="projection" />

  <!--
  <ol-tile-layer>
      <ol-source-osm />
  </ol-tile-layer>
  -->


  <ol-vector-layer>
    <ol-source-vector>

        <ol-feature>
            <ol-geom-line-string :coordinates=flightPathWebMecator></ol-geom-line-string>
            <ol-style>
                    <ol-style-stroke :color="strokeColor" :width="strokeWidth"></ol-style-stroke>          
            </ol-style>
        </ol-feature>
<!--
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
        -->
  </ol-source-vector>
  </ol-vector-layer>



  </ol-map>
</div>
</template>

