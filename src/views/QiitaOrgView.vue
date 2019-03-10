<template>
  <div class='content'>
    <h1>qiita organization view</h1>
    <div class='charts'>
      <BarChart class='article-count' :barchart='artBarChartModel'></BarChart>
      <BarChart class='like-count' :barchart='likeBarChartModel'></BarChart>
      <BarChart class='filter-count' :barchart='filterBarChartModel'></BarChart>
    </div>
    <div class='table-data'>
      <QiitaTableData :datas='chartData'/>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Watch } from "vue-property-decorator";
import BarChart from "@/components/BarChart.vue";
import QiitaTableData from "@/components/QiitaTableData.vue";
import { GChart } from "vue-google-charts";

import { Observable } from "rxjs";
import axios from "axios";
import { BarChartModel, GetBarDatasetsOptions } from "../models/barchart";

@Component<QiitaOrgView>({
  components: {
    GChart,
    BarChart,
    QiitaTableData
  },
  created() {
    console.log("env", process.env);
    this.getAxios();
  }
  /*
   */
})
export default class QiitaOrgView extends Vue {
  // watchするときはProp()を入れる
  @Prop()
  chartData: any = [];

  @Prop()
  artBarChartModel: BarChartModel;
  @Prop()
  likeBarChartModel: BarChartModel;
  @Prop()
  filterBarChartModel: BarChartModel;

  url = process.env.VUE_APP_GET_QIITA_ORG_JSON_URL;

  config = {
    headers: {
      "content-type": "application/x-www-form-urlencoded",

      "Access-Control-Allow-Origin": "*"
    }
  };

  chartOptions = {
    //title: "chart title",
    //subtitle: "subtitle of chart",
    responsive: true,
    legend: {
      display: true,
      labels: {
        filter: (legendItem, data) => {
          return true; // this should hide all legends
        }
      }
    },
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };

  /*
   */
  @Watch("chartData")
  onChangeChartData() {
    // 描画するデータ数
    let dataLength = 7;

    let artOptions: GetBarDatasetsOptions = {
      title: "記事数",
      key: "article_count",
      nRank: dataLength,
      color: "#f87979",
      isFilterData: false
    };
    let artRes = this.getBarDatasets(artOptions);

    this.artBarChartModel = {
      chartData: {
        datasets: artRes.datasets,
        labels: artRes.labels
      },
      options: this.chartOptions
    };

    console.log("chartdata", this.artBarChartModel);
    let likeOptions: GetBarDatasetsOptions = {
      title: "いいね数",
      key: "nice_count",
      nRank: dataLength,
      color: "#fcc2c2",
      isFilterData: false
    };
    let likeRes = this.getBarDatasets(likeOptions);
    this.likeBarChartModel = {
      chartData: {
        datasets: likeRes.datasets,
        labels: likeRes.labels
      },
      options: this.chartOptions
    };

    //console.log("changed data", this.artChartDatasets);
    //console.log("changed data", this.artChartLables);

    let filterOptions: GetBarDatasetsOptions = {
      title: "JavaScript いいね数",
      key: "value",
      nRank: dataLength,
      color: "#fcc2c2",
      isFilterData: true
    };
    let filterRes = this.getBarDatasets(filterOptions);
    this.filterBarChartModel = {
      chartData: {
        datasets: filterRes.datasets,
        labels: filterRes.labels
      },
      options: this.chartOptions
    };
  }

  getBarChartData = (prop, datasetsOptions) => {
    let res;
  };

  filterData = () => {
    let key = "JavaScript";
    // copy data
    let chartData = this.chartData.slice(0, this.chartData.length);

    // filterしたデータのindex [false, true, true ...]を取得
    let filtered = chartData.map(data => {
      return data.tags.filter(tag => tag.tag_name === key).length;
    });
    console.log("fil", filtered);
    let filteredData = chartData.filter((data, index) => {
      //let filterData = chartData.map((data, index) => {
      if (!!filtered[index]) {
        return data;
      }
    });

    let res = filteredData.map(data => {
      let o = {};
      data.tags.forEach(tag => {
        if (tag.tag_name === key) {
          o = {
            name: data.name,
            //label: data.name,
            value: tag.tag_nice_count
          };
        }
      });
      return o;
    });

    console.log("f data", res);

    return res;
  };

  // 指定したkeyで昇順にソートする
  // fのときフィルターした値をplotする
  getBarDatasets = (options: GetBarDatasetsOptions) => {
    // copy data
    let chartData = this.chartData.slice(0, this.chartData.length);

    if (options.isFilterData) {
      chartData = this.filterData();
    }

    // 昇順にソート
    let sortedData = chartData.sort((a, b) => {
      return b[options.key] - a[options.key];
    });

    let data = sortedData.map(row => {
      return row[options.key];
    });

    let datasets = [
      {
        label: options.title,
        backgroundColor: options.color,
        data: data.slice(0, options.nRank)
      }
    ];

    let labels = sortedData.map(row => {
      return row.name;
    });
    labels = labels.slice(0, options.nRank);

    return {
      datasets: datasets,
      labels: labels
    };
  };

  getAxios = () => {
    return axios
      .get(this.url)
      .then(response => {
        this.chartData = response.data;
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
  };
}
</script>

<style lang="scss">
.content .charts > * {
  width: 50%;
  display: inline-block;
}
</style>
