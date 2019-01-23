<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <footbar></footbar>
  </div>
</template>
<script>
import navbar from './components/navbar';
import footbar from './components/footbar';
export default {
  name:'app',
  components:{navbar,footbar},
  mounted(){
    console.log('app',this.$http)
  }
}
</script>
