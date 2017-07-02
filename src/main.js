// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'tachyons'
import 'medium-editor/dist/css/medium-editor.css'
// import 'medium-editor/dist/css/themes/default.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App :copy="copy"/>',
  components: { App },
  data: {
    copy: 'I collect vintage flamethrowers, which makes <div class="checkbox">board approval required</div> difficult'
  }
})
