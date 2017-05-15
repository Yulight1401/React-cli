<template>
  <div id="door" class="card" >
    <svg class="menu" style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </svg>
    <div class="cardtitlebar">
      <div class="cardicon icon"></div>
      <a class="cardtitle">任意门</a>
    </div>
    <div id="doorcon" v-on:mouseover="getResource" v-on:click="openWindow" class="cardcontent center">
      <img id="doorbg" src="../assets/doorbg.png">
      <p id="doorintroduction">{{items.introduction}}</p>
      <img id="doork" src="../assets/doork.png"/>
      <div id="doorcontainer">
        <img id="doorm" src="../assets/doorm.png" />
        <img id="doorbar" src="../assets/bar.png" />
      </div>
    </div>
  </div>
</template>
<style>
    #door{
        height:184px;
    }
    .center{
      text-align: center;
    }
    #door .icon{
      background: url('../assets/door.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #door .cardtitle{
      color: rgb(93,92,92);
    }
    #doorcon{
      overflow: hidden;
      text-align: center;
    }
    #doorcon:hover{
      cursor: pointer;
    }
    #doorcon:hover #doorm{
      transform: translateX(-80%);
    }
    #doorcon:hover #doorbar{
      transform: translateX(-261px) rotate(-90deg);
    }
    #doorintroduction{
      color: #c5c5c5;
      position: absolute;
      width: 250px;
      font-size: 12px;
      z-index: 9;
      left: 50%;
      top: 50%;
      margin-top: 11px;
      margin-left: -90px;
    }
    #doorm{
      position: absolute;
      width: 322px;
      left: 50.2%;
      margin-left: -161.5px;
      z-index: 11;
      box-sizing: padding-box;
      transition: all 0.8s;
      transition-timing-function: linear;
      cursor: pointer;
    }
    #doorbg{
      position: absolute;
      background-color: #434343;
      width: 323px;
      left: 50%;
      margin-left: -161.5px;
      bottom: 21.6%;
      border-radius: 4px;
      z-index: 1;
    }
    #doorcontainer{
      position: absolute;
      width: 322px;
      height: 73px;
      left: 50.2%;
      margin-left: -161.5px;
      bottom: 21.8%;
      overflow: hidden;
    }
    #doork{
      position: absolute;
      width: 335px;
      left: 50%;
      margin-left: -167.5px;
      bottom: 19.1%;
      border-radius: 4%;
      z-index: 99;
    }
    #doorbg:hover{
      cursor: pointer;
    }
    #doorbar{
      position: relative;
      width: 39px;
      left: 35%;
      top: 24%;
      z-index: 12;
      transition: all 0.8s;
      transform-origin: right;
      transition-timing-function: linear;
      cursor: pointer;
    }

</style>
<script>
    export default{
      name: 'door',
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
          this.$http.get('/api/randomurl/').then(response => {
            vm.items = response.body
          }, response => {
          })
        },
        openWindow () {
          window.open(this.items.url)
        }
      }
    }
</script>
