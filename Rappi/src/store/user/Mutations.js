export const SET_USER = (state,user) => {
  state.user = user
  console.log(user)
}
export const CLEAR_USER = (state) => {
  state.user = null            
}

export const user = (state, data) => {
  console.log(data)
  state.user.token = data.token
  state.user.info = data.usuario
}