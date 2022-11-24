<template>
    <div class="container-fluid">
        <div class="container" id="error">
            <h1 class="text-center" id="texto">Upps, parece que no existe lo que buscas...</h1>
            <h1 class="text-center" id="texto1">Busca otra cosa</h1>

        </div>        
    </div>
    <Compfooter></Compfooter>
</template>
<script>
import Compfooter from '@/components/shared/Compfooter.vue'

export default {
    components: {
        Compfooter,
    }
}
</script>
<style scoped>
    #texto {
        padding-left: 40px;
        padding-top: 140px;
    }
    .container{
        height:600px;
    }
</style>