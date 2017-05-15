<template>
  <div id="oneword"  class="card">
    <svg class="menu" style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </svg>
    <p id="word">{{items.proverb}}</p>
    <p id="author">-{{items.author}}</p>
  </div>
</template>
<style>
    #oneword{
        height:auto;
        flex:1 100%;
        font-size:20px;
        font-family: BaskerVile,Georgia,Cambria,"Times New Roman",Times,serif;
    }
    #word{
        padding:25px 10px 25px 10px;
        font-style:italic;
        text-align:center;
        font-weight:lighter;
    }
    #author{
        text-align:right;
        font-size:15px;
        font-weight:200;
        padding-bottom: 20px;
    }
</style>
<script>
    export default{
      name: 'oneword',
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
          this.$http.get('/api/aphroism/').then(response => {
            vm.items = response.body
          }, response => {
          })
        }
      }
    }
</script>
