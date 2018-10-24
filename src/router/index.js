import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WorldMap from '@/components/WorldMap'
import ChinaMap from '@/components/ChinaMap'
import Audio from '@/components/Audio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/worldmap',
      name: 'WorldMap',
      component: WorldMap
    },
    {
      path: '/chinamap',
      name: 'ChinaMap',
      component: ChinaMap
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio
    }
  ]
})
