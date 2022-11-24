<template>
    <div class="menu-bar">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style="font-size: 25px; margin: 5px; color: #fff!important; font-weight: bold;">
                Rappi
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li class="nav-item">
                            <router-link to="/tiendas" class="nav-link" aria-current="page">Tiendas</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page"></router-link>
                        </li>
                    </ul>
                    <form class="d-flex input-group ml-auto">
                        <input
                            type="search"
                            class="form-control rounded"
                            placeholder="Buscar en Rappi"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                    </form>
                    <ul class="navbar-nav d-flex flex-row me-1" v-if="$store.state.user.user || Object.keys($store.state.shop.shop).length != 0">
                        <li class="nav-item me-3 me-lg-0">
                            <div class="dropdown">
                                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-user"></i> Detalles
                                </button>
                                <ul class="dropdown-menu">
                                    <li v-if="Object.keys($store.state.shop.shop).length != 0"  @click="unLogShop"><a class="dropdown-item" href="#/inicioTienda">Cerrar Sesion</a></li>
                                    <li  v-else @click="unLog"><a class="dropdown-item" href="#/inicioTienda">Cerrar Sesion</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item-cart" style=" height: 40px; text-align: center; margin: 1%;">
                            <Cart></Cart>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex flex-row me-1" v-else>
                        <li>
                            <div class="dropdown">
                                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                                    <i class="fa-solid fa-user"></i> Inicia Sesion
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#/inicioUsuario">Usuarios</a></li>
                                    <li><a class="dropdown-item" href="#/inicioTienda">Tiendas</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item me-3 me-lg-0">
                            <a class="nav-link" href="#/inicioUsuario"><i class="fas fa-shopping-cart"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <router-view></router-view>
</template>


<script>
import Cart from '@/components/tienda/ShoppingCart.vue'
export default {

    components: {
        Cart
    },
    name: 'code',
    methods:{
    unLog(){
        // const { info } = this.$store.state.user.user
        // console.log(info)
        // let email = info.email
        // this.$store.dispatch('cart/deleteCart',email)
        this.$store.dispatch('logout');
    },
    unLogShop(){
        this.$store.dispatch('shop/logout')
    }
    },
}
</script>
<style scoped>
    .dropdown-toggle{
        margin-top: 8px;
        color:white;
    }
    .dropdown-menu{
        right:100px;

    }

    .dropdown-item:active{
        color:white;
        background-color: #981ef6;

    }
 
    .dropdown-toggle:hover{
        margin-top: 8px;
        color:white;
        border:none
    }
    .btn{
        border:none
    }
    i{
        font-size: 13px;
    }
    .menu-bar {
        background-image: linear-gradient(-90deg, #981ef6, #fe3838);
    }
    .navbar-brand{
        padding-right: 10px;
    }
    .nav-link{
        font-size: 16px;
        margin: 5px;
        color: #fff!important;
        font-weight:500;

    }
    .navbar-nav {
        text-align: right;
        margin-right: 20px;
    }
    .menu-bar .navbar-toggler {
        padding-right: 20px;
        outline: none!important;
        border: none!important;
    }
    .navbar .fa {
        color:#fff!important;
        font-size: 26px;
    }
    .nav-link:hover{
        font-weight:600;
        border-bottom:1px solid #fff;
    }
    @media only screen and (max-width: 1000px){
        .nav-link:hover{
            border-bottom: none!important;
        }
    }
</style>