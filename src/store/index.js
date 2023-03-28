import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js';
import actions from './actions.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsItem: [],
    askItem: [],
    jobsItem: [],
    askItems: {},
    userItem: {},
  },
  getters: {
    fetchedNews(state) {
      return state.newsItem;
    },
    fetchedAsk(state) {
      return state.askItem;
    },
    fetchedJobs(state) {
      return state.jobsItem;
    },
    fetchedItem(state) {
      return state.askItems;
    },
    fetchedUser(state) {
      return state.userItem;
    },
  },
  mutations,
  actions,
});