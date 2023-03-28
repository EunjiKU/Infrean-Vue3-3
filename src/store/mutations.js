export default {
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
}
