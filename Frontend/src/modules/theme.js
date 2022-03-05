export default{
    namespaced: true,
    state: {
        dark: localStorage.getItem('dark')?(localStorage.getItem('dark')=='true'):false
    },
    mutations:{
        setDark(state,value){
            state.dark = value;
        }
    },
    actions:{
        changeDark({commit,state}){
            commit('setDark',!state.dark)
        }
    }
}