import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/pages/Index';
import ConfirmMail from '@/components/pages/ConfirmMail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/confirm-mail',
      name: 'ConfirmMail',
      component: ConfirmMail
    }
  ]
})
