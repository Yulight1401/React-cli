<template>
  <div id="iknow" class="card" >
    <svg class="menu" style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </svg>
    <div class="cardtitlebar">
      <div class="cardicon icon"></div>
      <a class="cardtitle">iKnow华科</a>
    </div>
    <div id="isearchbar">
      <input type="text" v-model='searchtext' v-on:keyup.enter="search" placeholder="有什么想了解的？"></input>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="#787878" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
    </div>
    <div id="icontent" class="list scrollbar">
      <div class="listitem">
        <p class="itemtitle">{{qs1r.ques_name}}</p>
        <p class="itemcontent">{{qs1r.best_answer}}</p>
        <a v-bind:href = "qs1src"  target="_Blank">more</a>
      </div>
      <hr style="border:0;height:1px;position:absolute;width:100%;left:0px;background-color:#F4F4F4;margin-top:-3px;"/>
      <div class="listitem">
        <p class="itemtitle">{{qs2r.ques_name}}</p>
        <p class="itemcontent">{{qs2r.best_answer}}</p>
        <a v-bind:href = "qs2src"  target="_Blank">more</a>
      </div>
    </div>
  </div>
</template>
<style>
    #iknow{
        height:354px;
    }
    #iknow .icon{
      background: url('../assets/iknow.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #iknow .cardtitle{
      color: rgb(232,161,0);
    }
    #isearchbar{
      position: absolute;
      width: 100%;
      left: 0px;
      margin: 0px 0px 10px 0px;
      height: 41px;
    }
    #isearchbar input{
      background-color: #fafafa;
      box-sizing: border-box;
      width: 100%;
      height: 41px;
      border: 1px solid #dcdcdc;
      padding: 0px 5px 0px 30px;
      border-right: none;
      border-left: none;
      color: gray;
      font-size: 16px;
      font-weight: lighter;
    }
    #isearchbar svg{
      position: absolute;
      right: 15px;
      top: 10px;
      pointer-events: none;
      z-index: 2;
    }
    #icontent {
      height: 85%;
      margin-top: 15%;
      padding: 0 1px 0 12px;
      box-sizing: border-box;
    }
    #icontent .listitem{
      height: 121px;
    }
    #icontent .itemtitle{
      font-size: 15px;
      color: rgb(232,161,0);
    }
    #icontent a {
      color: rgb(232,161,0);
    }
    .list{
      width: 100%;
    }
    .listitem{
      width: 100%;
      line-height: 22px;
      padding: 3px 2px 3px 2px;
      box-sizing: border-box;
    }
    .itemtitle{
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .itemcontent{
      font-size: 12px;
      color: #5c5c5c;
    }
    .listitem a{
      float: right;
      font-size: 12px;
      margin-top: -13px;
    }
</style>
<script>
/* eslint-disable */
    export default{
      name: 'iknow',
      data () {
        return {
          searchtext: '',
          qs1: {},
          qs2: {}
        }
      },
      computed: {
        qs1src () {
          return 'http://ik.hustonline.net/question/' + this.qs1.qid
        },
        qs2src () {
          return 'http://ik.hustonline.net/question/' + this.qs2.qid
        },
        qs1r () {
          if (this.qs1.best_answer && this.qs1.best_answer.length > 80) {
            let s = String(this.qs1.best_answer)
            let t = s.substring(0,80)
            this.qs1.best_answer = t + '...'
          }
          return this.qs1
        },
        qs2r () {
          if (this.qs2.best_answer && this.qs2.best_answer.length > 80) {
            let s = String(this.qs2.best_answer)
            let t = s.substring(0,80)
            this.qs2.best_answer = t + '...'
          }
          return this.qs2
        }
      },
      mounted () {
        this.getResource()
      },
      methods: {
        search () {
          let search = 'http://ik.hustonline.net/index/search?w=' + this.searchtext
          window.open(search)
        },
        getResource () {
          let vm = this
          this.$http.get('/api/iknow/').then(response => {
            vm.qs1 = response.body[0]
            vm.qs2 = response.body[1]
          }, response => {

          })
        }
      }
    }
</script>
