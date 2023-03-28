import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchAskList, fetchJobsList, fetchItemList, fetchUserList } from '@/api/index'


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsItem: [],
    askItem: [],
    jobsItem: [],
    askItems: [],
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
  mutations: {
    SET_NEWS(state, payload) {
      state.newsItem = payload;
    },
    SET_ASK(state, payload) {
      state.askItem = payload;
    },
    SET_JOBS(state, payload) {
      state.jobsItem = payload;
    },
    SET_ITEM(state, payload) {
      state.askItems = payload;
    },
    SET_USER(state, payload) {
      state.userItem = payload;
    },
  },
  actions: {
    FETCH_NEWS({ commit }) {
      fetchNewsList()
        .then(({ data }) => {
          commit("SET_NEWS", data)
        })
        .catch(error => console.log(error))
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit("SET_ASK", data)
        })
        .catch(error => console.log(error))
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit("SET_JOBS", data)
        })
        .catch(error => console.log(error))
    },
    FETCH_ITEM({ commit }, itemUrl) {
      fetchItemList(itemUrl)
        .then(({ data }) => {
          commit("SET_ITEM", data)
        })
        .catch(error => console.log(error))
    },
    FETCH_USER({ commit }, username) {
      fetchUserList(username)
        .then(({ data }) => {
          commit("SET_USER", data)
        })
        .catch(error => console.log(error))
    },
  }
});