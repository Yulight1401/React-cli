<template>
<div id="product" class="card">
  <svg class="menu" style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </svg>
  <div class="cardtitlebar">
    <div class="cardicon icon"></div>
    <a class="cardtitle">校园产品</a>
  </div>
  <div class="cardcontent scrollbar"  v-on:mousewheel="Scroll" id="pcontent">
    <ul class="timeline">
      <li class="timeitem" v-for="item in items">
        <a class="timeyear"></a>
        <a class="timecontent" v-bind:href="item.url" target="_blank">{{item.name}}</a>
      </li>
    </ul>
  </div>
</div>
</template>
<style>
#product {
  height: 296px;
}

#pcontent {
  position: absolute;
  top: 70px;
  padding-top: 18px;
  padding-left: 142px;
  height: 255px;
  width: 100%;
  left: 0px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  font-size: 14px;
  color: #5c5c5c;
}

.scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 4px;
  background-color: #dcdcdc;
}


/*定义滚动条轨道 内阴影+圆角*/

.scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
  border-radius: 0px;
  background-color: white;
}


/*定义滑块 内阴影+圆角*/

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 0px;
  -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, .3);
  background-color: #dcdcdc;
}

#product .icon {
  background: url('../assets/product.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#product .cardtitle {
  color: rgb(161, 106, 213);
}


.timeline {
  list-style: none;
  border-left: 2px solid #F4F4F4;
  font-family: MicrosoftYaHei;
  font-weight: regular;
}

.timeitem {
  padding: 0px;
  height: 65px;
  margin: 0px;
}

.timeyear {
  position: absolute;
  margin-top: -10px;
  left: 80px;
}

.timecontent {
  line-height: 0px;
  vertical-align: top;
  text-decoration: none;
  color: inherit;
}

.timecontent:before {
  content: '';
  position: relative;
  left: 138px;
  margin-top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(161, 106, 213);
  position: absolute;
}

.timeitem:nth-last-of-type(3) .timecontent:before{
  background-color: #fe837a;
}
.timeitem:nth-last-of-type(2) .timecontent:before{
  background-color: #62ade4;
}
.timeitem:nth-last-of-type(1) .timecontent:before{
  background-color: #1abc9c;
}
</style>
<script>
export default {
  name: 'info',
  data () {
    return {
      items: {}
    }
  },
  mounted () {
    this.getResource()
  },
  methods: {
    getResource () {
      let vm = this
      this.$http.get('/api/schoolproduct/').then(response => {
        vm.items = response.body
      }, response => {

      })
    },
    Scroll (event) {
      event.stopPropagation()
    }
  }
}
</script>
