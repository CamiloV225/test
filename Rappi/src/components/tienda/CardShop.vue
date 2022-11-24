<template>
    <div class="container">
        <div class="row">
            <h2 class="header">Tiendas</h2>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 mb-3" v-for="shop in inShop" :key="shop.id">
                <div @mouseover="shop.hover = true" @mouseleave="shop.hover = false" v-bind:class="shop.hover == true? 'card border-0 bg-light mb-2 is-hover':'card border-0 bg-light mb-2'">
                    <div class="shop-inner-box position-relative">
                        <img :src=shop.img class="container-fluid imgCard">
                    </div>
                    <div class="cart-btn">
                        <router-link :to="{ name: 'shop-id', params: {id: shop.id} }"> 
                            <button class="btn btn-white shadow-sm rounded-pill bg-light">
                                <i class="fa-solid fa-store"></i> Go to store 
                            </button>
                        </router-link>
                    </div>
                    <div class="shop-info">
                        <div class=" d-flex">
                            <div class="shop-name">
                                <h3> {{shop.name}} </h3>
                            </div>
                            <div class="shop-star d-flex">
                                <i class="fa-solid fa-star" style="color:rgb(255, 174, 0)"></i>
                                <span class="fw-bold">
                                    {{shop.star}}
                                </span>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="shop-time" style="justify-content: space-between; padding: 0 15px 0;">
                                <i class="fa-regular fa-clock" style="margin-top: 5px"></i> 
                                <span>
                                    {{shop.time}}
                                </span>
                            </div>
                            <div class="shop-price" style="margin-top: 1px">
                                <i class="fa-solid fa-person-biking"></i> 
                                <span>
                                   $ {{shop.delivery}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        inShop(){
            console.log(this.$store.state.shop.inShop)
            return this.$store.state.shop.inShop;
        }
    },
    beforeMount(){
        this.$store.dispatch('shop/getShops')
    }
}
</script>

<style scoped>
    .strcard{
    height:325px
}
    .imgCard{
            height: 200px;
            max-width: 310px;
            border-radius: 15px 15px 0px 0px;
            padding:0px;

        }
    .shop-inner-box img{
        box-shadow: 0 33px 61px -29px rgb(0 0 0 / 26%);
        object-fit: cover;
        display: block;
        overflow-y: auto;
        margin-left: auto;
        margin-right: auto;
    }

    .container{
        position: relative;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        height: 800px;
    }

    .shop-name{
        width: 100%;
        bottom: 130px;
        font-size: 20px;
        letter-spacing: 1px;
    }

    .shop-info{
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .shop-star{
        background: rgb(255, 242, 229);
        border-radius: 8px;
        -webkit-box-align: center;
        align-items: center;
        padding: 4px;
        align-self: auto;
        margin-left: auto;
        height: 50%
    }

    .card:hover{
        box-shadow: -2px -1px 25px -4px rgba(0,0,0,0.75);
        -webkit-box-shadow: -2px -1px 25px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px -1px 25px -4px rgba(0,0,0,0.75);
        cursor: pointer;
        transition:0.5s;
    }

    .cart-btn{
        position: absolute;
        bottom: 150px;
        text-align: center;
        width: 100%;
        opacity: 0;
        transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }

    .card.is-hover .cart-btn{
        opacity: 1;

    }
    .header {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>