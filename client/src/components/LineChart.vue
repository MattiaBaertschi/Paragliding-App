<template>
  <Line
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale)

export default {
  props: ["data1","data2","dataLabel"],
  setup(props) {},
  name: 'LineChart',
  components: { Line },
  data() {
    const dataSetfromProps = [{ data: this.data1, label: 'Höhe über Grund', backgroundColor: '#f87979' },{ data: this.data2, label: 'Höhe über Meer', backgroundColor: '#29344B' }];
    return {
      chartData: {
        labels: this.dataLabel,
        datasets: dataSetfromProps
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>