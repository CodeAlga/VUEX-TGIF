import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    members: [],
    states: []
  },

  getters: {
    getMembers: (state) => {
      return state.members;
    },
    getStates: (state) => {
      return state.states;
    }
  },

  mutations: {
    setData: (state, payload) => {
      state.members = payload;
    },
    setStates: (state, payload) => {
      state.states = payload;
    }
  },
  actions: {
    createStates: (context) => {
      console.log(context.rootState.members);
      let arr = context.rootState.members;

      let listOfStates = [];

      arr.forEach((element) => {
        if (listOfStates.includes(element.state) == false) {
          listOfStates.push(element.state);
          listOfStates.sort();
        }
      });
      listOfStates.unshift("All States");
      context.commit("setStates", listOfStates);
    },

    getData: (context) => {
      fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
        headers: {
          "X-API-Key": "E7gpCDZxoNHoNjc5XZE65kKGSRLMIUBHrFQUK9Hi"
        }
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          let listOfMembers = data.results[0].members;
          context.commit("setData", listOfMembers);

          context.dispatch("createStates", listOfMembers);
        })
        .catch((error) => {
          console.log("Request failed: " + error.message);
        });
    }
  },

  modules: {}
});
