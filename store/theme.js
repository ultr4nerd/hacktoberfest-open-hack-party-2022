export const state = () => ({
  darkMode: true,
})

export const getters = {
  primaryColor: state => state.darkMode ? "#170F1E" : "#E5E1E6",
  primaryInvertColor: state => state.darkMode ? "#E5E1E6" : "#170F1E",
}

export const mutations = {
  setDarkMode(state, activated) {
    state.darkMode = activated;
  },
}

export const actions = {}
