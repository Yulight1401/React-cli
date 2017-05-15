<template>
<div id="bar" class='bar'>
  <a id="logo" class='logo' draggable="true" href="http://hustonline.net">HustOnline</a>
  <div id="searchEngine" v-on:click='openSelector'>
    <svg class="no-pointer" v-if="baidu" id="engineIcon" style="width:14px;height:27px;margin:0px 4px 0 1px;" viewBox="0 0 28 30">
          <path id="baidu"  fill="#B8B8B8" d="M24.779,17.826 C21.142,17.903 20.991,15.410 20.991,13.622 C20.991,11.750 21.377,9.099 24.306,9.099 C27.228,9.099 28.013,11.908 28.013,12.839 C28.013,13.777 28.411,17.746 24.779,17.826 ZM18.303,9.567 C15.854,9.258 15.301,7.080 15.539,4.896 C15.735,3.110 17.906,0.373 19.645,0.766 C21.377,1.154 22.961,3.417 22.640,5.363 C22.326,7.311 20.755,9.882 18.303,9.567 ZM18.303,15.021 C20.515,18.137 24.305,21.019 24.305,21.019 C24.305,21.019 27.145,23.203 25.330,27.408 C23.517,31.616 16.882,29.429 16.882,29.429 C16.882,29.429 14.435,28.653 11.590,29.276 C8.752,29.900 6.304,29.665 6.304,29.665 C6.304,29.665 2.984,29.743 2.037,25.616 C1.091,21.485 5.350,19.223 5.669,18.839 C5.985,18.447 8.193,16.970 9.614,14.631 C11.038,12.298 15.300,10.427 18.303,15.021 ZM10.408,9.261 C8.575,9.261 7.091,7.187 7.091,4.624 C7.091,2.060 8.575,-0.011 10.408,-0.011 C12.239,-0.011 13.719,2.060 13.719,4.624 C13.719,7.187 12.239,9.261 10.408,9.261 ZM4.246,15.803 C0.933,16.505 -0.299,12.735 0.066,10.968 C0.066,10.968 0.457,7.154 3.144,6.919 C5.278,6.736 6.850,9.032 7.013,10.347 C7.111,11.199 7.563,15.102 4.246,15.803 Z" class="cls-1"/>
    </svg>
    <svg class="no-pointer" v-if="google" id="engineIcon" style="width:18px;height:24px;margin:0px 1px 0 1px;" viewBox="0 0 28 30">
          <path id="google"  fill="#B8B8B8" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
    </svg>
    <svg class="no-pointer" v-if='biying' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1491226215503" style="" viewBox="0 0 1024 1024" version="1.1" p-id="614" width="18" height="24"><path d="M367.616 127.08864L167.12192 66.56v741.4528L367.616 626.432zM167.12192 808.0128L367.616 957.44l489.26208-296.96V424.6784z" fill="#8a8a8a" p-id="615"/><path d="M425.6256 288.49152l95.82592 208.06144 116.93056 49.55648 218.496-121.43104-426.2144-136.18688z" fill="#8a8a8a" p-id="616"/></svg>
    <a id="engineText" class="no-pointer">{{engine}}</a>
    <svg class="no-pointer" id="svg_down" style="width:24px;height:24px;" viewBox="0 0 24 24">
          <path fill="#B8B8B8" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
    <div id="engineSelector">
      <ul class="list list-gray">
        <li data-name="baidu" v-if="!baidu">
          <svg class="no-pointer"  style="width:14px;height:27px;margin:0px 4px 0 1px;" viewBox="0 0 28 30">
                <path id="baidu"  fill="#B8B8B8" d="M24.779,17.826 C21.142,17.903 20.991,15.410 20.991,13.622 C20.991,11.750 21.377,9.099 24.306,9.099 C27.228,9.099 28.013,11.908 28.013,12.839 C28.013,13.777 28.411,17.746 24.779,17.826 ZM18.303,9.567 C15.854,9.258 15.301,7.080 15.539,4.896 C15.735,3.110 17.906,0.373 19.645,0.766 C21.377,1.154 22.961,3.417 22.640,5.363 C22.326,7.311 20.755,9.882 18.303,9.567 ZM18.303,15.021 C20.515,18.137 24.305,21.019 24.305,21.019 C24.305,21.019 27.145,23.203 25.330,27.408 C23.517,31.616 16.882,29.429 16.882,29.429 C16.882,29.429 14.435,28.653 11.590,29.276 C8.752,29.900 6.304,29.665 6.304,29.665 C6.304,29.665 2.984,29.743 2.037,25.616 C1.091,21.485 5.350,19.223 5.669,18.839 C5.985,18.447 8.193,16.970 9.614,14.631 C11.038,12.298 15.300,10.427 18.303,15.021 ZM10.408,9.261 C8.575,9.261 7.091,7.187 7.091,4.624 C7.091,2.060 8.575,-0.011 10.408,-0.011 C12.239,-0.011 13.719,2.060 13.719,4.624 C13.719,7.187 12.239,9.261 10.408,9.261 ZM4.246,15.803 C0.933,16.505 -0.299,12.735 0.066,10.968 C0.066,10.968 0.457,7.154 3.144,6.919 C5.278,6.736 6.850,9.032 7.013,10.347 C7.111,11.199 7.563,15.102 4.246,15.803 Z" class="cls-1"/>
          </svg>
          <a class="no-pointer">百 度</a>
        </li>
        <li data-name="biying" v-if="!biying">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1491226215503" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" p-id="614" width="18" height="24"><path d="M367.616 127.08864L167.12192 66.56v741.4528L367.616 626.432zM167.12192 808.0128L367.616 957.44l489.26208-296.96V424.6784z" fill="#8a8a8a" p-id="615"/><path d="M425.6256 288.49152l95.82592 208.06144 116.93056 49.55648 218.496-121.43104-426.2144-136.18688z" fill="#8a8a8a" p-id="616"/></svg>
          <a class="no-pointer">必 应</a>
        </li>
        <li data-name="google" v-if='!google'>
          <svg class="no-pointer" style="width:18px;height:24px;margin:0px 1px 0 1px;" viewBox="0 0 28 30">
                <path id="google"  fill="#B8B8B8" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
          </svg>
          <a class="no-pointer">谷 歌</a>
        </li>
      </ul>

    </div>
  </div>
  <div id='search' class='search'>
    <input id="searchbar" type="text" placeholder="输入并搜索..." v-on:keyup.enter="search" v-on:click="selectAll" v-model="searchtext">
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="#595959" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
    </svg>
  </div>
  <div id="functions" v-on:click="openMenu">
    <svg id="function-icon" style="width:32px;height:32px" viewBox="0 0 24 24">
          <path fill="#B8B8B8" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
    <div id="menu" class="scrollbar">
      <ul id="menu-list" class="list list-gray">
        <li v-bind:data-name="item.name" v-for="item in components" v-on:click = "restore">
          <img class="no-pointer" v-bind:src="item.src"></img>
          <a class="no-pointer" v-bind:style="{color:item.color}">{{item.chname}}</a>
          <svg class="no-pointer" style="" viewBox="0 0 24 24">
                <path fill="#B8B8B8" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<style>
