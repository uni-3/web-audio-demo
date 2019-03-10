<script lang="ts">
import { Prop, Component, Vue, Watch, Mixins } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Bar } from "vue-chartjs";
import { BarChartModel } from "../models/barchart";

@Component<BarChart>({
  components: {
    Bar
  }
})
export default class BarChart extends mixins(Bar) {
  @Prop()
  public barchart?: BarChartModel;

  @Watch("barchart")
  onChangeBarChart(val): void {
    this.renderChart(this.barchart.chartData, this.barchart.options);
  }

  /*
  name: "BarChart",
  extends: Bar,
  props: ["data", "options"],
  mounted: function() {
    this.renderChart(this.data, this.options);
  },
  watch: {
    data: function(val) {
      this.renderChart(this.data, this.options);
    },
    options: function(val) {
      this.renderChart(this.data, this.options);
    }
  }
  */
}
</script>