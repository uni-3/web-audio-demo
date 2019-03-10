<template>
  <div class="contents"></div>
</template>

<script lang="ts">
// audioをマイクから受け取って、録音？して、リアルタイムで波形を出すとかしたい
// https://qiita.com/mhagita/items/6c7d73932d9a207eb94d
import { Component, Vue } from "vue-property-decorator";

@Component<AudioApi>({
  methods: {
    startRecording() {
      this.recording = true;
      navigator.getUserMedia(
        { audio: true },
        stream => {
          let localMediaStream = stream;
          let scriptProcessor = this.audioCtx.createScriptProcessor(
            this.bufferSize,
            1,
            1
          );
          let localScriptProcessor = scriptProcessor;

          var mediastreamsource = this.audioCtx.createMediaStreamSource(stream);
          mediastreamsource.connect(scriptProcessor);
          scriptProcessor.onaudioprocess = this.onAudioProcess;
          scriptProcessor.connect(this.audioCtx.destination);
        },
        e => {}
      );
    },
    getAudio() {
      this.audioCtx;
    }
  },
  created() {
    // get audio from client
    navigator.getUserMedia = navigator.getUserMedia;
    //  ||
    //navigator.webkitGetUserMedia ||
    //navigator.mozGetUserMedia;

    this.audioCtx.on = () => {};
  }
})
export default class AudioApi extends Vue {
  recording = true;
  bufferSize = 1024;
  audioData = []; // record data
  //audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  audioCtx = new AudioContext();

  onAudioProcess = e => {
    if (!this.recording) {
      return;
    }

    // 音声のバッファを作成
    let input = e.inputBuffer.getChannelData(0);
    let bufferData = new Float32Array(this.bufferSize);
    for (let i = 0; i < this.bufferSize; i++) {
      bufferData[i] = input[i];
    }
    this.audioData.push(bufferData);

    //analyseVoice()
  };
}
</script>

<style lang="scss">
.contents img {
  height: 100px;
  width: 100px;
}
</style>
