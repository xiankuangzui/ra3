<template>
  <div class="enemy">
      <span @click="cancel">敌方部队</span>
      <ul v-if="current_map == 3">
          <li v-for="(item,index) in e_armies_3" :key="index" @click="choice(item,index)" :class="{choice:index == number}">{{item}}</li>
      </ul>
      <ul v-if="current_map == 2">
          <li v-for="(item,index) in e_armies_2" :key="index" @click="choice(item,index)" :class="{choice:index == number}">{{item}}</li>
      </ul>
      <ul v-if="current_map == 1">
          <li v-for="(item,index) in e_armies_1" :key="index" @click="choice(item,index)" :class="{choice:index == number}">{{item}}</li>
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
            e_armies:[],
            e_armies_1:[],
            e_armies_2:[],
            e_armies_3:["标枪兵","标枪兵","标枪兵","标枪兵","标枪兵"],
            current_map:1,
            attacks:false,
            number:-1,
            hp:Number,
            atk:Number,
            atp:"",
            def:"人甲",
            detail:false
        }
    },
    computed:{
        changeCurrentMap(){
            return this.$store.state.current_map.map
        },
        whenAttack(){
            return this.$store.state.control.attack
        }
    },
    methods:{
        choice(item,index){
            let that = this;
            this.detail = true;
            this.findName(item);            
            var enArmy = setTimeout(function(){
                if(that.attacks == false){
                    that.number = index;
                    clearTimeout(enArmy)
                }else if(that.attacks == true){
                    console.log(that.hp)
                    let enHp = that.hp;
                    let myAtk = that.$store.state.choice.choice_armiesAttack;
                    let myAtp = that.$store.state.choice.choice_armiesAttackType;
                    let enDef = that.def;
                    that.$options.methods.attack.bind(that)(myAtk,enHp,myAtp,enDef,index);
                    that.changeAttack(that.attack = false)
                    clearTimeout(enArmy)
                }
            },100)            
        },
        attack(myAttack,enBlood,myType,enDefense,index){
            let that = this;
            this.detail = true;           
            if(myType == enDefense){
                myAttack = myAttack;
            }else{
                myAttack = myAttack * 0.75
            }
            var atk = setInterval(function(){
                enBlood = enBlood - myAttack;
                that.hp = enBlood.toFixed(0);
                if(enBlood < 0 || enBlood == 0){                    
                    that.hp = 0;
                    that.deleteEnArmies(index);                    
                    clearInterval(atk);
                }
            },1000)
        },
        cancel(){
            this.detail = false
        },
        ...mapMutations(["changeMap","deleteEnArmies","changeAttack"])
    },
    watch:{
        changeCurrentMap(){
            this.current_map = this.$store.state.current_map.map
        },
        whenAttack(){
            this.attacks = this.$store.state.control.attack
        },
        '$store.state.en_army.en_armies'(){
            this.e_armies_3 = this.$store.state.en_army.en_armies;
        },

    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.enemy{
    width:100%;
    height:50%;
    border-bottom: 1px solid black;
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
        li{
            display:inline-block;
            border:1px solid black;
            width:25%;
            font-size: 0.8rem;
            box-sizing: border-box;
        }
        .choice{
            background:gray;
            color:white;
        }
    }
    .detail{
        font-size: 0.8rem;
        position: fixed;
        bottom:50%;
    }
}
</style>