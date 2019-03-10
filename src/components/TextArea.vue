<template>
  <div class="audio-text-area">
    <div>tape transcription</div>
    <img alt="Vue logo" src="../assets/logo.jpeg">
    <textarea v-model="text"/>
    <div class="buttons">
      <button class="recognition" @click="startRecognize">{{ recognitionText }}</button>
      <button class="download" @click="downloadText">テキストダウンロード</button>
    </div>
  </div>
</template>

<script>
import "ms";
export default {
  data: () => {
    return {
      text: "",
      recognition: new webkitSpeechRecognition(),
      recognitionText: "入力開始する"
    };
  },
  methods: {
    // startRecognize: function() {
    startRecognize() {
      console.log("start recog");
      this.recognition.lang = "ja";
      this.recognition.start();
    },
    downloadText() {
      var csv = "\ufeff" + "品名,価格\n";
      let blob = new Blob([this.text], { type: "text/txt" });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "Result.txt";
      link.click();
    }
  },
  // created: function() {
  created() {
    this.recognition.onstart = () => {
      this.recognitionText = "入力中...";
    };
    this.recognition.onend = () => {
      this.recognitionText = "入力開始";
    };
    this.recognition.onerror = e => {
      // startしてもしばらくすると入力が中止されるため
      // stopして、onendを発火させる
      if (e.error === "no-speech") {
        this.recognition.stop();
      }
    };
    this.recognition.onend = e => {
      this.startRecognize();
    };
    this.recognition.onresult = event => {
      if (event.results.length > 0) {
        console.log("result", event.results);
        this.text += ms(event.results[0][0].timestamp);
        this.text += "\t";
        this.text += event.results[0][0].transcript;
        this.text += "\n";
        //this.text = event.results[0][0].transcript
      }
    };
  }
};
</script>
<style lang="scss">
.audio-text-area .buttons > * {
  display: inline-block;
}
.audio-text-area textarea {
  width: 95%;
  height: 200px;
}
.audio-text-area .buttons {
  width: 100%;
  text-align: right;
}

.audio-text-area button {
  width: 30%;
  height: 40px;
  text-align: right;
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  background-color: #0b44ef;
  border-radius: 5px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.audio-text-area button:hover {
  background-color: #007df8;
}
</style>
