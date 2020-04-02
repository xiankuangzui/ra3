<template>
  <div class="allies">
      <ul v-if="options == 1">
          <li>反应堆</li>
          <li>军营</li>
          <li>矿场</li>
          <li>战争工厂</li>
          <li>机场</li>
          <li style="line-height:1rem">作战实验室</li>
      </ul>
      <ul v-if="options == 2">
          <li>哨戒机枪</li>
          <li>高射炮</li>
          <li>磁暴线圈</li>
      </ul>
      <ul v-if="options == 3">
          <li>战熊</li>
          <li>动员兵</li>
          <li>防空步兵</li>
          <li>战斗工兵</li>
          <li>磁暴步兵</li>
          <li>娜塔莎</li>
      </ul>
      <ul v-if="options == 4">
          <li style="line-height:1rem;width:1.3rem">恐怖机器人</li>
          <li style="width:1.3rem">镰刀机甲</li>
          <li style="width:1.3rem">牛蛙载具</li>
          <li style="width:1.3rem">铁锤坦克</li>
          <li style="width:1.3rem">天启坦克</li>
          <li style="line-height:0.85rem;width:1.3rem">V4火箭发射车</li>
          <li style="line-height:1rem;width:1.3rem">苏联基地车</li>
      </ul>
      <ul v-if="options == 5" style="line-height:0.9rem">
          <li>双刃直升机</li>
          <li>米格战机</li>
          <li>基洛夫飞艇</li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        options:{
            type:Number,
            dafault:Number
        }
    },
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