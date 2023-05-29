<template>
<div>
        <div class="flex items-center justify-between">
            <div class="flex flex-col">
                <button @click="setChartTimeFrame('all'); updateKey += 1" class="text-xs tracking-wider mr-2 px-4 py-2 my-1 bg-light rounded-full" :class="{ 'bg-primary text-white': chartTimeFrame === 'all'}">Alle</button>
                <button @click="setChartTimeFrame('year'); updateKey += 1"  class="text-xs tracking-wider mr-2 px-4 py-2 my-1 bg-light rounded-full" :class="{ 'bg-primary text-white': chartTimeFrame === 'year'}">Jahr</button>
                <button @click="setChartTimeFrame('month'); updateKey += 1" class="text-xs tracking-wider mr-2 px-4 py-2 my-1 bg-light rounded-full" :class="{ 'bg-primary text-white': chartTimeFrame === 'month'}">Monat</button>
                </div>
            <div class="text-center">
                <div class="text-3xl font-bold mb-2">4 Flüge</div>
                <div class="text-sm">August 2023</div>
            </div>
            <div class="flex flex-col">
                <button @click="displayChartType = 0" class="text-xs tracking-wider ml-2 px-4 py-2 my-1 bg-light rounded-full" :class="{ 'bg-primary text-white': displayChartType === 0 }">Flüge</button>
                <button @click="displayChartType = 1" class="text-xs tracking-wider ml-2 px-4 py-2 my-1 bg-light rounded-full" :class="{ 'bg-primary text-white': displayChartType === 1 }">Zeit</button>
                <button @click="displayChartType = 2" class="text-xs tracking-wider ml-2 px-4 py-2 my-1 bg-light rounded-full" :class="{ 'bg-primary text-white': displayChartType === 2 }">⌀ Zeit/Flug</button>
            </div>
        </div>
        <div v-if="displayChartType == 0">
            <UserLineChart :chartOptions="chartOptions" :chartData="chartData" :key="updateKey"/>
        </div>
        <div v-if="displayChartType == 1">
            <UserLineChart :chartOptions="chartOptions" :chartData="flightStats" :key="updateKey"/>
        </div>
        <div v-if="displayChartType == 2">
            <UserLineChart :chartOptions="chartOptions" :chartData="timePerFlightStats" :key="updateKey"/>
        </div>
    </div>
</template>

<script setup>
import UserLineChart from "@/components/UserLineChart.vue";
import { ref, reactive } from "vue";

const updateKey = ref(0)
const chartTimeFrame = ref("all");
const displayChartType = ref(0);


function setChartTimeFrame(value) {
  chartData.labels = filterDataLabel(dataLabel, value)
  flightStats.labels = filterDataLabel(datalabel1, value)
  timePerFlightStats.labels = filterDataLabel(datalabel2, value)
  chartTimeFrame.value = value
}

const dataLabel = [1681759873514, 1688654883620, 1688523871052, 1668476454296, 1668362147198, 1668287726579, 1668213209281, 1468058692034, 1467994224757, 1467929871418];
const datalabel1 = [1681759873514, 1688654883620, 1688523871052, 1668476454296, 1668362147198]
const datalabel2 = [1681759873514, 1688654883620, 1688523871052, 1668476454296, 1668362147198]
const data2 = [1305, 1207, 1209, 1207, 1205, 1203, 1205, 1207, 1210, 1212];
const data1 = [1012, 1014, 1008, 1013, 1011, 1011, 1004, 1014, 1004, 1009];

const flightStats = {
  labels: filterDataLabel(datalabel1, "all"),
  datasets: [
    {
      data: [1, 2, 3, 4, 5],
      label: "Flughöhe",
      backgroundColor: "#B76126",
    },
  ],
};

const timePerFlightStats = {
  labels: filterDataLabel(datalabel2, "all"),
  datasets: [
    {
      data: [1.3, 2.5, 1.1, 0.3, 1.8],
      label: "⌀ Flugzeit per Flug",
      backgroundColor: "#000000",
    },
  ],
};

const chartData = {
    labels: filterDataLabel(dataLabel, "all"),
    datasets: [{
    data: data1,
    label: 'Flüge',
    backgroundColor: "#aaaaaa"
    },
    {data: data2,
    label: 'Höhe über Grund',
    backgroundColor: '#000000'
    }
  ]};

const chartOptions = { responsive: true };

function filterDataLabel(dataLabel, chartTimeFrame) {
  const now = Date.now();
  const oneYear = 365 * 24 * 60 * 60 * 1000; // Anzahl der Millisekunden in einem Jahr
  const oneMonth = 30 * 24 * 60 * 60 * 1000; // Anzahl der Millisekunden in einem Monat (angenommen 30 Tage)

  if (chartTimeFrame === "all") {
    return dataLabel;
  } else if (chartTimeFrame === "year") {
    return dataLabel.filter((timestamp) => now - timestamp <= oneYear);
  } else if (chartTimeFrame === "month") {
    return dataLabel.filter((timestamp) => now - timestamp <= oneMonth);
  } else {
    return [];
  }
}


</script>