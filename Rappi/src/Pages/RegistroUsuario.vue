<template>
    <div class="align-items-center">
    <div class="container-fluid" id="maincontainer">
      <div class="row">
        <div class="colum col-6">
          <img src="https://delleastudio.files.wordpress.com/2021/06/food3785-2.jpg" class="mainimg">
        </div>
        <div class="colum col-6" id="z1">
          <div class="section">
            <h2 class="title">Registrate</h2>
            <form @submit.prevent="register">
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Nombre</label>
                <input type="text" id="input" class="form-control form-control-lg" v-model="register_form.name" required/>
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Numero Celular</label>
                <input type="text" id="input" class="form-control form-control-lg" v-model="register_form.phone" required>                   
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Dirección</label>
                <input type="text" id="input" class="form-control form-control-lg" v-model="register_form.location" required/>           
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Email</label>
                <input type="email" id="input" class="form-control form-control-lg" v-model="register_form.email" required/>                   
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Contraseña</label>
                <input type="password" id="input" class="form-control form-control-lg" v-model="register_form.password" required />                   
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Confirma Contraseña</label>
                <input type="password" id="input" class="form-control form-control-lg" v-model="register_form.password2" required />                   
              </div>
              <div class="d-flex">
                <input type="radio" class="Hotel-Mike-Oscar" id="b2">
                <label id="b2">Acepta los terminos y Condiciones?</label>
              </div>
              <div>
                <button type="submit" value="register" class="Boton">Registrame</button>
              </div>
              <p class="text-center text-muted mt-5 mb-0">Ya tienes una cuenta? <a href="#/inicioUsuario" class="fw-bold text-body"><u>Inicia Sesion Aqui!</u></a></p>
            </form>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <Compfooter></Compfooter>
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
        if(register_form.value["password"] != register_form.value["password2"]){
          alert("La contraseña no coincide")
        }else{
          store.dispatch('register',register_form.value);
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
  height: 1000px;
  width: 800px;
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
#maincontainer {
  padding:0px;
}

.Boton {
  color: white;
  font-size: 20px;
  border-radius: 8px;
  border:0px;
  margin-top: 10px;
  border-color: none transparent;
  background-image: linear-gradient(-90deg, #981ef6, #fe3838);
  height:60px;
  width: 150px;
}

</style>