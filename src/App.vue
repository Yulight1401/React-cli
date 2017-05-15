<template>
  <div id="app" class="card-container">
    <div id="trash">
      隐藏 <i class="icon-trash"></i>
    </div>
    <div id="bg_content">
      <div id="sun">
        <div id="sun1">8:23AM</div>
        <div id="sun2">5:43PM</div>
      </div>
    </div>
    <div id="loading">
      <img id='hustonlinepng' src="./assets/Hustonline.png"/>
      <img id='rollpng' src="./assets/roll.png"/>
      <img id='loadingpng' src="./assets/loading.png"/>
      <div class="dotpng">
        <img class='dotpng' src="./assets/dot.png">
        <img class='dotpng' src="./assets/dot.png">
        <img class='dotpng' src="./assets/dot.png">
      </div>
    </div>
    <div id="precontainer">
      <weather></weather>
      <iknow></iknow>
      <product></product>
      <info></info>
      <navigation></navigation>
      <door></door>
      <snavigation></snavigation>
      <oneword></oneword>
      <div id="prenode" class="card"></div>
    </div>
    <div id="mobile" class="scrollbar">
      <div id="switchpanel" class="card" v-on:click='switchComponent'>
        <div class="options" data-name='weather'>
          <img src="./assets/mobile/weather.png"></img>
          <p>天气</p>
        </div>
        <div class="options" data-name='info'>
          <img src="./assets/mobile/info.png"></img>
          <p>校园资讯</p>
        </div>
        <div class="options" data-name='snavigation'>
          <img src="./assets/mobile/snavigation.png"></img>
          <p>校园导航</p>
        </div>
        <div class="options" data-name='iknow'>
          <img src="./assets/mobile/iknow.png"></img>
          <p>iKnow华科</p>
        </div>
        <div class="options" data-name='navigation'>
          <img src="./assets/mobile/navigation.png"></img>
          <p>常用导航</p>
        </div>
        <div class="options" data-name='product'>
          <img src="./assets/mobile/product.png"></img>
          <p>校园产品</p>
        </div>
        <div class="options" data-name='door'>
          <img src="./assets/mobile/door.png"></img>
          <p>任意门</p>
        </div>
        <div class="options" data-name='oneword'>
          <img src="./assets/mobile/oneword.png"></img>
          <p>每日名言</p>
        </div>
      </div>
      <transition  name="component-fade" mode="out-in">
        <component v-bind:is="componentname"></component>
      </transition>
    </div>
    <div id="column1" class="column">
    </div>
    <div id="column2" class="column">
    </div>
    <div id="column3" class="column">
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import iknow from './components/Iknow.vue'
import door from './components/Door.vue'
import info from './components/Info.vue'
import product from './components/Product.vue'
import snavigation from './components/Snavigation.vue'
import navigation from './components/Navigation.vue'
import weather from './components/Weather'
import oneword from './components/OneWord'
import Storage from './js/configStorage.js'

