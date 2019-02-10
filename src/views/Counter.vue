<template>
  <div class="counter">
    <h1>This is a rx test page</h1>
    <RxExample />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RxExample from '@/components/RxExample.vue'

@Component({
  components: {
    RxExample,
  },
})
export default class Counter extends Vue {}
</script>