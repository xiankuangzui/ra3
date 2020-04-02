<template>
  <div id="app" :style="height">
    <div class="play">
      <div class="home">
        <span @click="play()">PLAY</span>
        <span @click="next(1)">{{camp}}</span>
        <span @click="next(2)">{{enemy}}</span>
        <span @click="next(3)">{{map}}</span>
      </div>
      <div class="home_item" v-if="secleted == 1" @click="choice">
        <span @click="choose(1)">盟军</span>
        <!-- <span @click="choose(2)">苏联</span>
        <span @click="choose(3)">旭日</span> -->
      </div>
      <div class="home_item" v-if="secleted == 2" @click="choice">
        <span @click="choose(4)">盟军</span>
        <!-- <span @click="choose(5)">苏联</span>
        <span @click="choose(6)">旭日</span> -->
      </div>
      <div class="home_item map" v-if="secleted == 3" @click="choice">
        <span @click="choose(7)">3块</span>
        <!-- <span @click="choose(8)">5块</span>
        <span @click="choose(9)">7块</span> -->
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      secleted:0,
      camp:"阵容",
      enemy:"敌人",
      map:"地图",
      height:{
        width:"100%",
        height:"",
      }
    }
  },
  mounted(){
    this.hh();
  },
  methods:{
    hh(){
      this.height.height = window.innerHeight - 16 + "px";
    },
    next(id){
      this.secleted = id;
    },
    choice(){
      this.secleted = 0;
    },
    choose(id){
      switch(id){
        case 1 : this.camp = "盟军";break;
        case 2 : this.camp = "苏联";break;
        case 3 : this.camp = "旭日";break;
        case 4 : this.enemy = "盟军";break;
        case 5 : this.enemy = "苏联";break;
        case 6 : this.enemy = "旭日";break;
        case 7 : this.map = "3块";break;
        case 8 : this.map = "5块";break;
        case 9 : this.map = "7块";break;
      }
    },
    play(){
      this.$router.push({path:'/battle',name:'Battle',params:{camp:this.camp,enemy:this.enemy,map:this.map}})
    }
  },
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
body{
  margin:0px;
  padding:0px;
  border:0px;
}
#app{
  margin:0;
  padding:0;
}
.play{
  position: relative;
  height:100%;
  text-align: center;
  font-size: 5rem;
  .home{
    position:absolute;
    display:inline-block;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    span{
      display:block;
      width:12rem;
      margin:10px;
      border:1px solid black;
      cursor:pointer;
      outline:none;
    }    
  }
  .home_item{
    display:block;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background:black;
    color:white;
    span{
      display:block;
    }
    .map{
      span{
        font-size: 1rem;
      } 
    }
  }
}
</style>
