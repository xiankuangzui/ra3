<template>
  <div class="production">
    <div class="items">
      <ul>
        <li @click="option(1)">建</li>
        <li @click="option(2)">防</li>
        <li @click="option(3)">兵</li>
        <li @click="option(4)">机</li>
        <li @click="option(5)">空</li>
      </ul>
      <div v-if="camp_secleted == 1">
        <ba-allies :options="options"></ba-allies>
      </div>
      <div v-if="camp_secleted == 2">
        <ba-union :options="options"></ba-union>
      </div>
      <div v-if="camp_secleted == 3">
        <ba-jap :options="options"></ba-jap>
      </div>
    </div>
  </div>
</template>

<script>
import BaAllies from '@/components/camp/allies.vue'
import BaUnion from '@/components/camp/union.vue'
import BaJap from '@/components/camp/jap.vue'
export default {
  data(){
    return{
      camp_secleted:1,
      options:0,
    }
  },
  props:{
    camp:{
      type:String,
      default:""
    }
  },
  methods:{
    option(num){
      this.options = num;
    }
  },
  mounted(){
    let camp = this.camp;
    switch(camp){
      case "盟军": this.camp_secleted = 1;break;
      case "苏联": this.camp_secleted = 2;break;
      case "旭日": this.camp_secleted = 3;break;
    }
  },
  components:{
    BaAllies,
    BaUnion,
    BaJap
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.production{
  width:100%;
  height:8rem;
  .items{
    ul{
      display:flex;
      justify-content: space-between;
      text-align: center;
      li{
        border:1px solid black;
        font-size: 1.5rem;
        display:inline-block;
        width:20%;
      }
    }
  }
}
</style>