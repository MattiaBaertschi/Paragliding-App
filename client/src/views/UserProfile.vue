<template>
    <div class="flex flex-col items-center">
    <img src="https://www.shutterstock.com/image-vector/cheerful-gray-cat-enjoys-paragliding-260nw-1981432805.jpg" alt="Profilbild" class="w-32 h-32 rounded-full mb-4">

    <h2 class="text-xl mb-4 font-bold text-gray-800 mb-2">{{ sessionStore.username }}</h2>
    <p v-if="sessionStore.sessionToken != null" class="text-xs mb-2">Token vorhanden</p>

    <div class="flex mb-4 gap-x-2">
      <router-link to="/profil/bearbeiten" class="bg-white hover:bg-secondary rounded-full px-4 py-2">Bearbeiten</router-link>
    </div>
  </div>

    <div class="flex w-full my-8">
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">72</span>
            <span class="text-sm font-semibold tracking-wider">Flüge</span>
        </div>
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">45:12</span>
            <span class="text-sm font-semibold tracking-wider">Flugzeit</span>
        </div>
        <div class="w-1/3 flex flex-col text-center gap-y-1">
            <span class="text-4xl text-bold">12</span>
            <span class="text-sm font-semibold tracking-wider">Airbuddys</span>
        </div>
    </div>

    <div class="pt-4 flex gap-2">
    <RouterLink to="/flights" class="flex my-2 w-1/2">
        <div class="bg-white w-full p-4 rounded-xl">
            <div class="text-black uppercase font-bold text-sm tracking-wider">#122</div>
            <div class="text-2xl font-semibold">Flüge</div>
        </div>
    </RouterLink>
    <RouterLink to="/flights" class="flex my-2 w-1/2">
        <div class="bg-white w-full p-4 rounded-xl">
            <div class="text-black uppercase font-bold text-sm tracking-wider">#15</div>
            <div class="text-2xl font-semibold">Airbudys</div>
        </div>
    </RouterLink>
    </div>
    <div>
        <div class="flex items-center justify-between mt-8">
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
    <div class="my-64">
      <p class="mb-4">Cloudy übernimmt keine Gewähr für die Korrektheit der dargestelltetn Daten.</p>
      <button class="text-xs tracking-wider ml-2 px-4 py-2 my-1 bg-white rounded-full">Alle Daten exportieren</button>
      <button class="text-xs tracking-wider ml-2 px-4 py-2 my-1 bg-white rounded-full">Alle Daten Löschen</button>
      <button @click="sessionStore.logout(); router.push('/login');" class="text-xs tracking-wider ml-2 px-4 py-2 my-1 bg-white rounded-full">Log out</button>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import UserLineChart from "@/components/UserLineChart.vue";
import { useSessionStore } from '@/store/user';
import { useRouter } from 'vue-router';
  
const router = useRouter();
const sessionStore = useSessionStore();


const updateKey = ref(0)
const chartTimeFrame = ref("all");
const displayChartType = ref(0);


function setChartTimeFrame(value) {
  chartData.labels = filterDataLabel(dataLabel, value)
  flightStats.labels = filterDataLabel(datalabel1, value)
  timePerFlightStats.labels = filterDataLabel(datalabel2, value)
  // Wichtig damit Button als aktiv markiert wird
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
      backgroundColor: "#B76126",
    },
  ],
};

const chartData = {
    labels: filterDataLabel(dataLabel, "all"),
    datasets: [{
    data: data1,
    label: 'Flughöhe',
    backgroundColor: "#B76126"
    },
    {data: data2,
    label: 'Höhe über Grund',
    backgroundColor: '#29344B'
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