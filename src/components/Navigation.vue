<template>
  <div id="navigation" class="card" >
    <svg class="menu" style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </svg>
    <div class="cardtitlebar">
      <div class="cardicon icon"></div>
      <a class="cardtitle">常用网址导航</a>
    </div>
    <div class="cardcontent scrollbar" id="ncontent">
      <ul class="tab" v-on:click="switchTab">
        <li class="tabitem tabactivegreen" data-index="0">学习</li>
        <li class="tabitem" data-index="1">资讯</li>
        <li class="tabitem" data-index="2">娱乐</li>
        <li class="tabitem" data-index="3">工具</li>
      </ul>
      <div class="switchcontainer ">
      <div class="tabcontainer" id="navigationtab" v-on:click="openWindow">
        <ul class="tabcontent list-gray" data-index='0'>
          <li class="tabconitem" v-for="(value, index) in tab0" v-bind:data-url = "value.url" v-bind:data-id = "value.id">{{value.name}}<span class="top" v-if="index<3">TOP {{index+1}}</span></li>
        </ul>
        <ul class="tabcontent list-gray" data-index='1'>
          <li class="tabconitem" v-for="(value, index) in tab1" v-bind:data-url = "value.url" v-bind:data-id = "value.id">{{value.name}}<span class="top" v-if="index<3">TOP {{index+1}}</span></li>
        </ul>
        <ul class="tabcontent list-gray" data-index='2'>
          <li class="tabconitem" v-for="(value, index) in tab2" v-bind:data-url = "value.url" v-bind:data-id = "value.id">{{value.name}}<span class="top" v-if="index<3">TOP {{index+1}}</span></li>
        </ul>
        <ul class="tabcontent list-gray" data-index='3'>
          <li class="tabconitem" v-for="(value, index) in tab3" v-bind:data-url = "value.url" v-bind:data-id = "value.id">{{value.name}}<span class="top" v-if="index<3">TOP {{index+1}}</span></li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
      name: 'navigation',
      data () {
        return {
          tab0: {},
          tab1: {},
          tab2: {},
          tab3: {}
        }
      },
      mounted () {
        this.getResource()
      },
      methods: {
        getResource () {
          let vm = this
          this.$http.get('/api/commonnavigate/').then(response => {
            let body = response.body
            vm.tab0 = body['学习']
            vm.tab1 = body['资讯']
            vm.tab2 = body['娱乐']
            vm.tab3 = body['工具']
          }, response => {

          })
        },
        openWindow (e) {
          let event = e || event
          let ele = event.target
          if (ele.tagName === 'LI') {
            window.open(ele.dataset.url)
            this.patchclick(ele.dataset.id)
          }
        },
        patchclick (id) {
          this.$http.patch('/api/commonnavigate/' + id + '/add_hits/').then(response => {
          }, response => {
          })
        },
        switchTab (e) {
          let event = e || event
          let ele = event.target
          if (ele.dataset.index) {
            let id = ele.dataset.index
            let nodes = ele.parentNode.childNodes
            nodes.forEach(function (item, index) {
              item.className = 'tabitem'
            })
            let tab = document.getElementById('navigationtab')
            switch (id) {
              case '0':
                tab.style.transform = 'translateX(0)'
                ele.className = 'tabitem tabactivegreen'
                break
              case '1':
                tab.style.transform = 'translateX(-25%)'
                ele.className = 'tabitem tabactivegreen'
                break
              case '2':
                tab.style.transform = 'translateX(-50%)'
                ele.className = 'tabitem tabactivegreen'
                break
              case '3':
                tab.style.transform = 'translateX(-75%)'
                ele.className = 'tabitem tabactivegreen'
                break
            }
          }
        }
      }
    }
</script>
<style>
    #app {
      width: 100%;
    }
    #navigation{
        height:388px;
    }
    #navigation .icon{
      background: url('../assets/navigation.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #navigation .cardtitle{
      color: rgb(26,188,156);
    }
    #ncontent{
      position: absolute;
      height: 351px;
      width: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      left: 0px;
      color:rgb(92,92,92);
    }
    .tab{
      list-style: none;
      color: #5c5c5c;
      padding: 0px;
    }
    .tabitem{
      text-align: center;
      width: 25%;
      float: left;
      padding: 8px 0 4px 0;
      box-sizing: border-box;
      cursor: pointer;
      font-size: 14px;
      transition: color 0.5s;
    }
    .tabactivegreen{
      color:rgb(26,188,156);
      border-bottom: 4px rgb(26,188,156) solid;
    }
    .switchcontainer{
      width: 391px;
      overflow: hidden;
      color: #5c5c5c;
    }
    .tabcontainer{
      width: 1564px;
      margin-top: 0px;
      transition: all 1s;
      color: #5c5c5c;
    }
    .tabcontent{
      width: 391px;
      float: left;
      list-style: none;
      padding-left: 0px;
      font-size: 14px;
      color: #5c5c5c;
    }
    @media screen and (max-width:400px){
      .switchcontainer{
        width: 359px;
        margin-left: 0px;
        margin-right: 0px;
      }
      .tabcontainer{
        width: 1436px;
      }
      .tabcontent{
        width: 359px;
      }
    }
    .tabconitem{
      color: #5c5c5c;
      height: 49px;
      line-height: 47px;
      padding-left: 32px;
      box-sizing: border-box;
    }
    .top{
      float: right;
      width: 60px;
      height: 25px;
      margin-top: 10px;
      margin-right: 32px;
      border-radius: 12px;
      background-color: #48c9b0;
      color:white;
      font-size: 14px;
      line-height: 26px;
      text-indent: 2px;
      text-align: center;
    }
</style>
