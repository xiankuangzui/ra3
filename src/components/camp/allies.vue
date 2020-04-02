<template>
  <div class="allies">
      <ul v-if="options == 1">
          <li @click="build_main('power')">发电厂</li>
          <li @click="build_main('train')">训练营</li>
          <li @click="build_main('mine')">矿场</li>
          <li @click="build_main('tank')">装甲工厂</li>
          <li @click="build_main('air')">空军基地</li>
          <li @click="build_main('technology')">科技中心</li>
      </ul>
      <ul v-if="options == 2">
          <li style="line-height:1rem" @click="build_defense('turret')">多功能炮塔</li>
          <li @click="build_defense('spectrum')">光谱塔</li>
      </ul>
      <ul v-if="options == 3">
          <li @click="build_barracks('dog')">军犬</li>
          <li @click="build_barracks('pk')">维和步兵</li>
          <li @click="build_barracks('javelin')">标枪兵</li>
          <li @click="build_barracks('engineer')">工程师</li>
          <li @click="build_barracks('spy')">间谍</li>
          <li @click="build_barracks('tanya')">谭雅</li>
      </ul>
      <ul v-if="options == 4">
          <li @click="build_tank('acv')">激流ACV</li>
          <li style="line-height:0.85rem" @click="build_tank('flexo')">多功能步兵车</li>
          <li style="line-height:1rem" @click="build_tank(3)">守护者坦克</li>
          <li @click="build_tank(4)">雅典娜炮</li>
          <li @click="build_tank(5)">幻影坦克</li>
          <li style="line-height:1rem" @click="build_tank(6)">盟军基地车</li>
      </ul>
      <ul v-if="options == 5" style="line-height:0.9rem">
          <li @click="build_plane('weihe')">维和轰炸机</li>
          <li @click="build_plane('aboluo')">阿波罗战机</li>
          <li @click="build_plane(3)">冷冻直升机</li>
          <li @click="build_plane(4)">世纪轰炸机</li>
      </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
            build_main_id:0,
            build_defense_id:0,
            build_barracks_id:0,
            build_tank_id:0,
            build_plane_id:0,
        }
    },
    props:{
        options:{
            type:Number,
            dafault:Number
        }
    },
    methods:{
        build_main(id){
            this.build_main_id = id;
            this.changeMain(!this.build_state_main);
            this.changeMain_id(id);
        },
        build_defense(id){
            this.build_defense_id = id;
            this.changedefense(!this.defense_state);
            this.changedefense_id(id);
        },
        build_barracks(id){
            this.build_barracks_id = id;
            this.changeTrain(!this.train_state);
            this.changeTrain_id(id);
            
        },
        build_tank(id){            
            this.build_tank_id = id;
            this.changetank(!this.tank_state);
            this.changetank_id(id);
            // console.log(this.$store.state.tank_store.tank_state)
            // console.log(this.$store.state.tank_store.build_tank_id)
        },
        build_plane(id){
            this.build_plane_id = id;
            this.changeair(!this.build_state_main);
            this.changeair_id(id);
            // console.log(this.$store.state.air_store.air_state)
            // console.log(this.$store.state.air_store.build_plane_id)
        },
        ...mapMutations(["changeMain","changeMain_id","changeTrain","changeTrain_id","changedefense","changedefense_id","changetank","changetank_id","changeair","changeair_id"])
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.allies{
    width:100%;
    ul{
        width:100%;        
        display:flex;
        justify-content: flex-start;
        text-align: center;
        li{
            border:1px solid black;
            font-size: 0.9rem;
            width:1.55rem;
            height:5rem;
        }
    }
}
</style>