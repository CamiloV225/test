<template>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-xl-6">
            <div class="container">
              <div class="card-body p-5">
                <h2 class="text-center mb-5">Iniciar Sesión</h2>

                <form @submit.prevent="login">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Email</label>
                    <input type="email" id="email" name="email" class="form-control form-control-lg" v-model="login_form.email"/>
                  </div>

                  <div class="form-outline mb-4" id="botonI">
                    <label class="form-label" for="form3Example3cg">Contraseña</label>
                    <input type="password" id="password" name="password" class="form-control form-control-lg" v-model="login_form.password" />
                  </div>

                  <div class="d-flex justify-content-center">
                    <button type="submit" value="Login" class="Boton">Iniciar Sesion Tienda</button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">Aun no tienes una cuenta? crea una! <a href="#/RegistroTienda" class="fw-bold text-body"><u>Registrate Aqui</u></a></p>

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
import Compfooter from '@/components/shared/Compfooter.vue'
import {useStore} from 'vuex'

export default {
  components: {
    Compfooter
  },
  setup() {
    const login_form = ref({})
    const store = useStore();
    const login = () =>{
      store.dispatch('shop/login',login_form.value);
    }
    return {
      login_form,
      login
    }
  }
}



</script>
<style scoped>
  #botonI {
    padding-top: 30px;
  }
  .Boton {
    color: white;
    font-size: 20px;
    border-radius: 8px;
    border:0px;
    height: 40px;
    background-image: linear-gradient(-90deg, #981ef6, #fe3838);
  }
  div.card-body{
    margin-bottom: 70px;
  }
  .card{
    margin-top: 40px;
  }
</style>