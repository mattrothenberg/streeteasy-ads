<template>
  <div id="app" class="vh-100">
    <div class="fixed top-1 right-1" v-show="showingExportButton">
      <a class="github-button" href="https://github.com/mattrothenberg/streeteasy-ads" data-icon="octicon-star" data-size="small" data-show-count="true" aria-label="Star mattrothenberg/streeteasy-ads on GitHub">Star</a>
      <a class="github-button" href="https://github.com/mattrothenberg/streeteasy-ads/fork" data-icon="octicon-repo-forked" data-size="small" data-show-count="true" aria-label="Fork mattrothenberg/streeteasy-ads on GitHub">Fork</a>
    </div>
    <div class="h-100 flex flex-column items-center justify-center">
      <advertisement :copy="copy"></advertisement>
      <div class="mt4">
        <button @click="exportImage" v-show="showingExportButton" class="bn f6 dim br1 ph3 pv2 mb2 white bg-black fw7 ttu tracked pointer">Export Image</button>
      </div>
    </div>
  </div>
</template>

<script>
import advertisement from '@/components/advertisement'
import '@/vendor/html2canvas.js'
import FileSaver from 'file-saver'
import 'blueimp-canvas-to-blob'

export default {
  props: ['copy'],
  name: 'app',
  data () {
    return {
      showingExportButton: true
    }
  },
  components: {
    advertisement
  },
  methods: {
    exportImage () {
      let self = this
      self.showingExportButton = false
      setTimeout(function () {
        let stage = document.querySelector('body')
        window.html2canvas(stage).then(function (canvas) {
          canvas.toBlob(function (blob) {
            FileSaver.saveAs(blob, `ad.png`)
            self.showingExportButton = true
          })
        })
      }, 1)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

::selection {
  background: rgba(253, 196, 53, .35);
}

body {
  background-color: #0080c6;
  background-image: url('~./assets/skyline.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

</style>
