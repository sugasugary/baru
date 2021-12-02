new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data () {
    return {
      youtubeURL: '',
      result: ''
    }
  },
  methods: {
    loadURL () {
      const youtubeEmbedTemplate = 'https://www.youtube.com/embed/'
      const url = this.youtubeURL.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/)
      console.log("url", url)
      const YId = undefined !== url[2] ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0]
      console.log("YId", YId)
      if (YId === url[0]) {
        console.log("not a youtube link")
      } else {
        console.log("it's  a youtube video")
      }
      const topOfQueue = youtubeEmbedTemplate.concat(YId)
      console.log("topOfQueue", topOfQueue)
      this.result = topOfQueue
      this.youtubeURL = ''
    }
  }
});