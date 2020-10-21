import Vue from 'vue'
import Router from 'vue-router'
import ExampleImageDisplay from '../view/ExampleImageDisplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirectPath: '/example-image-display'
    },
    {
      path: '/example-image-display',
      component: ExampleImageDisplay
    }
  ]
})
