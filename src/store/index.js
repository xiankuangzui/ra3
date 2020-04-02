import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const build_store = {
    state:{
        build_state_main:false,//建筑建造状态
        build_main_id:"",//建造的建筑
    },
    mutations:{
        changeMain(state,build_state_main){
            state.build_state_main = build_state_main
        },
        changeMain_id(state,build_main_id){
            state.build_main_id = build_main_id
        }
    }
}
const defense_store = {
    state:{
        defense_state:false,//防卫武器建造状态
        build_defense_id:"",//建造的防卫武器
    },
    mutations:{
        changedefense(state,defense_state){
            state.defense_state = defense_state
        },
        changedefense_id(state,build_defense_id){
            state.build_defense_id = build_defense_id
        }
    },
    
}
const train_store = {
    state:{
        train_state:false,//兵营造兵状态
        train_barracks_id:"",//建造的兵
    },
    mutations:{
        changeTrain(state,train_state){
            state.train_state = train_state
        },
        changeTrain_id(state,train_barracks_id){
            state.train_barracks_id = train_barracks_id
        }
    }
}
const tank_store = {
    state:{
        tank_state:false,//坦克建造状态
        build_tank_id:"",//建造的坦克
    },
    mutations:{
        changetank(state,tank_state){
            state.tank_state = tank_state
        },
        changetank_id(state,build_tank_id){
            state.build_tank_id = build_tank_id
        }
    }
}
const air_store = {
    state:{
        air_state:false,//机场建造状态
        build_plane_id:"",//建造的飞机
    },
    mutations:{
        changeair(state,air_state){
            state.air_state = air_state
        },
        changeair_id(state,build_plane_id){
            state.build_plane_id = build_plane_id
        }
    }
}
const army = {
    state:{
        armies:[],
        armies_1:[],
        armies_2:[],
        armies_3:[],        
        
    },
    mutations:{
        addArmies(state,armies){
            state.armies.push(armies);
        },
        deleteArmies(state,armies){
            state.armies.splice(armies,1)
        },
        addArmies_1(state,armies_1){
            state.armies_1.push(armies_1);
        },
        deleteArmies_1(state,armies_1){
            state.armies_1.splice(armies_1,1)
        },
        addArmies_2(state,armies){
            state.armies_2.push(armies);
        },
        deleteArmies_2(state,armies){
            state.armies_2.splice(armies,1)
        },
        addArmies_3(state,armies){
            state.armies_3.push(armies);
        },
        deleteArmies_3(state,armies){
            state.armies_3.splice(armies,1)
        },        
        
    },    
    // getters:{
    //     armies_1:state => state.armies_1
    // }
}
const en_army = {
    state:{
        en_armies:["标枪兵","标枪兵","标枪兵","标枪兵","标枪兵"],
    },
    mutations:{
        deleteEnArmies(state,armies){
            state.en_armies.splice(armies,1)
        }
    }
}
const choice = {
    state:{
        choice_army:-1,
        choice_armiesName:'',
        choice_armiesBlood:0,
        choice_armiesAttack:0,
        choice_armiesAttackType:'',
        choice_armiesDefense:'',        
    },
    mutations:{
        choice_armies(state,choice_army){
            state.choice_army = choice_army
        },
        choice_armiesName(state,choice_armiesName){
            state.choice_armiesName = choice_armiesName
        },
        choice_armiesBlood(state,choice_armiesBlood){
            state.choice_armiesBlood = choice_armiesBlood
        },
        choice_armiesAttackType(state,choice_armiesAttackType){
            state.choice_armiesAttackType = choice_armiesAttackType
        },
        choice_armiesAttack(state,choice_armiesAttack){
            state.choice_armiesAttack = choice_armiesAttack
        },
        choice_armiesDefense(state,choice_armiesDefense){
            state.choice_armiesDefense = choice_armiesDefense
        },
    }
}
const current_map = {
    state:{
        map:1
    },
    mutations:{
        changeMap(state,map){
            state.map = map
        }
    }
}
const control = {
    state:{
        attack:false,
        move:false,
    },
    mutations:{
        changeMove(state,move){
            state.move = move
        },
        changeAttack(state,attack){
            state.attack = attack
        }
    }   
}
export default new Vuex.Store({
    modules:{
        build_store : build_store,
        defense_store : defense_store,
        train_store : train_store,
        tank_store : tank_store,
        air_store : air_store,
        army : army,
        current_map : current_map,
        control : control,
        choice : choice,
        en_army : en_army
    }
})
