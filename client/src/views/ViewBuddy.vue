<template>
    <ol-map style="height:400px">
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
        @zoomChanged="zoomChanged"
        @centerChanged="centerChanged"
        @resolutionChanged="resolutionChanged"
        @rotationChanged="rotationChanged"
      />
  
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
    </ol-map>
  
    <div>
      center : {{ currentCenter }} zoom : {{ currentZoom }} resolution :
      {{ currentResolution }} rotation : {{ currentRotation }}
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const center = ref([40, 40]);
  const projection = ref("EPSG:4326");
  const zoom = ref(8);
  const rotation = ref(0);
  
  const currentCenter = ref(center.value);
  const currentZoom = ref(zoom.value);
  const currentResolution = ref(null); // Initial resolution not defined in original code
  const currentRotation = ref(rotation.value);
  
  const zoomChanged = (newZoom) => {
    currentZoom.value = newZoom;
  };
  
  const resolutionChanged = (newResolution) => {
    currentResolution.value = newResolution;
  };
  
  const centerChanged = (newCenter) => {
    currentCenter.value = newCenter;
  };
  
  const rotationChanged = (newRotation) => {
    currentRotation.value = newRotation;
  };
  </script>
  