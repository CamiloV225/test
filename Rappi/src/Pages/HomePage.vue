<template>
    <div class="container-fluid">
        <div class="container" id="ctext">
            <h1 class="title">Uneté a Rappi</h1>
            <blockquote class="blockquote text-left">
                <p class="mb-0">Accede a millones de usuarios de Rappi en diversos paises y disfruta de una logística inmediata, a un bajo costo y sin salir de tu tienda.</p>
            </blockquote>
            <div class="regBottom">
            <router-link to="/registroTienda" class="nav-link" aria-current="page">Registrate</router-link>
            </div>
        </div>
        <div class="presentation-image">
            <div class="image">
                <img src="@/assets/img/presentation.jpg" class="rounded" alt="presentation">
            </div>
        </div>
    </div>
   
   <HomePage2></HomePage2>
</template>

<script>
import HomePage2 from '@/components/home/HomePage2.vue';

    export default {
        name:'homepagepart2',
        components: {
            HomePage2
        },
        beforeMount(){
        this.$store.dispatch('shop/getShops')
        }
    }

</script>

<style scoped>
    #ctext {
        padding-top: 40px;
        padding-left: 60px;
    }
    .container-fluid{
        display: flex;
    }
    .presentation{
        height: 480px;
        padding: 60px;
    }
    .presentation-image{
        height: 480px;
        padding: 60px;
        padding-left: 100px;
    }
    .title{
        font-size: 80px;
    }
    .blockquote{
        font-size: 20px;
        font-weight: 400;
        width: 490px;
        height: 350px;
        padding-left: 40px;
        top:100px;
        text-align: left;
    }
    .regBottom{
        padding-left: 160px;
    }
    .rounded{
        width: 700px;
        height: 450px;
    }
    a{
        width: 250px;
        color: white;
        font-size: 30px;
        text-align: center;
        background-image: linear-gradient(-90deg, #981ef6, #fe3838);
        margin: 1px;
        border-radius: 24px;
    }


</style>
