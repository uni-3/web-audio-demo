<template>
  <v-card>
    <v-card-title>Qiita Organizations Table
      <v-spacer></v-spacer>
      <v-text-field v-model='search' append-icon='search' label='Search' single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers='headers' :items='datas' :search='search' :loading='loading'>
      <v-progress-linear v-slot:progress color='blue' indeterminate></v-progress-linear>
      <template slot='items' scope='props'>
        <td>
          {{ props.item.name}}
          <a target='_brank' :href='props.item.org_url'>HP</a>
        </td>
        <td class='text-xs-right'>
          <img class='org-logo' :src='props.item.logo_url'>
        </td>
        <td class='text-xs-left'>{{ props.item.description }}</td>
        <td class='text-xs-right'>{{ props.item.article_count }}</td>
        <td class='text-xs-right'>{{ props.item.nice_count }}</td>
        <td class='text-xs-right'>
          <a target='_brank' :href='props.item.members_url'>list of members</a>
        </td>
        <template v-for='(tag, index) in props.item.tags'>
          <td :key='props.item.logo_url+-+index+-+tag.tag_name' class='text-xs-right'>
            {{ tag.tag_name }}
            <br>
            <img class='org-logo' :src='tag.tag_icon_url'>
          </td>
          <td
            :key='props.item.name+-+index+-+tag.tag_article_count'
            class='text-xs-right'
          >{{ tag.tag_article_count}}</td>
          <td :key='props.item.org_url+-+index' class='text-xs-right'>{{ tag.tag_nice_count }}</td>
        </template>
      </template>
      <v-alert
        v-slot:no-results
        :value='true'
        color='error'
        icon='warning'
      >Your search for "{{ search }}" found no results.</v-alert>
    </v-data-table>
  </v-card>
</template>
<script lang="ts">
import { Prop, Component, Vue, Watch } from "vue-property-decorator";

@Component<QiitaTableData>({
  components: {
    QiitaTableData
  },
  created() {},
  data() {
    return {
      search: ""
    };
  }
})
export default class QiitaTableData extends Vue {
  // 親コンポーネントから受け取る
  @Prop()
  public datas?: any;
  // 変化しない値はpropsいらない
  //@Prop()
  headers?: Array<any> = [
    {
      text: "org name",
      align: "left",
      sortable: true,
      value: "name"
    },
    { text: "logo", value: "logo_url" },
    { text: "description", value: "description" },
    { text: "n article", value: "article_count" },
    { text: "n like", value: "nice_count" },
    { text: "member url", value: "members_url" },
    /*
    { text: "tag name", value: "tag_name" },
    { text: "tag n article", value: "tag_article_count" },
    { text: "tag n like", value: "tag_nice_count" },
    */
    { text: "tags", value: "tags", sortable: false }
  ];
  loading: boolean = true;

  // 指定した値が変化したら走る
  @Watch("datas")
  onDatasChange(newVal: any, oldVal: any): void {
    if (newVal.length !== 0) {
      this.loading = false;
    }
  }

  /*
   */
}
</script>

<style lang="scss">
.org-logo {
  height: 45px;
  width: 45px;
}
</style>
