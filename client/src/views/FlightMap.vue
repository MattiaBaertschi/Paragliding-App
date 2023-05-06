<script setup>
import { ref, inject, computed, watch } from 'vue'

  // https://github.com/highcanfly-club/vue-highcanfly/blob/5f757f3a4ccf077bf56a18734ca8cf07bd912e99/src/components/Maps/OLMapSitesDePratique.vue
  const center = ref([828127, 5934275]);
  const projection = ref('EPSG:3857');
  const zoom = ref(8)
  const rotation = ref(0)
  const strokeWidth = ref(2)
  const strokeColor = ref('black')
  const format = inject('ol-format');
  
  const flightRegion = [[46.91, 7.45], [46.47, 7.25], [46.74, 8.10]]
  const flightPathWebMecator = computed(() => flight_path.map(toWebMercator));
  const flightRegionWebMecator = computed(() => flightRegion.map(toWebMercator));

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
  const url = "http://localhost:5173/src/data/regions.json"
  const featureSelected = (event) => {
      if (event.selected.length != 0){
      const SelectedRegion = event.selected[0].values_
      console.log(SelectedRegion.Name, SelectedRegion.Region, "color:", getColorShade(1,500,SelectedRegion.Region))
      activeRegion.value = SelectedRegion.Name
      }
    };
  
  const activeRegion = ref("Voralpen West")

  const selectInteactionFilter = (feature) => {
      return feature.values_.Name != undefined;
    };

    const overrideStyleFunction = (feature, style) => {
      //console.log(":)", feature.values_.Region)
      let properties= parseInt(feature.values_.Region)  //from extra data in properties of the feature
      //console.log(properties)
      if(properties === 104){ // change the style
        console.log("JAAAAAAAAAAH")
        //console.log(style)
          //style.getFill().setColor("red");
          style.getFill().setColor(getColorShade(0,400,properties));
        }
      else {
        style.getFill().setColor(getColorShade(0,537,properties));
      }
  }

  const setRegionColor = (flightCount) => {
    console.log(flightCount)
    return "yellow"
  }

  watch(activeRegion, (newValue, oldValue) => {
    console.log("bliblablub",newValue)
  })

defineProps({
  msg: String,
})
//https://xctherm.com/data/regions.json


function getColorShade(minValue, maxValue, value) {
  
  const colorRange = 255;
  const index = Math.round((value - minValue) / (maxValue - minValue) * colorRange);
  const red = 0
  const green = Math.round(155 * (index / colorRange) + 100)
  const blue = 0;

  //if (value != 0){
  if (value != 103 && value !=102){
    return `rgba(${red}, ${green}, ${blue}, 0.5)`;
  }
  else {
    return `rgba(125, 125, 125, 0.5)`;
  }
}

console.log(getColorShade(1,500,499))


</script>

<template>
  <button class="px-4 mx-2 border-2 rounded-full z-30">Meine Flüge</button>
  <button class="px-4 mx-2 border-2 rounded-full z-30">Flüge meiner Buddys</button>
<div>
  <div class="fixed bottom-11 z-10 left-0 right-0 bg-white px-4 py-4 flex center">
  <p><strong>Region:</strong> {{ activeRegion }}</p>
</div>

  <ol-map 
    :loadTilesWhileAnimating="true" 
    :loadTilesWhileInteracting="true" 
    style="height:100vh;" class="-m-4 w-100vw z-20 mt-6"
  >
    <ol-view 
      ref="view" 
      :center="center" 
      :rotation="rotation" 
      :zoom="zoom" 
      :projection="projection" 
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-interaction-select
      @select="featureSelected"
      :condition="selectCondition"
      :filter="selectInteactionFilter"
    >
      <ol-style>
        <ol-style-stroke color="black" :width="1"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,1)"></ol-style-fill>
        <!--<ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>-->
      </ol-style>
    </ol-interaction-select>

    <ol-vector-layer>
      <ol-source-vector
        ref="cities"
        url="http://localhost:5173/src/data/regions.json"
        :format="geoJson"
        :projection="projection"
      />

      <ol-style :overrideStyleFunction="overrideStyleFunction">
        <ol-style-stroke color="black" :width="1"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,0,0.5)"></ol-style-fill>
        <ol-style-circle :radius="7">
          <ol-style-fill color="blue"></ol-style-fill>
        </ol-style-circle>
      </ol-style>
    </ol-vector-layer>

</ol-map>
</div>
</template>

