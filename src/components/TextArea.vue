<template>
  <div class='audio-text-area'>
		<textarea v-model="text"/>
		<button @click="startRecognition">
			{{ recognitionText }}
		</button>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				text: '',
				recognition: new webkitSpeechRecognition(),
				recognitionText: '入力開始する',
			}
		},
		methods: {
			startRecognize: function() {
				this.recognition.start()
			},
		},
		created: function() {
			this.recognition.onstart = () => {
				this.recognitionText = '入力中...'
			}
			this.recognition.onend = () => {
				this.recognitionText = '入力開始'
			}
			this.recognition.onresult = (event) => {
				if (event.results.length > 0) {
					console.log('recog result', event.results)
					this.text = event.results[0][0].transcript;
				}
			}
		}
	}
	
</script>