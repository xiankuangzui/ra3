export const myMixin = {
    methods:{
        findName(name){
            this.$api.getTrain_allies().then((res) =>{
                switch(name){
                    case "军犬" : this.hp = res.dog.blood ; this.atk = res.dog.attack ; this.atp = res.dog.attack_type ; this.def = "人甲";break;
                    case "维和步兵" : this.hp = res.pk.blood ; this.atk = res.pk.attack ; this.atp = res.pk.attack_type ; this.def = "人甲";break;
                    case "标枪兵" : this.hp = res.javelin.blood ; this.atk = res.javelin.attack ; this.atp = res.javelin.attack_type ; this.def = "人甲";break;
                    case "工程师" : this.hp = res.engineer.blood ; this.atk = res.engineer.attack ; this.atp = res.engineer.attack_type ; this.def = "人甲";break;
                    case "间谍" : this.hp = res.spy.blood ; this.atk = res.spy.attack ; this.atp = res.spy.attack_type ; this.def = "人甲";break;
                    case "谭雅" : this.hp = res.tanya.blood ; this.atk = res.tanya.attack ; this.atp = res.tanya.attack_type ; this.def = res.tanya.infantry;break;
                }
            }).catch((error) => {
                return error;
            })
        },
        timerBuild(time,name,type){
            let that = this
            let time_out = setTimeout(function(){
                //改变建造状态
                if(type == 1 || type == 2){
                    if(type == 1){
                        that.changeMain(that.build_state_main = false);
                    }else if(type == 2){
                        that.changedefense(that.defense_state = false);
                    } 
                    //在建造部分添加名字
                    that.m_build.push(name);
                    clearTimeout(time_out)
                }else if(type == 3 || type == 4 || type == 5){
                    if(type == 3){
                        that.changeTrain(that.train_state = false);
                    }else if(type == 4){
                        that.changetank(that.tank_state = false);
                    }else if(type == 5){
                        that.changeair(that.air_state = false);
                    }
                    that.addArmies(name);
                    that.addArmies_1(name);
                    that.choice_armiesName(name);
                    clearTimeout(time_out)
                }
            },time*1000);            
        },
    }
}