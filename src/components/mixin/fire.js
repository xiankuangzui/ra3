export const myMixin = {
    methods:{
        findName(item,index){
            let data;
            let that = this;
            this.$api.getAllies().then((res)=>{
                data = res;
                this.number = index;
                this.choice_armies(index);            
                let result = this.$options.methods.find.bind(this)(data,item)
                this.detail = true;
                this.hp = result.blood;
                this.atk = result.attack;
                this.atp = result.attack_type;
                if(result.armor == "infantry"){
                    this.def = "人甲"
                }else if(result.armor == "steel"){
                    this.def = "铁甲"
                }                
                var myArmy = setTimeout(function(){
                    that.choice_armiesBlood(that.hp);
                    that.choice_armiesAttack(that.atk);
                    that.choice_armiesAttackType(that.atp);
                    that.choice_armiesDefense(that.def);
                    clearTimeout(myArmy)
                },100)
            });            
        },
        find(data,name){
            this.list = data;           
            for(var i in this.list){
                for(var j in this.list[i]){
                    var oList = this.list[i]
                    if(oList[j].name == name){                       
                        return oList[j]
                    }
                }
            }
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