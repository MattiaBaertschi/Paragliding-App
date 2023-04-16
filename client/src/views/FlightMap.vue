<script setup>
import { ref, inject } from 'vue'
import { register } from 'ol/proj/proj4';

  // https://github.com/highcanfly-club/vue-highcanfly/blob/5f757f3a4ccf077bf56a18734ca8cf07bd912e99/src/components/Maps/OLMapSitesDePratique.vue
  const center = ref([2600000, 1200000]);
  const projection = ref('EPSG:2056');
  const espg2056Extent = [2420000, 1030000, 2900000, 1350000];
  const zoom = ref(8)
  const rotation = ref(0)
  const strokeWidth = ref(2)
  const strokeColor = ref('black')
  const mapUrl = "http://localhost:5173/src/assets/regions.geojson"

  const url = ref("http://localhost:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typename=ne:countries&outputFormat=application/json")
  
  const format = inject('ol-format');
  console.log(format)
  const geoJson = new format.GeoJSON();


defineProps({
  msg: String,
})
//https://xctherm.com/data/regions.json
</script>

<template>
<div>
  <div class="fixed bottom-11 z-10 left-0 right-0 bg-dark px-4 py-4 bg-dark text-white flex center">
    <button class="px-4 mx-2 border-2 rounded-full">Alle</button>
  <button class="px-4 mx-2 border-2 rounded-full">Start</button>
  <button class="px-4 mx-2 border-2 rounded-full">Landung</button>
  
</div>

  <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:100vh;" class="-m-4 w-100vw">
  <ol-projection-register projectionName="EPSG:2056" :projectionExtent="espg2056Extent" projectionDef="++proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs"/>
  <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

  <ol-tile-layer>
      <ol-source-osm />
  </ol-tile-layer>

  <!--
    <ol-vector-layer>
    <ol-source-vector :url="mapUrl" :format="geoJson">

    </ol-source-vector>

  </ol-vector-layer>
-->

  <ol-vector-layer>
    <ol-source-vector :url="url" :format="geoJson"> </ol-source-vector>
    <ol-source-vector>
        <ol-feature>
            <ol-geom-line-string :coordinates="[[2641222, 1209564], [2641363, 1209748], [2641504, 1209931], [2641645, 1210115], [2641786, 1210299], [2641927, 1210482], [2642068, 1210666], [2642209, 1210850], [2642350, 1211033], [2642491, 1211217], [2642632, 1211401], [2642773, 1211584], [2642914, 1211768], [2643055, 1211952], [2643196, 1212135], [2643337, 1212319], [2643478, 1212503], [2643619, 1212686], [2643760, 1212870], [2643901, 1213054], [2644042, 1213237], [2644183, 1213421], [2644324, 1213605], [2644465, 1213788], [2644606, 1213972], [2644747, 1214156], [2644888, 1214339], [2645029, 1214523], [2645170, 1214707], [2645311, 1214890], [2645452, 1215074], [2645593, 1215258], [2645734, 1215441], [2645875, 1215625], [2646016, 1215809], [2646157, 1215992], [2646298, 1216176], [2646439, 1216360], [2646580, 1216543], [2646721, 1216727], [2646862, 1216911], [2647003, 1217094], [2647144, 1217278], [2647285, 1217462], [2647426, 1217645], [2647567, 1217829], [2647708, 1218013], [2647849, 1218196], [2647990, 1218380], [2648131, 1218564], [2648285, 1218462], [2648440, 1218360], [2648594, 1218258], [2648749, 1218156], [2648903, 1218054], [2649058, 1217952], [2649212, 1217849], [2649367, 1217747], [2649521, 1217645], [2649676, 1217543], [2649830, 1217441], [2649985, 1217339], [2650139, 1217237], [2650294, 1217135], [2650448, 1217033], [2650603, 1216931], [2650757, 1216829]]"></ol-geom-line-string>
            <ol-style>
                    <ol-style-stroke :color="strokeColor" :width="strokeWidth"></ol-style-stroke>          
            </ol-style>
        </ol-feature>

  </ol-source-vector>

</ol-vector-layer>

</ol-map>
</div>
</template>

