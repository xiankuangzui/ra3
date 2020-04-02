<template>
  <div class="control">
      <div @click="attack"><span>攻击</span></div>
      <div @click="move"><span>移动</span></div>
      <div @click="same"><span>相同</span></div>
      <div @click="all"><span>全选</span></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {    
    data(){
        return{
            
        }
    },
    computed:{
        whenAttack(){
            return this.$store.state.control.attack
        },
        whenMove(){
            return this.$store.state.control.move
        }
    },
    methods:{
        attack(){
            if(this.$store.state.choice.choice_armiesName != ''){
                this.changeAttack(this.attack = true);
            }            
        },
        move(){
            if(this.$store.state.choice.choice_armiesName != ''){
                this.changeMove(this.move = true);
            }            
        },
        same(){

        },
        all(){

        },
        ...mapMutations(["changeMove","changeAttack"])
    },
    watch:{
        whenAttack(){
            this.attack = this.$store.state.control.attack
        },
        whenMove(){
            this.moves = this.$store.state.control.move
        },
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.control{
    width:100%;
    text-align: center;
    div{
        margin-top:10px;
        border:1px solid black;
    }
}
</style>