.list {
  list-style: none;
  margin: 0px;
  padding-left: 0px;
  box-sizing: border-box;
  transition: all 0.8s;
}

.list-gray li {
  background-color: #FFF;
  transition: all 0.5s;
  box-sizing: border-box;
  border: 0.1px solid rgb(244,244,244);
}

.list-gray li:hover {
  background-color: rgb(245, 245, 245);
  cursor: pointer;
}

.no-pointer {
  pointer-events: none;
}

#bar {
  display: flex;
  height: 51px;
  line-height: 50px;
  width: 100%;
  background-color: #FFF;
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 1001;
  perspective: 1px;
  transition: all 1s;
}

#engineSelector li {
  margin-left: -26px;
}
@media screen and (max-width:400px){
  #engineSelector li {
    margin-left: 0px;
  }
}

#logo {
  height: 100%;
  font-size: 20px;
  flex: 0 0 140px;
  border-right: 0.2px solid #f1f1f1;
  color: #595959;
  text-align: center;
}

#search {
  height: 100%;
  flex: 0 1 700px;
  position: relative;
}

#search svg {
  position: absolute;
  right: 15%;
  top: 12px;
}

#searchEngine {
  height: 100%;
  flex: 0 1 200px;
  color: gray;
  text-align: center;
  font-weight: lighter;
}

