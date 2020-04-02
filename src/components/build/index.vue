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
import { mapMutations } from 'vuex'
export default {
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
                let build = this.$options.methods.timerBuild;
                if(this.$store.state.build_store.build_state_main == true){
                    switch(id){
                        case "power" : build.bind(this)(res.power.time,res.power.name); break;  
                        case "train" : build.bind(this)(res.train.time,res.train.name);break;
                        case "mine" : build.bind(this)(res.mine.time,res.mine.name);break;
                        case "tank" : build.bind(this)(res.tank.time,res.tank.name);break;
                        case "air" : build.bind(this)(res.air.time,res.air.name);break;
                        case "technology" : build.bind(this)(res.technology.time,res.technology.name);break;
                        
                    }
                };                
            }).catch((error) =>{
                return error;
            })
        },
        //建造定时器
        timerBuild(time,name){
            let that = this
            let time_out = setTimeout(function(){
                //改变建造状态
                that.changeMain(that.build_state_main = false);
                //在建造部分添加名字
                that.m_build.push(name);
            },time*1000);            
        },
        addDefense(){
            this.$api.getDefense_allies().then(res => {
                let id = this.$store.state.defense_store.build_defense_id;
                let defense = this.$options.methods.timerDefense;
                if(this.$store.state.defense_store.defense_state == true){
                    switch(id){
                        case "turret" : defense.bind(this)(res.turret.time,res.turret.name);break;
                        case "spectrum" : defense.bind(this)(res.spectrum.time,res.spectrum.name);break;
                    }
                }
            })
        },
        timerDefense(time,name){
            let that = this;
            let time_out = setTimeout(function(){
                that.changedefense(that.defense_state = false);
                that.m_build.push(name)
            },time*1000)
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