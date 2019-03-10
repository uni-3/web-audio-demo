<template>
  <div class="charts">
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GChart } from "vue-google-charts";

import { Observable } from "rxjs";
import axios from "axios";
let url =
  "https://script.google.com/macros/s/AKfycbzSBZIXQYNfoPrkKoewDg5dXrnbso99WX3UMPmn6Ju_OyJKPLCv/exec";

let config = {
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    //"Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
  }
};
let observable$ = Observable.create(observer => {
  axios
    .get(url)
    .then(response => {
      observer.next(response.data);
      observer.complete();
    })
    .catch(error => {
      observer.error(error);
    });
});
let subscription = observable$.subscribe({
  next: data => {
    console.log("[data] => ", data);
    return data;
  },
  complete: data => console.log("[complete]")
});

@Component<Charts>({
  components: {
    GChart
  },
  created(this: Vue) {
    return {
      chartData: subscription
    };
  },
  // receive from other component?
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      /*
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350]
      ],
      */
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  }
})
export default class Charts extends Vue {
  chartData: any;
}
</script>
