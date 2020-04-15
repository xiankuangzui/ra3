<template>
  <div class="build">
      <div class="e_build">
          <span>敌方建筑</span>
          <ul v-if="current_map == 3">
              <li v-for="(item,index) in e_build" :key="index.key">{{item}}</li>
          </ul>
      </div>
      <div class="m_build">
          <span>我方建筑</span>
          <ul v-if="current_map == 1">
              <li v-for="(item,index) in m_build" :key="index.key">{{item}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { myMixin } from '@/components/mixin/fire.js'
export default {
    mixins:[myMixin],
    data(){
        return{
            e_build:["建造厂"],
            m_build:["建造厂"],
            current_map:1
        }
    },
    computed:{
        changeMain_build(){
            return this.$store.state.build_store.build_state_main
        },
        changeDefense_build(){
            return this.$store.state.defense_store.defense_state  
        },
        changeCurrentMap(){
            return this.$store.state.current_map.map
        },
    },
    methods:{
        addBuild(){
            this.$api.getBuild_allies().then(res => {
                let id = this.$store.state.build_store.build_main_id;
                if(this.$store.state.build_store.build_state_main == true){
                    let data = res[`${id}`];
                    this.timerBuild(data.time,data.name,1)
                    // build.bind(this)(data.time,data.name,1)
                };                
            }).catch((error) =>{
                return error;
            })
        },
        addDefense(){
            this.$api.getDefense_allies().then(res => {
                let id = this.$store.state.defense_store.build_defense_id;
                if(this.$store.state.defense_store.defense_state == true){
                    let data = res[`${id}`];
                    this.timerBuild(data.time,data.name,2)
                }
            })
        },
        ...mapMutations(["changeMain","changeMain_id","changeMap","changedefense","changedefense_id"])
    },
    watch:{
        //监听建造状态的改变
        changeMain_build(val){
            if(val == true){
                this.addBuild()
            };
            if(val == false){
                clearTimeout()
            }
        },
        changeDefense_build(val){
            if(val == true){
                this.addDefense()
            };
            if(val == false){
                clearTimeout()
            }
        },
        changeCurrentMap(){
            this.current_map = this.$store.state.current_map.map
        },
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.build{
    margin-top:2rem;
    width:100%;
    height:20rem;
    div{
        width:100%;
        height:50%;
        border:1px solid black;
        span{
            font-size: 0.5rem;
            display:inline-block;
        }
        ul{
            display:flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            width:100%;
            text-align: center;
            margin:0 auto;
            li{
                display:inline-block;
                box-sizing: border-box;
                width:25%;
                border:1px solid black;
                font-size: 0.8rem;
            }
        }
    }
}
</style>