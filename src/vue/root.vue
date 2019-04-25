<template>
  <div id="whole">
    <div id="canvas" ref="canvas"/>
    <div id="control" :class="{draw}">
      <button class="switch icon-toggle-off" @click="disableDraw" :class="{draw, 'icon-toggle-on':draw}"/>
      <button class="reset icon-stop" @click="resetCanvas"/>
      <button class="inc-width icon-plus" @click="incWidth"/>
      <button class="dec-width icon-minus" @click="decWidth"/>
      <button class="color icon-paint-brush" @click="selectColor" :style="{color}">
         <span class="color-picker"></span>
      </button>
      <button class="back icon-undo" @click="undo"/>
      <button class="icon-power-off" @click="close"/>
      <span class="width">{{width}}px</span>
    </div>
  </div>
</template>
<style lang="stylus">
html,body
  height 100%
  width 100%
  margin 0
  padding 0
  background-color transparent
  font-family Meiryo
  overflow hidden
#whole
  height 100%
  width 100%
div
  box-sizing border-box
#canvas
  width 100%
#control
  opacity 0.7
  position fixed
  bottom 0
  right 0
  height 40px
  width 340px
  background-color white
  box-shadow 0 0 15px black
  z-index 1000
  font-size 0
  &.draw
    opacity 1
  button
    width 40px
    height 100%
    border solid 1px gray
    border-radius 3px
    background-color white
    text-align center
    font-size 20px
    &.color
      position relative
  .width
    font-size 11px
    display inline-block
    width 25px
  .color-picker, .pickr
    height 0px
    border none
    position absolute
    top 0
    left 0
    overflow hidden
</style>

<script lang="ts">
import Vue from 'vue'
import Painter from '../js/painter'
import Pickr from '../../node_modules/@simonwep/pickr/dist/pickr.es5.min'; 

import {remote} from 'electron'

const {globalShortcut} = remote
const thisWindow = remote.getCurrentWindow()
thisWindow.setIgnoreMouseEvents(true)

const WIDTH_LIMIT = 50
const ESC = 27
export default Vue.extend({
  data(){
    return {
      draw:false,
      width:8,
      color:'#FF5522',
      board:null,
      pickr:null
    }
  },
  mounted(){
    this.$refs.canvas.style.height = document.documentElement.clientHeight + 'px'
    this.board = new Painter('canvas', {
      color:this.color,
      size:this.width
    })
    document.documentElement.addEventListener('keydown', (ev)=>{
      if(ev.which === ESC){
        this.disableDraw()
      }
    })
    const shortcut = 'Shift+Esc'
    globalShortcut.register(shortcut, this.switchDraw)
    window.addEventListener('beforeunload', ()=>globalShortcut.unregister(shortcut))
    this.pickr = Pickr.create({
      el:'.color-picker',
      components: {
        preview: false,
        opacity: false,
        hue: true,
        position:'top'
      }
    })
    this.pickr.on('init', instance=>{
      instance._root.app.addEventListener('mouseleave', ()=>{
        this.pickr.hide()
      })
    }).on('change', (hsv)=>{
      this.color = hsv.toRGBA().toString()
    })
    this.pickr.show()
    this.pickr.hide()
  },
  watch:{
    draw(flg){
      thisWindow.setIgnoreMouseEvents(!flg)
    },
    width(w){
      this.board.setWidth(w)
    },
    color(c){
      this.board.setColor(c)
    }
  },
  methods:{
    switchDraw(){
      this.draw = !this.draw
    },
    disableDraw(){
      this.draw = false
    },
    resetCanvas(){
      this.board.clear()
    },
    undo(){
      this.board.undo()
    },
    selectColor(){
      this.pickr.show()
    },
    setColor(color){
      this.board.setColor(color)
    },
    incWidth(){
      if(this.width < WIDTH_LIMIT){
        this.width++
      }
    },
    decWidth(){
      if(1 < this.width){
        this.width--
      }
    },
    close(){
      window.close()
    }
  }
})
</script>
