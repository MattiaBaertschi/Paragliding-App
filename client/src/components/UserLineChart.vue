<template>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData"/>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

const props = defineProps({
  chartData: { 
    type: Object,
    default: ["1","2","3","4","5"]
    },
    chartOptions: {
        type: Object,
        default: {responsive: true}
    },
})

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)



</script>