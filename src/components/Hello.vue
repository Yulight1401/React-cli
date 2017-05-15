<template>
  <div draggable="false" class="card" id="hello" >
      <i class="menu drag icon-wrench"/>
      <i class="menu config icon-reorder"/>
    <p >Hello Huster</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#hello{
height:200px;
}
</style>
