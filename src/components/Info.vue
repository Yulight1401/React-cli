<template>
  <div id="info" class="card" >
    <svg class="menu" style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </svg>
    <div class="cardtitlebar">
      <div class="cardicon icon"></div>
      <a class="cardtitle">校园资讯</a>
    </div>
    <div class="cardcontent">
      <div id="ifcontent" class="list">
        <div class="listitem">
          <div v-bind:style="item1src" class="itemcover"></div>
          <p class="itemtitle">{{item1.title}}</p>
          <p class="itemcontent">{{item1.digest}}<a v-bind:href="item1.url" target="_blank">more</a></p>
        </div>
        <hr style="border:0;height:1px;position:absolute;width:100%;left:0px;background-color:#F4F4F4;margin-top:-13px;"/>
        <div class="listitem">
          <div v-bind:style="item2src" class="itemcover"></div>
          <p class="itemtitle">{{item2.title}}</p>
          <p class="itemcontent">{{item2.digest}}<a v-bind:href="item2.url" target='_blank'>more</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
    #info{
        height:351px;
    }
    #info .icon{
      background: url('../assets/info.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #info .cardtitle{
      color: rgb(240,83,82);
    }
    #ifcontent{
      margin-top: -14px;
      padding-left: 11px;
      box-sizing: border-box;
    }
    #ifcontent .listitem{
      height: 149px;
      letter-spacing: 1px;
      line-height: 28px;
      margin-top: 15px;
    }
    #ifcontent img{
      width: 110px;
      height: 80px;
      margin-top: 10px;
      float: right;
    }
    .itemtitle{
      color:#5c5c5c;
      opacity: 1;
    }
    #ifcontent .itemcontent{
      color: #bbbbbb;
    }
    #ifcontent .itemcontent{
      margin-top: 24px;
      letter-spacing: 0px;
    }
    #ifcontent a {
      position: absolute;
      right: 0px;
      margin-top: 0px;
      margin-right: 18px;
      color: rgb(240,83,82);
    }
    .itemcover{
      width: 80px;
      height: 80px;
      display: inline-block;
      float: right;
      margin-top: 10px;
      background-repeat: no-repeat;
      background-size: cover;
    }
</style>
<script>
    export default{
      name: 'weather',
      data () {
        return {
          item1: {},
          item2: {}
        }
      },
      computed: {
        item1src () {
          return {
            backgroundImage: 'url(http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + this.item1.thumb_url + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }
        },
        item2src () {
          return {
            backgroundImage: 'url(http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + this.item2.thumb_url + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }
        }
      },
      mounted () {
        this.getResource()
      },
      methods: {
        getResource () {
          let vm = this
          this.$http.get('/api/iknowhust/').then(response => {
            vm.item1 = response.body.item[2].content.news_item[0]
            vm.item2 = response.body.item[3].content.news_item[0]
          }, response => {
            window.alert('iknow获取失败')
          })
        }
      }
    }
</script>
