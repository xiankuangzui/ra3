import Vue from 'vue'
import axios from 'axios'

//获取盟军建筑
export default{
  getBuild_allies(){
    return axios.get("@/../../static/game.json").then((res) => {
      return Promise.resolve(res.data.allies.build_main)
    })
  },
  getDefense_allies(){
    return axios.get("@/../../static/game.json").then((res) => {
      return Promise.resolve(res.data.allies.build_defense)
    })
  },
  getTrain_allies(){
    return axios.get("@/../../static/game.json").then((res) =>{
      return Promise.resolve(res.data.allies.build_barracks)
    })
  },
  getTank_allies(){
    return axios.get("@/../../static/game.json").then((res) => {
      return Promise.resolve(res.data.allies.build_tank)
    })
  },
  getPlane_allies(){
    return axios.get("@/../../static/game.json").then((res) =>{
      return Promise.resolve(res.data.allies.build_plane)
    })
  }
}