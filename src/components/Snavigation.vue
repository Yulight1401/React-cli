<template>
  <div id="snavigation" class="card" >
    <svg class="menu" style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </svg>
    <div class="cardtitlebar">
      <div class="cardicon icon"></div>
      <a class="cardtitle">校内网址导航</a>
    </div>
    <div class="cardcontent scrollbar" id="scontent">
      <ul class="tab" v-on:click="switchTab">
        <li class="tabitem tabactiveblue" data-index="0">教务</li>
        <li class="tabitem" data-index='1'>机构</li>
        <li class="tabitem" data-index='2'>生活</li>
        <li class="tabitem" data-index='3'>更多</li>
      </ul>
      <div class="switchcontainer">
      <div class="tabcontainer" id="snavigationtab" v-on:click="openWindow">
        <ul class="tabcontent list-gray"  data-index='0'>
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
<style>
    #snavigation{
        height:611px;
    }
    #snavigation .icon{
      background: url('../assets/snavigation.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #snavigation .cardtitle{
      color: rgb(73,166,228);
    }
    #scontent{
      position: absolute;
      height: 572px;
      overflow-y: scroll;
      width: 100%;
      left: 0px;
      color: rgb(92,92,92);
    }
    .tabactiveblue{
      color:rgb(73,166,228);
      border-bottom: 4px rgb(73,166,228) solid;
    }
    #scontent .top{
      background-color:#81bde9;
    }
</style>
<script>
    export default{
      name: 'snavigation',
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
          this.$http.get('/api/schoolnavigate/').then(response => {
            let body = response.body
            vm.tab0 = body['教务']
            vm.tab1 = body['机构']
            vm.tab2 = body['生活']
            vm.tab3 = body['更多']
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
          this.$http.patch('/api/schoolnavigate/' + id + '/add_hits/').then(response => {
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
            let tab = document.getElementById('snavigationtab')
            switch (id) {
              case '0':
                tab.style.transform = 'translateX(0)'
                ele.className = 'tabitem tabactiveblue'
                break
              case '1':
                tab.style.transform = 'translateX(-25%)'
                ele.className = 'tabitem tabactiveblue'
                break
              case '2':
                tab.style.transform = 'translateX(-50%)'
                ele.className = 'tabitem tabactiveblue'
                break
              case '3':
                tab.style.transform = 'translateX(-75%)'
                ele.className = 'tabitem tabactiveblue'
                break
            }
          }
        }
      }
    }
</script>
