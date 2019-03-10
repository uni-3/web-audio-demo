<template>
  <div class="contents">
    <TextArea/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @ is an alias to /src
import TextArea from "@/components/TextArea.vue";

@Component({
  components: {
    TextArea
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.contents img {
  height: 100px;
  width: 100px;
}
</style>