export default {
  name: 'app',
  data () {
    return{
      componentname: ''
    }
  },
  components: {
    weather,
    oneword,
    iknow,
    door,
    info,
    product,
    snavigation,
    navigation
  },
  mounted () {
    this.initPos()
    let vm = this
    let temp = document.body.clientWidth
    window.onresize = function () {
      if (document.body.clientWidth < 626 && document.body.clientWidth != temp) {
        vm.componentname = 'weather'
        temp = document.body.clientWidth
      } else if(document.body.clientWidth >= 626){
        vm.componentname = ''
      }
    }
    if (document.body.clientWidth < 626) {
      vm.componentname = 'weather'
    }
  },
  created () {
    window.onload = function () {
      let ele = document.getElementById('loading')
      ele.style.opacity = 0
      setTimeout(function () {
        ele.style.display = 'none'
      }, 800)
    }
  },
  methods: {
    initPos () {
      let config =  Storage.getConfig()
      let column = config.columns
      column.forEach (function (list,index) {
        let con = 'column'+(index+1)
        let container = document.getElementById(con)
        list.forEach (function (item) {
          let itemNode = document.getElementById(item.name)
          itemNode.style.order = item.pos
          if (item.status != true){
            itemNode.style.display = 'none'
          }
          container.appendChild(itemNode)
        })
      })
    },
    switchComponent () {
      console.log(event.target)
      if(event.target.dataset.name){
        let name = event.target.dataset.name
        this.componentname = name
      }
    }
  }
}
</script>
<style>
@import url('./css/base.css');
@import url('./css/index.css');
#loading{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgb(233,238,241);
  transition: all 0.5s;
}
#hustonlinepng{
  position: absolute;
  width: 340px;
  margin-left: -170px;
  margin-top: -80px;
  top: 50%;
  left: 50%;
}
#rollpng{
  position: absolute;
  width: 60px;
  top: 50%;
  left: 50%;
  margin-left: -27px;
  margin-top: -65px;
  animation: rolling 3s linear infinite;
}
#loadingpng{
  position: absolute;
  width: 210px;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -110px;
}
.dotpng{
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -47px;
}
.dotpng:nth-child(1){
  margin-left: 80px;
  animation: jump 2s infinite;
  animation-delay: 0s;
}
.dotpng:nth-child(2){
  margin-left: 110px;
  animation: jump 2s infinite;
  animation-delay: 0.25s;
}
.dotpng:nth-child(3){
  margin-left: 140px;
  animation: jump 2s infinite;
  animation-delay: 0.5s;
}
@keyframes rolling {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes jump {
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0);
  }
}
.card-container{
  width: 100%;
  display:flex;
  margin-bottom: 10px;
  justify-content: center;
  flex-flow:row wrap;
}
.options{
  float: left;
  width: 25%;
  height: 90px;
  line-height: 20px;
  padding: 10px;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  color: rgb(94,94,94);
}
.options img{
  width: 45px;
  pointer-events: none;
}
.options p{
  pointer-events: none;
  font-size: 12px;
}
#mobile{
  display: none;
  overflow-x: hidden;
}
#switchpanel{
  height: 175px;
}
#sun{
  width: 354px;
  text-align: center;
  float: right;
}
#sun2{
  background: url('./assets/sunset.png');
  width: 172px;
  display: inline-block;
  height: 205px;
  line-height: 260px;
  float: right;
  background-repeat: no-repeat;
  background-position: 49% 45%;
  background-color: #9c5bcc;
  background-size: 45px 31px;
  color: white;
  opacity: 0.9;
}
#sun1{
  right: 172px;
  top: 0px;
  background: url('./assets/sunrise.png') ;
  width: 172px;
  margin-right: -10px;
  display: inline-block;
  height: 205px;
  line-height: 260px;
  background-size: 45px 31px;
  background-repeat: no-repeat;
  background-position: 49% 45%;
  background-color: #ed8663;
  color: white;
  opacity: 0.96;
}
#bg_content{
  position: relative;
  width: 100%;
  height: 205px;
  margin-bottom: 12px;
  line-height: 205px;
  background: url('./assets/hust.jpg');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
#precontainer{
  display: none;
}
#trash{
position: fixed;
z-index:1024;
width:100%;
height:60px;
top:-60px;
line-height:60px;
color:white;
background-color:red;
transition: all 0.5s;
text-align:center;
}
#prenode{
  opacity: 0.3;
}
@media screen and ( max-width:628px) {
  #bg_content {
    display: none;
  }
  .column{
    display: none;
  }
  #mobile{
    display: block;
  }
}
@media screen and (max-width:400px) {
  .card {
    max-width: 345px;
    padding: 10px;
    transition: all 0 ease 0;
  }
}
.component-fade-enter-active{
  transition: all 0.5s;
}
.component-fade-leave-active {
  transition: all 0s;
}
.component-fade-enter
/* .component-fade-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.component-fade-leave-to{
  opacity: 0;
}
</style>
