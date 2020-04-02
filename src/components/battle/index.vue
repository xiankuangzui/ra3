<template>
    <div class="battle">
        <div class="left">
            <ba-enemy></ba-enemy>
            <ba-myself></ba-myself>
        </div>
        <div class="right">
            <ba-map :map="map" class="map"></ba-map>
            <div class="others"><span>{{gold}}</span><span>维修</span><span @click="back">返回</span></div>
            <ba-production :camp="camp"></ba-production>
            <ba-skill :skill="skill"></ba-skill>
            <ba-control></ba-control>
            <ba-build></ba-build>
        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>
import BaMap from '@/components/map/index.vue'
import BaProduction from '@/components/production/index.vue'
import BaSkill from '@/components/skill/index.vue'
import BaControl from '@/components/control/index.vue'
import BaBuild from '@/components/build/index.vue'
import BaEnemy from '@/components/fight/enemy.vue'
import BaMyself from '@/components/fight/myself.vue'
export default {
    data(){
        return{
            camp:Number,
            enemy:Number,
            map:Number,
            gold:10000,
            skill:""
        }
    },
    created(){
        this.camp = this.$route.params.camp;
        this.enemy = this.$route.params.enemy;
        this.map = this.$route.params.map;
    },
    methods:{
        back(){
            this.$router.back()
        }
    },
    components:{
        BaMap,
        BaProduction,
        BaSkill,
        BaControl,
        BaBuild,
        BaEnemy,
        BaMyself
    }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/index.less';
.battle{
    position:fixed;
    top:0;
    background:white;
    width:100%;
    height:100%;
    button{
        display:inline-block;
    }
    .left{
        float:left;
        width:57%;
        height:100%;
    }
    .right{
        float:right;
        margin-right:10px;
        width:40%;
        .others{
            display:flex;
            justify-content: space-between;
            width:100%;
            text-align: center;
            span{
                display:inline-block;
                border:1px solid black;
                width:33.33%;
            }
        }
    }
}
</style>