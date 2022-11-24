<template>
  <div class="container-fluid" style="background-color:rgb(208, 208, 208)">
          <div class="row" id="a500">
              <div class="col-7" id="column1">
                  <div class="container" id="a1">
                      <h1 class="title">Pagos en Linea</h1>
                      <div class="row">
                        <div class="col">
                          <form>
                              <label id="b2">Nombre</label>
                              <input type="text" class="form-control" id="b2">
                              <br>
                              <label id="b2">Identificacion</label>
                              <input type="text" class="form-control" id="b2">
                              <br>
                              <label id="b2">Numero Telefonico</label>
                              <input type="text" class="form-control" id="b2">
                              <br>
                              <label id="b2">Dirección</label>
                              <input type="text" class="form-control" id="b2">
                              <br>
                              <input type="radio" class="Hotel-Mike-Oscar" id="b2">
                              <label id="b2">Acepta los terminos y Condiciones de Rappi.com.co</label>
                              <br>
                              <label id="b2" style="margin-left:52px">para el tratamiento de datos personales y compras aderidas a estos?</label>
                              <br>
                          </form>
                        </div>
                    </div>
                    <h2 class="title">Escoje Metodo de Pago</h2>
                    <br>
                    <div class="container-fluid" id="b500" style="overflow:hidden;">
                      <img src="../assets/img/R.png" class="img">
                      <img src="../assets/img/Visa.jpg" class="img1">
                      <img src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/wp-cms/uploads/sites/4/2018/04/4-you-might-not-notice-amex-new-brand.jpg" class="img2">
                    </div>
                </div>    
              </div>
              <div class="col-5" id="column2">
                <div class="container" id="a2">
                  <h2 class="text-center">Mi Canasta</h2>
                    <div v-if="numInCart!=0">
                      <div style="overflow-y: scroll; height: 290px">
                      <ul style="padding: 0px">
                        <li v-for="item in inCart" :key="item.id"   style="list-style: none">
                          <div class="cart-items">
                            <h6 class="mt-15">{{item.name}}</h6>
                            <div class="d-flex mt-10">
                              <button id="increment-btn" @click="increment(item)"><i class="fa-solid fa-plus fa-sm"></i></button>
                              <span class="cart-quantity">{{item.quantity}}</span>
                              <button id="decrement-btn" @click="decrement(item)"><i class="fa-solid fa-minus fa-sm"></i></button>
                              <h6 class="mt-15">$ {{subTotal(item.price,item.quantity)}}</h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                        <li style="list-style: none; text-align: right;">
                          <div class="row">
                            <div class="col-6" style="text-align: left">
                              <h5 class="total mt-1">Total</h5>
                            </div>
                            <div class="col-6">
                              <h5 class="total mt-15">$ {{totalPrice}}</h5>
                            </div>               
                          </div> 
                          <div class="row">
                            <div class="col" style="text-align: center">
                            <button id="trash-btn" @click="deleteCart"> Vaciar Canasta <i class="fa-solid fa-trash-can fa-lg"></i></button>
                          </div>
                        </div>
                        </li>
                    </div>
                    <div v-else>
                      <ul style="padding: 0px; margin-top:50px">
                        <li style="list-style: none; text-align: center; height: 100%;">
                          <h2 class="mt-10"><i class="fa-sharp fa-solid fa-cart-plus"></i></h2>
                          <h6 class="mt-15"> Aún no tienes productos en tu canasta</h6>
                          <router-link id="close-btn" to="/tiendas" class="btn mt-15"> Comenzar a comprar</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="container" id="a3">
                      <h2 class="title">Datos de Facturación</h2>
                      <form class="d-block">
                          <label id="b2">Numero de Tarjeta</label>
                          <input type="text" class="form-control" id="b2">

                          <label id="b2">Titular de la tarjeta</label>
                          <input type="text" class="form-control" id="b2">
                          
                          <label id="b2">Codigo CVS</label>
                          <input type="text" class="form-control" id="b2">
                          
                          <label id="b2">Fecha de Expedición</label>
                          <input type="text" class="form-control" id="b2" placeholder="MM/AA">
                          <br>
                      </form>
                      <div class="d-block container text-center">
                      <button id="trash-btn1" href="#/pagos" class="mt-15">Pagar<i class="boton"></i></button>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  <Compfooter></Compfooter>

</template>
<script>
import Compfooter from '@/components/shared/Compfooter.vue'
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      isCartOpen: false,
      email: '',
    }
  },
  computed: {
    inCart() {
      return this.$store.state.cart.inCart;
    },
    ...mapGetters('cart',{
      numInCart: 'numInCart',
      totalPrice: 'totalPrice'
    })
  },
  methods: {
    subTotal(price,quantity){
      return (price * quantity).toFixed(3)
    },
    deleteCart(){
      this.$store.dispatch('cart/deleteCart',this.email)
    },
    increment(item){
      console.log(item)
      this.$store.dispatch('cart/incrementQuantity',{product: item, email:this.email})
    },
    decrement(item){
      console.log(item)
      this.$store.dispatch('cart/decrementQuantity',{product: item, email:this.email})
    }
  },
  beforeMount(){
    const { info } = this.$store.state.user.user
    let email = info.email
    this.email = email
    console.log(this.email)
    // this.$store.dispatch('cart/userCart',email)
  }
}
</script>

<style scoped>
.idk{
  height:100px
}
#a500{
  height: 880px;
}

#increment-btn{
  margin-right: 10px;
}
#decrement-btn{
  margin-left: 10px;
  margin-right: 10px;
}
  .img{
      width: 180px;
      height: 100px;
      margin-right: 20px;
      margin-bottom: 20px;
  }
  .img1{
      width: 150px;
      height: 100px;
      margin-right: 20px;
      margin-bottom: 20px;
  }
  .img2{
      width: 150px;
      height: 100px;
      margin-right: 20px;
      margin-bottom: 20px;
  }
  .title {
      margin-top: 10px;
      padding-top:10px;
      padding-bottom:10px;
      padding-left:30px;
  }
  .form-control {
      width: 360px;
      height: 30px

  }
  #column1 {
      padding-top: 30px;
      padding-left:50px;
  }
  #column2 {
      padding-top: 30px;
      padding-right:40px;
  }
  #a1 {
      margin-right: 30px;
      background-color: white;
      border-radius: 20px;
      height: 800px;
  }
  #a2 {
      background-color: white;
      height: 430px;
      border-radius: 20px;
      margin-top: 10px
  }
  #a3{
      background-color: white;
      height: 360px;
      border-radius: 20px;
  }
  #b2{
      margin-left: 20px;
      font-size: 12px;
      color: black;
  }
  #trash-btn1 {
      font-size: 20px;
      margin-right: 20px;
      height: 40px;
  }
  .btn {
      font-size: 20px;
      background: #981ef6;
      color:white;
      margin-top:10px;
      height: 40px;
  }
  .btn:hover {
      font-size: 20px;
      background: #981ef6;
      color:white;
      margin-top:10px;
      height: 40px;
  }
  #trash-btn {
      font-size: 20px;
      margin-top:0px;
      
      height: 40px;
  }
  
  button{
    border-left: 1px solid #e8e8e8;
    background: #981ef6;
    border: 1px solid #981ef6;
    color:#fff!important;
    border-radius: 7px;
    padding-bottom: 1px;
    cursor: pointer;
    font-weight: 500;
    height: 30px;
    }
  
</style>