#searchEngine:hover {
  cursor: pointer;
}

#searchEngine svg {
  position: relative;
  top: 8px;
  pointer-events: none;
}

#engineSelector {
  height: 0px;
  overflow: hidden;
  transition: all 0.8s;
}

#searchbar {
  positon: absolute;
  top: 0px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 87%;
  line-height: 24px;
  font-size: 15px;
  font-weight: lighter;
  box-sizing: border-box;
  border: none;
  padding: 13px 45px 14px 30px;
  border-left: 0.2px solid #f1f1f1;
  border-right: 0.2px solid #f1f1f1;
  transition: all 1s;
  background-color: #f9f9f9;
}

#functions {
  position: absolute;
  right: 12px;
  top: 8px;
  width: 30px;
  height: 30px;
  border: 2px solid #B8B8B8;
  transition: all 1s;
}

#functions:hover {
  cursor: pointer;
}

#functions svg {
  position: relative;
  right: 1px;
  top: -1px;
  transition: all 0.7s;
  pointer-events:
}

#menu {
  position: fixed;
  right: 0px;
  top: 50px;
  width: 213px;
  height: 408px;
  z-index: 99;
  background-color: white;
  transition: all 0.5s;
  transform-origin: center top;
  opacity: 0.98;
  transform: translate(219px, 0px);
}

#menu li {
  padding-left: 22px;
}

#menu li>img {
  width: 25px;
  height: 25px;
  position: relative;
  left: -10px;
  top: 6px;
}
#menu li svg {
  opacity: 0;
  width:24px;
  height:24px;
  position:relative;
  float:right;
  right:17px;
  top:12.8px;
  transition:all 0.5s;
}
#menu li:hover svg {
  opacity: 1;
}
#svg_down{
  transition: all 0.7s;
}

@media screen and (max-width:400px) {
  .column {
    max-width: 375px;
  }
  #svg_down {
    display: none;
  }
  #functions {
    display: none;
  }
}

@media screen and ( max-width:628px) {
  #logo {
    display: none;
  }
  #search svg {
    display: none;
  }
  #functions {
    display: none;
  }
  #searchbar {
    padding-right: 0px;
    width: 100%;
  }
  .menu{
    display: none;
  }
}

