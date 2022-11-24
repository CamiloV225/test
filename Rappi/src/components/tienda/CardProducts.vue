<template>
    <div class="container">
        <div class="row" id="z1">
            <h2>{{name}}</h2>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 mb-3" v-for="(product,i) in products" :key = i>
                <div class="anubis" @mouseover="product.hover = true" @mouseleave="product.hover = false" v-bind:class="product.hover == true? 'card border-0 bg-light mb-2 is-hover':'card border-0 bg-light mb-2'">
                    <div class="product-inner-box position-relative">
                        <img :src=product.img class="container-fluid imgCard">
                        <div class="cart-btn">
                            <button class="btn btn-white shadow-sm rounded-pill bg-light" @click="addToCart(payload = {product:products[i],email:email}),product.hover = true"><i class="fa-solid fa-circle-plus"></i> Add to Cart</button>
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-name">
                            <h3 class="titulo"> {{product.name}} </h3>
                        </div>
                        <div class="product-description">
                            <p class="Descripcion"> {{product.description}}</p>
                        </div>
                        <div class="product-price">
                            <span class="fw-bold float-end"> ${{product.price}} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return {
            email:''
        }
    },
    props: ['products','name'],
    methods: {
        ...mapActions('cart',{
            addToCart: 'addToCart'
        })
    },
    beforeMount(){
        this.email = this.$store.state.user.user.info.email
        console.log(this.email)
    }
}
</script>

<style scoped>
.titulo{
    font-size: auto;
    overflow: hidden;
    height: 70px;
    }

    .imgCard{
        height: 280px;
        max-width: 267px;
        border-radius: 15px 15px 0px 0px;
        margin:0px;
        padding:0px !important;

    }
    .anubis{

        height:530px;
    }

    .product-description{
        height:125px;
        margin-top:10px;
        overflow:hidden;
    }
    .product-inner-box img{
        box-shadow: 0 33px 61px -29px rgb(0 0 0 / 26%);
        object-fit: cover;
        display: block;
        overflow-y: auto;
        margin-left: auto;
        margin-right: auto;
    }

    .cart-btn{
        position: absolute;
        bottom: 20px;
        text-align: center;
        width: 100%;
        opacity: 0;
        transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }

    .card.is-hover .cart-btn{
        opacity: 1;

    }

    .container{
        position: relative;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .product-name{
        width: 100%;
        height: 60px;
        font-size: 5px;
        letter-spacing: 1px;
    }

    .product-price{
        bottom: 80px;
        font-weight: 300;
        padding-top: 10px;
    }

    .product-info{
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
    html{
        max-height: 100%;
    }

</style>