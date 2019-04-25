import Root from '../vue/root.vue'
import Vue from 'vue'

new Vue({
  el:'#app',
  render(cl){
    return cl(Root)
  }
})