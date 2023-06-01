<script setup>
import { ref, inject, computed, watch, onMounted, toRaw } from 'vue'
import { apiGet } from '@/utils/api';
import { useSessionStore } from '@/store/user';

const token = useSessionStore().sessionToken;
const dataRegionUser = ref({
  "523": {
    "count": 4,
  }})
const dataRegionBuddys = ref({
  "523": {
    "count": 4,
    "user_id": 7,
    "username": "cumulus"
  }})
const data = ref({
  "523": {
    "count": 4,
    "user_id": 7,
    "username": "cumulus"
  },
  "378": {
    "count": 2,
    "user_id": 7,
    "username": "cumulus"
  },
  "1521": {
    "count": 2,
    "user_id": 7,
    "username": "cumulus"
  }
});


onMounted(async () => {
  dataRegionBuddys.value = await apiGet('most_flights_per_region', null , token);
  dataRegionUser.value = await apiGet('flight_in_region', null , token);
  data.value = dataRegionBuddys.value
  maxFlightCount.value = Math.max(...Object.values(data.value).map(item => item.count));
  //loaded.value = true
})

  const displayedFlights = ref("me")
  // https://github.com/highcanfly-club/vue-highcanfly/blob/5f757f3a4ccf077bf56a18734ca8cf07bd912e99/src/components/Maps/OLMapSitesDePratique.vue
  const center = ref([828127, 5934275]);
  const projection = ref('EPSG:3857');
  const zoom = ref(10)
  const rotation = ref(0)
  const strokeWidth = ref(2)
  const strokeColor = ref('black')
  const format = inject('ol-format');
  const maxFlightCount = ref(1)
  
  const flightRegion = [[46.91, 7.45], [46.47, 7.25], [46.74, 8.10]]
  const flightPathWebMecator = computed(() => flight_path.map(toWebMercator));
  const flightRegionWebMecator = computed(() => flightRegion.map(toWebMercator));

  function handledisplayedFlights(selection){
    if (selection == "me"){
      displayedFlights.value = 'me'
      data.value = dataRegionUser.value
    }
    else {
      displayedFlights.value = 'buddys'
      data.value = dataRegionBuddys.value
    }
  }

  function toWebMercator(coord) {
    const [lat, lon] = coord;
    const r_major = 6378137.0; // Equatorial radius in meters
    const x = r_major * (Math.PI * lon / 180);
    const scale = x / lon;
    const y = (180.0 / Math.PI * Math.log(Math.tan(Math.PI / 4.0 + lat * (Math.PI / 180.0) / 2.0))) * scale;
    return [x, y];
  }

  const geoJson = new format.GeoJSON();
  const selectConditions = inject("ol-selectconditions");
  const selectCondition = selectConditions.singleClick;
  const featureSelected = (event) => {
      if (event.selected.length != 0){
      const SelectedRegion = event.selected[0].values_
      activeRegion.value = SelectedRegion.Region
      }
    };
  
  const activeRegion = ref("")
  const activeRegionData = ref(null)

  const selectInteactionFilter = (feature) => {
      return feature.values_.Name != undefined;
    };

  const overrideStyleFunction = ( feature, style) => {
    let properties= parseInt(feature.values_.Region)  //from extra data in properties of the feature
    
    if (Object.keys(data.value).includes(String(properties))) {
      style.getFill().setColor(calculateColor(properties));
    }

    else {
      style.getFill().setColor("rgba(50, 50, 50, 0.1)");
    }
}


  watch(activeRegion, (newValue, oldValue) => {
    try {
      activeRegionData.value = toRaw(data.value[newValue]);
    }
    catch {
      null
    }
  }
  )

defineProps({
  msg: String,
})

function getCountById(id) {
    return data.value[id] ? data.value[id].count : 0;
}

function calculateColor(regionID) {
    const greenValue = Math.round(getCountById(regionID) * 1 / maxFlightCount.value * 255);
    const RGBA_value = `rgba(0, ${greenValue}, 0, 0.5)`
    return  RGBA_value;
}


