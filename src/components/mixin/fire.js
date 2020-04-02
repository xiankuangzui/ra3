export const myMixin = {
    methods:{
        findName(name){
            this.$api.getTrain_allies().then((res) =>{
                switch(name){
                    case "军犬" : this.hp = res.dog.blood ; this.atk = res.dog.attack ; this.atp = res.dog.attack_type ; this.def = "人甲";console.log(1);break;
                    case "维和步兵" : this.hp = res.pk.blood ; this.atk = res.pk.attack ; this.atp = res.pk.attack_type ; this.def = "人甲";console.log(1);break;
                    case "标枪兵" : this.hp = res.javelin.blood ; this.atk = res.javelin.attack ; this.atp = res.javelin.attack_type ; this.def = "人甲";console.log(1);break;
                    case "工程师" : this.hp = res.engineer.blood ; this.atk = res.engineer.attack ; this.atp = res.engineer.attack_type ; this.def = "人甲";console.log(1);break;
                    case "间谍" : this.hp = res.spy.blood ; this.atk = res.spy.attack ; this.atp = res.spy.attack_type ; this.def = "人甲";console.log(1);break;
                    case "谭雅" : this.hp = res.tanya.blood ; this.atk = res.tanya.attack ; this.atp = res.tanya.attack_type ; this.def = res.tanya.infantry;console.log(1);break;
                }
            }).catch((error) => {
                return error;
            })
        },
        translate(id){
            return res.id = res.id
        }
    }
}