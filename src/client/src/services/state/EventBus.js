import Vue from 'vue';
export const EventBus=new Vue();
EventBus.$on('logout',()=>console.log('logout'))
