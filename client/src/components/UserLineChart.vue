<template>
    <Line id="my-chart-id" :options="chartOptions" :data="convertLabelsToReadableDates(chartData)"/>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const props = defineProps({
  chartData: { 
    type: Object,
    default: []
    },
    chartOptions: {
        type: Object,
        default: {responsive: true}
    },
})

function convertLabelsToReadableDates(chartData) {

  chartData.labels = chartData.labels.map(label => {
    const date = new Date(label);
    return date.toLocaleDateString();
  });

  return chartData;
}

</script>