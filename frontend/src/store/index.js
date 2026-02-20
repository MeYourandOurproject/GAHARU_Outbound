import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    isAuthenticated: false,
    title: "",
    token: null,
    loginTimestamp: null, // Store the login timestamp
  },
  mutations: {
    login(state, token) {
      state.isAuthenticated = true;
      state.token = token;
      state.loginTimestamp = Date.now(); // Set login timestamp
      localStorage.setItem("token", token);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.loginTimestamp = null;
      localStorage.removeItem("token");
    },
    setTitle(state, title) {
      state.title = title;
    },
  },
  getters: {
    isAuthenticated: (state) => {
      if (state.isAuthenticated) {
        const currentTime = Date.now();
        const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
        if (currentTime - state.loginTimestamp > oneDay) {
          store.commit("logout");
          return false;
        }
        return true;
      }
      return false;
    },
    title: (state) => state.title,
    token: (state) => state.token,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;
        const response = await fetch(
          `${API_BASE_URL}/api/users/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );

        if (response.ok) {
          const data = await response.json();
          commit("login", data.token);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Login failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
        throw error;
        // Handle login failure (e.g., show an error message to the user)
      }
    },
    logout({ commit }) {
      commit("logout");
    },
    updateTitle({ commit }, title) {
      commit("setTitle", title);
    },
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage, // You can also use sessionStorage
    }),
  ],
});

export default store;
