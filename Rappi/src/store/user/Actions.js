import {auth} from '@/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import router from "@/router";
import { rappiApi } from '../../api/rappiApi';

export async function login (context, details) {
        const {email,password} = details
        try {
            await signInWithEmailAndPassword(auth,email,password)
            const api = await rappiApi.post('/api/auth/', {
              email:email, password:password
            })
            if (api.status == 200){
              const { data } = api
              console.log(data)
              context.commit('user', data)
            }
          }catch(error){
            switch(error.code){
              case 'auth/user-not-found':
                alert("Usuario no encontrado!")
                break
              case 'auth/wrong-password':
                alert("Contraseña Incorrecto!")
                break
              default:
                alert("Algo salio TERRIBLEMENTE MAL")
            }
            return
          }
  context.commit('SET_USER',auth.currentUser)
  router.push('/tiendas')
}


export async function register ({commit}, details){
        const {email,password, address, phone, name} = details
        try {
            await createUserWithEmailAndPassword(auth,email,password)
            const api = await rappiApi.post('/api/auth/new', {
              name:name, email:email, password:password, address:address, phone:phone
            })
            if (api.status == 200){
              const { data } = api
              console.log(data)
              commit('user', data)
            }
          }catch(error){
            switch(error.code){
              case 'auth/email-already-in-use':
                alert("Ya hay alguien con ese email")
                break
              case 'auth/invalid-email':
                alert("Email invalido")
                break
              case 'auth/operation-not-allowed':
                alert("Ya hay alguien con ese email")
                break
              case 'auth/weak-password':
                alert("Contraseña debil")
                break
              default:
              alert("Algo salio TERRIBLEMENTE MAL")
              }
              return
          }
  commit('SET_USER',auth.currentUser)
  router.push('/tiendas')
}

export async function logout ({commit}){
  await signOut(auth)
  commit('CLEAR_USER')
  router.push('/InicioUsuario')
}

export const fetchUser = (context) =>{
  auth.onAuthStateChanged(async user =>{
    if(user === null){
      context.commit('CLEAR_USER')
    } else{
      context.commit('SET_USER', user)
      if(router.isReady() && router.currentRoute.value.path === '/InicioUsuario'){
        router.push('/')
      }
    }
  })
}


// try {
//   const api = await rappiApi.post('/api/auth/new', {
//     name:name, email:email, password:password, address:address, phone:phone
//   })
//   if (api.status == 200){
//     let { data } = api
//     console.log(data.usuario)
//   }
// }catch(error){
//   console.log(error)
// }