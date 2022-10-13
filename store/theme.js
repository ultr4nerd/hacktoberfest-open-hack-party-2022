export const state = () => ({
  darkMode: true,
})

export const getters = {
  primaryColor: state => state.darkMode ? "#170F1E" : "#E5E1E6",
  primaryInvertColor: state => state.darkMode ? "#E5E1E6" : "#170F1E",
  defaultHasText: state => state.darkMode ? "has-text-manga" : "has-text-void",
  defaultIs: state => state.darkMode ? "is-manga" : "is-void",
  gitHubInputClass: state => state.darkMode ? "github-username-input__dark" : "github-username-input__light",
}

export const mutations = {
  setDarkMode(state, activated) {
    state.darkMode = activated;
  },
}

export const actions = {}