const currentZoom = ref(zoom.value);
const zoomChanged = (newZoom) => {
    currentZoom.value = newZoom;
  };

</script>

<template>
<div>
  <div class="fixed bottom-14 z-10 left-0 right-0 bg-white px-4 py-4 flex center">
  <p class="mr-2 font-semibold">#{{ activeRegion }}</p>
  <div v-if="activeRegionData != null" >
    <p v-if="displayedFlights == 'buddys'">
      Der User {{ activeRegionData.username }} ist {{ activeRegionData.count }}x in dieser Region geflogen.
      <RouterLink :to="`buddy/${ activeRegionData.user_id }`">Profil ansehen</RouterLink>
    </p>
    <p v-if="displayedFlights == 'me'">
      Du bist {{ activeRegionData.count }}x in dieser Region geflogen.
    </p>
  </div>
  <div v-if="activeRegionData == undefined">
    <p>Noch keine Flüge in dieser Region</p>
  </div>
</div>

  <ol-map 
    :loadTilesWhileAnimating="true" 
    :loadTilesWhileInteracting="true" 
    style="height:100vh; width:100vw; left: 0px; position: absolute; z-index: 0;" 
    class="-mt-4"
  >
    <ol-view 
      ref="view" 
      :center="center" 
      :rotation="rotation" 
      :zoom="zoom" 
      :projection="projection" 
      @zoomChanged="zoomChanged"
    />
    <ol-zoom-control/>
    <ol-fullscreen-control/>
    <ol-tile-layer>
      <ol-source-xyz url="http://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png" />
      <!-- <ol-source-xyz url="https://stamen-tiles-c.a.ssl.fastly.net/terrain/{z}/{x}/{y}@2x.png" />  -->
    </ol-tile-layer>


    <ol-interaction-select
      @select="featureSelected"
      :condition="selectCondition"
      :filter="selectInteactionFilter"
    >
      <ol-style>
        <ol-style-stroke color="black" :width="1"></ol-style-stroke>
        <!-- <ol-style-fill color="rgba(255,255,255,1)"></ol-style-fill> -->
        <!--<ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>-->
      </ol-style>
    </ol-interaction-select>

    <ol-vector-layer>
      <ol-source-vector
        v-if="currentZoom > 7"
        ref="flightregion"
        url="/hexagon_swiss_10km_wgs84_reform.geojson"
        :format="geoJson"
        :projection="projection"
        :key="displayedFlights"
      />
      <!-- <ol-source-vector
        v-if="currentZoom > 7"
        ref="cities"
        url="https://paracloudy.ch/assets/hexagon_swiss_10km_wgs84_reform.geojson"
        :format="geoJson"
        :projection="projection"
      /> -->

      <ol-style :overrideStyleFunction="overrideStyleFunction">
        <ol-style-stroke color="black" :width="0.2"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,0,0.1)"></ol-style-fill>
        <ol-style-circle :radius="7">
          <ol-style-fill color="blue"></ol-style-fill>
        </ol-style-circle>
      </ol-style>
    </ol-vector-layer>

</ol-map>
<div class="fixed inset-x-0 -top-16 flex items-center justify-center z-0">
  <div class="relative top-32 mx-2 text-center px-4 rounded-lg text-sm tracking-wider">
    <button @click="handledisplayedFlights('me')" class="px-4 py-2 mx-1 rounded-full z-30" :class="{ 'text-white bg-black': displayedFlights === 'me', 'bg-white text-black' : displayedFlights != 'me' }">Ich</button>
    <button @click="handledisplayedFlights('buddys')" class="px-4 py-2 mx-1 rounded-full z-30" :class="{ 'text-white bg-black': displayedFlights === 'buddys', 'bg-white text-black' : displayedFlights != 'buddys' }">Buddys</button></div>
  </div>
</div>

</template>

