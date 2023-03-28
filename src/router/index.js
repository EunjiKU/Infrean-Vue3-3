import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '@/views/NewsView.vue';
import AskVeiw from '@/views/AskVeiw.vue';
import JobsView from '@/views/JobsView.vue';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      component: NewsView
    },
    {
      path: '/ask',
      component: AskVeiw
    },
    {
      path: '/jobs',
      component: JobsView
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    },
  ]
});