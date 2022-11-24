<template>
    <html>
    <div class="container-fluid">
        <div class="row" id="z1">
            <div class="col col-md-3 d-flex" id="A1">
                <div class="container d-block idk1">
                    <div class="representativo text-center">
                        <img class="container-fluid image" :src="shop.img">
                    </div>
                    <h1 class="text-center" id="titulo">{{shop.name}}</h1>
                    <div>
                        
                        <h1 id="texto">Dirección:</h1>
                        <h2 id="sub-texto">{{shop.location}}</h2>
                        <h1 id="texto">Tiempo de Entrega</h1>
                        <h2 id="sub-texto"> {{shop.time}}</h2>
                        <h1 id="texto">Calificación:</h1>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="stars">
                                    <i class="fa-solid fa-star" style="color:rgb(255, 174, 0)"></i>
                                        <span class="fw-bold">
                                            {{shop.star}}
                                        </span>
                                </div>
                            </div>
                        </div>
                        <h1 id="texto">Ubicación: </h1>
                        <iframe
                        class="container-fluid"
                        width="340" 
                        height="300" 
                        style="border-radius:15px" 
                        loading="lazy" 
                        allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ8bNLzPCmMI4RaGGuUum1Dx8&key=AIzaSyA3iUJjx4La4-vStH9ArSDuP8FGmqtATGY">
                        </iframe>
                    </div>
                </div>
            </div>
            <div class="col-9">
                <CardP :products="productShop" class="cardP" name="Menu"></CardP>
            </div>
        </div>
    </div>

    </html>
    <Compfooter></Compfooter>
</template>

<script>
import Compfooter from '@/components/shared/compfooter.vue'
import CardP from '@/components/tienda/CardProducts.vue'

export default {
    data(){
        return {
            shopId:null
        }
    },
    components: {
    Compfooter,
    CardP
    },

    computed: {
        shop(){
            let i = this.$store.state.shop.inShop.findIndex(prod => prod.id == this.shopId)
            return this.$store.state.shop.inShop[i];
        },
        productShop(){
            let i = this.$store.state.shop.inShop.findIndex(prod => prod.id == this.shopId)
            let {products} = this.$store.state.shop.inShop[i];
            return products;
        }
    },
    beforeMount(){
        this.shopId = this.$route.params.id;
        console.log(this.shopId)
    }
}


</script>
<style scoped>
#z1{
    height: 1190px;
}
    html{
        height: 1190px;
    }
    .col{
        max-height: 1800px;
    }
    .mac{
        width: 10px;
        height: 10px;
    }
    .cart {
        background-color: rgb(136, 136, 136);
        border-radius: 20px;
    }
    .cardP {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .mapa{
        height:300px;
        width: 340px;
        border-radius: 20px;
    }
    
    
    #titulo {
        font-size: 35px;
        font-weight: 800;
    }
    #texto{
        font-size: 20px;
        padding-top: 15px;
        font-weight: 800;
    }
    #sub-texto{
        font-size: 15px;
        padding-top: 15px;
    }
    .representativo {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .image {
        max-width: 330px;
        height: 180px;
        border-radius: 4px;
    }
    #A1{
        background-color: rgb(197, 197, 197);
    }
    #A2{
        background-color: rgba(255, 255, 255, 0.747);
    }
    #A3{
        background-color: rgba(0, 30, 255, 0.747);
    }


    div.stars {

    width: 180px;

    display: inline-block;

}

.mt-200{
   margin-top:200px;  
}

input.star { display: none; }



label.star {
float: right;
padding: 8px;

font-size: 15px;

color: #4A148C;

transition: all .2s;

}



input.star:checked ~ label.star:before {

content: '\f005';

color: #FD4;

transition: all .25s;

}


input.star-5:checked ~ label.star:before {

color: #FE7;

text-shadow: 0 0 20px #952;

}



input.star-1:checked ~ label.star:before { color: #F62; }

  

label.star:hover { transform: rotate(-15deg) scale(1.3); }



label.star:before {

content: '\f006';

font-family: FontAwesome;

}

    
    
</style>