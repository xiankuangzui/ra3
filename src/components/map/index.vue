<template>
  <div class="map">
      <div v-if="map_secleted == 3" class="box_3">
        <div class="first" @click="reset(3)" :class="{sets:sets == 3}">敌营</div>
        <div class="second" @click="reset(2)" :class="{sets:sets == 2}">中枢</div>
        <div class="third" @click="reset(1)" :class="{sets:sets == 1}">基地</div>
      </div>
      <div v-if="map_secleted == 5">
          <span>5块</span>
      </div>
      <div v-if="map_secleted == 7">
          
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
            map_secleted:3,
            sets:1,
            moves:false
        }
    },
    props:{
        map:{
            type:String,
            default:""
        }
    },
    computed:{
        whenMove(){
            return this.$store.state.control.move
        }
    },
    methods:{
        reset(id){
            let id_old = this.$store.state.current_map.map;   
            let moveArmy = this.$store.state.choice.choice_army;   
            let moveName = this.$store.state.choice.choice_armiesName;
            this.sets = id;
            this.changeMap(id);           
            if(this.moves == true && id_old == 1 && id == 2){                
                this.deleteArmies_1(moveArmy);
                this.addArmies_2(moveName);
                this.changeMove(this.move = false);               
            }else if(this.moves == true && id_old == 2 && id == 1){
                this.deleteArmies_2(moveArmy);
                this.addArmies_1(moveName);
                this.changeMove(this.move = false);                
            }else if(this.moves == true && id_old == 2 && id == 3){ 
                this.deleteArmies_2(moveArmy);
                this.addArmies_3(moveName);
                this.changeMove(this.move = false);               
            }else if(this.moves == true && id_old == 3 && id == 2){
                this.deleteArmies_3(moveArmy);
                this.addArmies_2(moveName);
                this.changeMove(this.move = false);                
            }
        },
        ...mapMutations(["changeMap","choice_armies","changeMove","addArmies_1","addArmies_2","addArmies_3","deleteArmies_1","deleteArmies_2","deleteArmies_3","choice_armiesName"])
    },
    mounted(){
        let map = this.map;
        switch(map){
            case "3块" : this.map_secleted = 3;break;
            case "5块" : this.map_secleted = 5;break;
            case "7块" : this.map_secleted = 7;break;
        }
    },
    watch:{
        whenMove(){
            this.moves = this.$store.state.control.move;
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.map{   
    width:100%;
    height:10rem;
    border:1px black solid;
    .box_3{
        width:100%;
        height:100%;
        position:relative;
        overflow:hidden;
        margin:0;
        text-align: center;
        line-height:2rem;
        font-size: 1rem;
        .first{
            position:absolute;
            top:0;
            left:0;
            width:3rem;
            height:2rem;
            border:1px solid black;
            
        }
        .second{
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            width:3rem;
            height:2rem;
            border:1px solid black;
            
        }
        .third{
            position:absolute;
            bottom:0;
            right:0;
            width:3rem;
            height:2rem;
            border:1px solid black;
            
        }
        .sets{
            background:red;
        }
    }
}
</style>