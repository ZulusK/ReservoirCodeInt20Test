import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/pages/Index';
import ConfirmMail from '@/components/pages/ConfirmMail';
import ActivateAccount from '@/components/pages/ActivateAccount';
import MemePicker  from '@/components/pages/MemePicker';

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
    },
    {
      path:'/activate/:token',
      name:'ActivateAccount',
      component:ActivateAccount
    },
    {
      path:'/meme/pick',
      name:'MemePicker',
      component:MemePicker
    },
  ]
})
