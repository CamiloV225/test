<template>
    <br>
    <br>
    <br>
    <br>
    <div class="container-fluid" id="separador"></div>
    <div class="container-fluid" id="main">
        <h1 id="title">Expande tus horizontes con Rappi!</h1>
        <div class="row">
            <div class="col" id="a1">
                <div class="container" id="pretexto">
                    <img class="rep" src="@/assets/img/rep.jpg">
                </div>
                
            </div>
            <div class="col" id="a2">
                <div class="container">
                    <h1 class="text-center" id="texto">Con Rappi no tendras que esperar mas por tus pedidos, con la mejor red de repatidores en Colombia, cerca 1.770.000 repartidores por ciudad listos para servirte, no esperes mas y unete a Rappi</h1>
                </div>
            </div>
        </div>
        
    </div>
   <Compfooter></Compfooter>
</template>

<script>
import Compfooter from '@/components/shared/Compfooter.vue'

export default {
    name:'footer',
    components: {
        Compfooter,
    }
}


</script>

<style scoped>
    #title {
        padding-left: 30px;
        padding-top: 40px;
    }
    #main {
        padding-bottom: 70px;
    }
    #texto {
        font-size: 28px;
        padding-right: 90px;
        padding-top: 40px;
    }
    #separador{
        padding: 10px;
        background-color: rgb(205, 205, 205);
    }
    #pretexto {
        padding: 20px;
    }
    .rep {
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 700px;
        height: 500px;
        border-radius: 10px;
    }
    
</style>
