<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height:400px"
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
        <ol-style-icon :src="markerIcon" :scale="0.05"></ol-style-icon>
      </ol-style>
    </ol-interaction-select>

    <ol-vector-layer>
      <ol-source-vector
        ref="cities"
        url="http://localhost:5173/src/data/regions.json"
        :format="geoJson"
        :projection="projection"
      >
      </ol-source-vector>

      <ol-style>
        <ol-style-stroke color="black" :width="1"></ol-style-stroke>
        <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
        <ol-style-circle :radius="7">
          <ol-style-fill color="blue"></ol-style-fill>
        </ol-style-circle>
      </ol-style>
    </ol-vector-layer>
  </ol-map>
</template>

<script>
import markerIcon from "@/assets/marker.png";
import { ref, inject } from "vue";
export default {
  setup() {
    const center = ref([40, 40]);
    const projection = ref("EPSG:4326");
    const zoom = ref(8);
    const rotation = ref(0);
    const format = inject("ol-format");
    const geoJson = new format.GeoJSON();
    const selectConditions = inject("ol-selectconditions");
    const selectCondition = selectConditions.singleClick;
    const featureSelected = (event) => {
      //console.log(event);
      //console.log("hoi")
      //console.log(event.selected);
      if (event.selected.length != 0){
      const SelectedRegion = event.selected[0].values_
      console.log(SelectedRegion.Name, SelectedRegion.Region)
      //console.log("=D")
      }
    };

    const selectInteactionFilter = (feature) => {
      return feature.values_.Name != undefined;
    };

    return {
      center,
      projection,
      zoom,
      rotation,
      selectCondition,
      featureSelected,
      selectInteactionFilter,
      geoJson,
      markerIcon,
    };
  },
};
</script>