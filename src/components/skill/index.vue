<template>
  <div class="skill">
      <span>{{skills}}</span>
  </div>
</template>

<script>
export default {
    data(){
        return{
            skills:"技能"
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.skill{
    width:100%;
    text-align:center;
    border:1px solid black;
    span{
        text-align:center;
    }
}
</style>