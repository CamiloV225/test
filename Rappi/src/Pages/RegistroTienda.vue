<template>
  <div class="align-items-center">
    <div class="container-fluid" id="maincontainer">
      <div class="row">
        <div class="colum col-6">
          <img src="https://i.ibb.co/wcgzFKL/fondo.png" class="mainimg">
        </div>
        <div class="colum col-6" id="z1">
          <div class="section">
            <h2 class="title">Registra tu tienda</h2>
            <form @submit.prevent="register">
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Nombre de la tienda</label>
                <input type="text" id="input" class="form-control form-control-lg" v-model="register_form.name" required/>
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Email de la tienda</label>
                <input type="email" id="input" class="form-control form-control-lg" v-model="register_form.email" required/>                   
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Direccion de la Tienda</label>
                <input type="text" id="input" class="form-control form-control-lg" v-model="register_form.location" required/>           
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Descripcion de la Tienda</label>
                <input type="text" id="input" class="form-control form-control-lg" v-model="register_form.description" required/>           
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Contraseña</label>
                <input type="password" id="input" class="form-control form-control-lg" v-model="register_form.password" required/>                   
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Confirmar Contraseña</label>
                <input type="password" id="input" class="form-control form-control-lg" v-model="register_form.password2" required />                   
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Link de la imagen</label>
                <input type="text" id="input" class="form-control form-control-lg" v-model="register_form.img"/>                   
              </div>
              <div class="d-flex">
                <input type="radio" class="Hotel-Mike-Oscar" id="b2">
                <label id="b2">Acepta los terminos y Condiciones?</label>
              </div>
              <div>
                <button type="submit" value="register" class="Boton">Registrar Tienda</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
import {ref} from 'vue'
import {useStore} from 'vuex'
import Compfooter from '@/components/shared/Compfooter.vue'
  export default {
    setup() {
      const register_form = ref({})
      const store = useStore();
      const register = () =>{
        register_form.value.star = ((Math.random()*2)+3).toFixed(1)
        register_form.value.delivery = '49.900'
        register_form.value.time = '25 - 40 min'
        if(register_form.value["password"] != register_form.value["password2"]){
          alert("La contraseña no coincide")
        }else{
          console.log(register_form.value)
          store.dispatch('shop/register',register_form.value);
        }
      }
      return {
        register_form,
        register
      }
    },
    components: {
      Compfooter
    }
  }
</script>
<style scoped>
  #input{
    height:20px;
  }
  .mainimg{
    border: none;
  }
    #z1{
      background-color: white;
    }
    .section{
      margin: 50px;
      border: none
    }
    .title{
      margin-left: 50px;
      font-size: 30px; 

      padding-top: 10px;
      padding-bottom: 40px;
    }
    form{
      margin-left: 50px;
      font-size: 12px;
      
    }
    .colum{
      padding: 0px;
      border-radius: 0px;
    }
    #P01{
      margin-top: 30px;
    }
    #condiciones {
        margin-top: 20px;
    }

    button {
    color: white;
    font-size: 20px;
    border-radius: 8px;
    border:0px;
    margin-top: 40px;
    margin-left: 190px;
    border-color: none transparent;
    background-image: linear-gradient(-90deg, #981ef6, #fe3838);
    height:60px;
    width: 190px;
  }

</style>