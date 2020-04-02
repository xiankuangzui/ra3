<template>
  <div class="allies">
      <ul v-if="options == 1">
          <li>发电机</li>
          <li>瞬息道场</li>
          <li>矿场</li>
          <li>机甲工厂</li>
          <li>纳米主机</li>
      </ul>
      <ul v-if="options == 2">
          <li>VX防御塔</li>
          <li>波能塔</li>
      </ul>
      <ul v-if="options == 3">
          <li style="width:1.3rem;line-height:1rem">爆裂无人机</li>
          <li style="width:1.3rem">帝国武士</li>
          <li style="width:1.3rem">坦克杀手</li>
          <li style="width:1.3rem">工兵</li>
          <li style="width:1.3rem">忍者</li>
          <li style="width:1.3rem">火箭天使</li>
          <li style="width:1.3rem;line-height:0.85rem">欧米茄百合子</li>
      </ul>
      <ul v-if="options == 4">
          <li>天狗机甲</li>
          <li>海啸坦克</li>
          <li>打击者VX</li>
          <li>鬼王</li>
          <li>波能坦克</li>
          <li style="line-height:1rem">帝国基地车</li>
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