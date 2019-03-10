interface ChartData {
  datasets: any;
  labels: Array<string>;
}

export interface BarChartModel {
  chartData: ChartData;
  options: any;
}

export interface GetBarDatasetsOptions {
  title: string;
  key: string;
  nRank: number;
  color: string;
  isFilterData: boolean;
}
