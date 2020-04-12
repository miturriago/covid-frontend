import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: ' ',
    component: Home,
    meta: {
        guest: true
    }

},
{
    path: '/userhome',
    name: 'userhome',
    component: () =>
        import('../views/private/userhome.vue'),
    meta: {
        auth: true
    }
},

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.auth)) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next()
        } else {
          next({
            path: "/",
          })
        }
      })
    } else if (to.matched.some(record => record.meta.guest)) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          next({
            path: "/userhome",
          })
        } else {
          next()
        }
      })
  
    } else {
      next()
    }
  
  })


export default router