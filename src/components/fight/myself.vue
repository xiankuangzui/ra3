<template>
  <div class="myself">
      <span @click="cancel">我方部队</span>
      <ul v-if="current_map == 1">
          <li v-for="(item,index) in armies_1" :key="index" @click="chose(item,index)" :class="{choice:index == number}">{{item}}</li>
      </ul>
      <ul v-if="current_map == 2">
          <li v-for="(item,index) in armies_2" :key="index" @click="chose(item,index)" :class="{choice:index == number}">{{item}}</li>
      </ul>
      <ul v-if="current_map == 3">
          <li v-for="(item,index) in armies_3" :key="index" @click="chose(item,index)" :class="{choice:index == number}">{{item}}</li>
      </ul>
      <div class="detail" v-if="detail == true">生命值：{{hp}} 攻击：{{atk}} 防御类型：{{def}}</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { myMixin } from '@/components/mixin/fire.js'
export default {
    mixins:[myMixin],
    data(){
        return{
            armies:[],
            armies_1:[],
            armies_2:[],
            armies_3:[],
            current_map:1,
            number:-1,
            attack:false,
            hp:Number,
            atk:Number,
            atp:"",
            def:"",
            detail:false
        }
    },
    computed:{
        changeTrain_barracks(){
            return this.$store.state.train_store.train_state;
        },
        changeTankBuild(){
            return this.$store.state.tank_store.tank_state;
        },
        changeAirBuild(){
            return this.$store.state.air_store.air_state;
        },
        changeCurrentMap(){
            return this.$store.state.current_map.map;
        },        
        changeAttack(){
            return this.$store.state.control.attack;
        }
    },
    methods:{
        addBarracks(){
            this.$api.getTrain_allies().then((res) =>{                
                let id = this.$store.state.train_store.train_barracks_id;
                if(this.$store.state.train_store.train_state == true){                    
                    let data = res[`${id}`];
                    this.timerBuild(data.time,data.name,3)
                };
            }).catch((error) => {
                return error;
            })
        },
        addTank(){
            this.$api.getTank_allies().then((res) => {
                let id = this.$store.state.tank_store.build_tank_id;
                if(this.$store.state.tank_store.tank_state == true){
                    let data = res[`${id}`];
                    this.timerBuild(data.time,data.name,4)
                }
            })
        },
        addAir(){
            this.$api.getPlane_allies().then((res) => {
                let id = this.$store.state.air_store.build_plane_id;
                if(this.$store.state.air_store.air_state == true){
                    let data = res[`${id}`];
                    this.timerBuild(data.time,data.name,5)
                }
            })
        },
        chose(item,index){
            let that = this;
            this.number = index;
            this.choice_armies(index);
            this.findName(item);
            this.detail = true;
            var myArmy = setTimeout(function(){
                that.choice_armiesBlood(that.hp);
                that.choice_armiesAttack(that.atk);
                that.choice_armiesAttackType(that.atp);
                that.choice_armiesDefense(that.def);
                clearTimeout(myArmy)
            },100)
            
        },
        cancel(){
            this.number = -1;
            this.choice_armies('');
            this.detail = false
        },
        ...mapMutations(["changeTrain","changeTrain_id","addArmies","addArmies_1","addArmies_2","changeMap","changeMove","choice_armies","choice_armiesName","choice_armiesBlood","choice_armiesAttack","choice_armiesAttackType","choice_armiesDefense","changetank","changetank_id","changeair_id","changeair"])
    },
    watch:{
        changeTrain_barracks(val){            
            if(val == true){
                this.addBarracks()
            }else{
                clearTimeout()
            }
        },
        changeTankBuild(val){
            if(val == true){
                this.addTank()
            }else{
                clearTimeout()
            }
        },
        changeAirBuild(val){
            if(val == true){
                this.addAir()
            }else{
                clearTimeout()
            }
        },
        changeCurrentMap(){
            this.current_map = this.$store.state.current_map.map;
        },
        '$store.state.army.armies'(){
            this.armies = this.$store.state.army.armies_1;
        },
        '$store.state.army.armies_1'(){
            this.armies_1 = this.$store.state.army.armies_1;
        },
        '$store.state.army.armies_2'(){
            this.armies_2 = this.$store.state.army.armies_2;
        },
        '$store.state.army.armies_3'(){
            this.armies_3 = this.$store.state.army.armies_3;
        },
        changeAttack(){
            this.attack = this.$store.state.control.attack;
        }
    },   
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.myself{
    widows: 100% ;
    height:50%;
    border-top:1px solid black;
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
        .choice{
            background:gray;
            color:white;
        }
    }
    .detail{
        font-size: 0.8rem;
        position: fixed;
        bottom:1rem;
        
    }
}
</style>