@media screen and ( min-width:868px) {
  #searchEngine {
    flex: 0 1 100px;
  }
}
</style>
<script>
/* eslint-disable */
import Storage from './js/configStorage.js'
export default {
  name: 'bar',
  data() {
    return {
      menustate: false,
      selector: false,
      components: [],
      engine: '百 度',
      searchtext: ''
    }
  },
  computed: {
    baidu() {
      return this.engine === '百 度'
    },
    google() {
      return this.engine === '谷 歌'
    },
    biying () {
      return this.engine === '必 应'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    selectAll () {
      let target = event.target
      let value = target.value
      let len = value.length
      target.setSelectionRange(0, len)
    },
    search () {
      if(this.baidu){
        let search = 'http://www.baidu.com/s?wd=' + this.searchtext
        window.open(search)
      } else if (this.google) {
        let search = 'https://www.google.com/#q=' + this.searchtext
        window.open(search)
      } else if (this.biying) {
        let search = 'http://cn.bing.com/search?q=' + this.searchtext
        window.open(search)
      }
    },
    init () {
      let config = Storage.getConfig()
      let engine = config.engine
      this.engine = config.engine
      let column = config.columns
      let _this = this
      column.forEach(function(list, index) {
        list.filter(function(item2) {
          return item2.status === false && item2.name != 'prenode'
        }).forEach(function(item3) {
          _this.decorate(item3)
          _this.components.push(item3)
        })
      })
      window.restore = this.restore
    },
    decorate(item) { //static method
      switch (item.name) {
        case 'weather':
          item.chname = '天气'
          item.color = 'orange'
          break;
        case 'iknow':
          item.chname = 'iKnow华科'
          item.color = 'rgb(232,161,0)'
          break;

        case 'product':
          item.chname = '校园产品'
          item.color = 'rgb(161, 106, 213)'
          break;

        case 'info':
          item.chname = '校内资讯'
          item.color = 'rgb(240,83,82)'
          break;

        case 'navigation':
          item.chname = '常用导航'
          item.color = 'rgb(26,188,156)'
          break;

        case 'door':
          item.chname = '任意门'
          item.color = 'rgb(93,92,92)'
          break;

        case 'snavigation':
          item.chname = '校内导航'
          item.color = 'rgb(73,166,228)'
          break;

        case 'oneword':
          item.chname = '每日一言'
          item.color = '#977951'
          break;
        default:
      }
      item.src = require('./assets/mobile/' + item.name + '.png')
    },
    insert (item) { //static method
      let src = require('./assets/' + item.name + '.png')
      let temp = `<li data-name="${item.name}">
        <img class="no-pointer" src="${src}"></img>
        <a class="no-pointer" style="color:${item.color}">${item.chname}</a>
        <svg class="no-pointer" style="width:24px;height:24px;position:relative;float:right;right:17px;top:12px;transition:all 0.5s;opacity:0;" viewBox="0 0 24 24">
              <path fill="#B8B8B8" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
      </li>`
      let div = document.createElement('div')
      div.innerHTML = temp
      div.childNodes[0].addEventListener("click", this.restore)
      document.getElementById('menu-list').appendChild(div.childNodes[0])
      div = null
    },
    restore (e) { //static method
      let event = e || event
      let name = event.target.dataset.name
      let target = event.target
      let ele = document.getElementById(name)
      ele.style.opacity = '1'
      ele.style.display = 'block'
      target.style.display = 'none'
      Storage.setPos()
    },
    opacityIn (ele) { //static method
      ele.style.opacity = '0'
      ele.style.transition = 'opacity 0.8s'
      let temp = ele.style //强制更新css
      ele.style.display = 'block'
      ele.style.opacity = '1'
    },
    opacityOut (ele) {//static method
      ele.style.opacity = '1'
      ele.style.transition = 'opacity 0.8s'
      let temp = ele.style
      ele.style.opacity = '0'
      setTimeout(() => {
        ele.style.display = 'none'
      }, 800)
    },
    openMenu() {
      let state = !this.menustate
      this.menustate = state
      let menu = document.getElementById('menu')
      let icon = document.getElementById('function-icon')
      if (state) {
        menu.style.transform = 'translate(0px,0)'
        icon.style.transform = 'rotate(135deg)'
      } else {
        menu.style.transform = 'translate(219px,0px)'
        icon.style.transform = 'rotate(0deg)'
      }
    },
    openSelector() {
      let selector = document.getElementById('engineSelector')
      let state = !this.selector
      let angle = document.getElementById('svg_down')
      this.selector = state
      if (state) {
        selector.style.height = '110px'
        angle.style.transform = 'scale(1,-1)'
      } else {
        let name = event.target.dataset.name
        selector.style.height = '0px'
        if (name == 'baidu') {
          this.engine = '百 度'
        } else if (name == 'google') {
          this.engine = '谷 歌'
        } else if (name == 'biying') {
          this.engine = '必 应'
        }
        angle.style.transform = 'scale(1,1)'
        Storage.config.engine = this.engine
        Storage.saveConfig(function() {})
      }
    }
  }
}
</script>
