<template>
  
  <NavBar></NavBar>

</template>


<script>
import HomePage from '@/pages/HomePage.vue'
import Tienda from '@/pages/Tienda.vue';
import Tiendas from '@/pages/Tiendas.vue';
import DashboardVendedor from '@/pages/DashboardVendedor.vue';
import RegistroTienda from '@/pages/RegistroTienda.vue';
import RegistroUsuario from '@/pages/RegistroUsuario.vue';
import NavBar from '@/components/shared/NavBar.vue';
import InicioUsuario from '@/Pages/InicioUsuario.vue';
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';


export default {
  name:'App',
  components: {
    HomePage,
    Tienda,
    Tiendas,
    DashboardVendedor,
    RegistroTienda,
    RegistroUsuario,
    NavBar,
    InicioUsuario
  },
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
  
}
</script>

<style scoped>
  
</style>