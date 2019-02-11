<template>
    <section>
        <h2>Click on 'Count' button to count how many clicks</h2>
        <button v-stream:click="count$">Count clicks</button>
        <button @click="clearCounter">Clear counter</button>
        <p>{{result$}}</p>
    </section>
</template>

<script lang="ts">
import { Subject } from 'rxjs'
import {
  filter,
  bufferWhen,
  debounceTime,
  map,
  startWith,
} from 'rxjs/operators'
import { Component, Vue } from 'vue-property-decorator'

//export default {
@Component<RxExample>({
  subscriptions() {
    //this.count$ = new Subject()
    return ({
      result$: this.count$.pipe(
        filter( (event) => !!event),
        bufferWhen(() => this.count$.pipe(debounceTime(400))), // イベントをまとめる
        map( (clicks: Array<string>) => {
          return clicks.length
        }),
        startWith(0),
      ),
    })
  },
  methods: {
    clearCounter() {
      this.count$.next(undefined)
    },
  }
})

export default class RxExample extends Vue {
  count$: Subject<string> = new Subject()
}
</script>

<style>
button {
  padding: 10px;
  font-size: 14px;
  margin-right: 10px;
  border-radius: 4px;
  outline: none;
  background-color: lightsalmon;
}
</style>
