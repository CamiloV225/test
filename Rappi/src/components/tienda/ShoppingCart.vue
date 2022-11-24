<template>
  <button class="btn btn-primary navbar-btn" @click="showCart">
    <i class="fa fa-shopping-cart"></i>
    <span>{{numInCart}}</span>
  </button>
  <div id="cart-sidebar" class="cart-sidebar" :class="{ show: isCartOpen }">
    <div class="cart-header-padding">
      <div class="cart-header">
        <i>
          <h4 class="title">Tu Canasta</h4>
          <h5 style="font-size: 16px; font-weight: 700;text-align:left;"><i class="fa-sharp fa-solid fa-location-dot"></i>{{location}}</h5>
        </i>
        <div class="cart-body">
          <div class="d-flex">
            <div class="row" >
              <div class="col col-lg-12">
                <ul v-if="numInCart!=0" style="padding: 0">
                  <li v-for="item in inCart" :key="item.id"   style="list-style: none">
                    <div class="cart-items">
                      <h6 class="mt-15">{{item.name}}</h6>
                      <div class="d-flex mt-10">
                        <button id="decrement-btn" @click="decrement(item)"><i class="fa-solid fa-minus fa-sm"></i></button>
                        <span class="cart-quantity">{{item.quantity}}</span>
                        <button id="increment-btn" @click="increment(item)"><i class="fa-solid fa-plus fa-sm"></i></button>
                      </div>
                      <h6 class="mt-15">$ {{subTotal(item.price,item.quantity)}}</h6>
                    </div>
                    <div class="line"></div>
                  </li>
                  <li style="list-style: none; text-align: right;">
                    <div class="cart-total">
                      <h5 class="total mt-15">Total</h5>
                      <h5 class="total mt-15">$ {{totalPrice}}</h5>
                    </div>
                    <button id="trash-btn" @click="deleteCart"> Vaciar Canasta <i class="fa-solid fa-trash-can fa-lg"></i></button>
                    <router-link id="paybuton" to="/pagos" class="boton" @click="hideCart" style="margin-left: 10px">Ir a Pagar <i class="fa-sharp fa-solid fa-bag-shopping"></i></router-link>
                  </li>
                </ul>
                <ul v-else>
                  <li style="list-style: none; text-align: center; height: 100%;">
                    <h2 class="mt-10"><i class="fa-sharp fa-solid fa-cart-plus"></i></h2>
                    <h6 class="mt-15"> Aún no tienes productos en tu canasta</h6>
                    <router-link id="close-btn" to="/tiendas" class="boton" @click="hideCart"> Comenzar a comprar</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style="text-align:left"> 
          <button id="close-btn" @click="hideCart">
            <i class="fa-solid fa-xmark fa-xl"></i>
          </button>
        </div> 
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  data(){
    return {
      isCartOpen: false,
      location: '',
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
    showCart(){
      this.isCartOpen = true;
      const { info } = this.$store.state.user.user
      let email = info.email
      this.location = info.address
      this.email = email
      this.$store.dispatch('cart/userCart',email)
    },
    hideCart(){
      this.isCartOpen = false;
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
}
</script>
<style scoped>
    #paybuton{
      height: 9000px;
      background-image: linear-gradient(-90deg, #981ef6, #fe3838);
      border-radius: 7px;
      font-weight: 500;
      color:white;
    }
    .fa{
      margin-right:5px;
    }
    .row {
      width: 470px;
    }
    .line{
      height: 1px;
      border-bottom: 1px solid #981ef6;
    }
    .cart-quantity{
      display: inline-block;
      padding: 3px 6px;
      width: 46px;
      height: 28px;
      border-radius: 2px;
      background-color:#fff;
      margin:0 5px;
      text-align:center;
    }
    .cart-total{
      display: flex;
      justify-content: space-between;
      padding: 0 30px 20px;
    }
    .cart-items {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      background: #ffffff;
      
    }
    .mt-10{
      margin-top: 10px;
    }
    .mt-15{
      margin-top: 15px;
    }
  .cart-header-padding {
    padding-left: 30px;
    padding-right: 30px;
    }
    .total{
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
    }
    .cart-sidebar {
      height: 100%;
      width: 485px;
      background-color: white;
      position: fixed;
      top: 0;
      right: -100%;
      box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.1);
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      transition:  0.4s;
      z-index: 100;
      }
    .cart-sidebar.show {
      right: 0;
    }
    .title {
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 700;
      text-align:left;
      
    }
    #trash-btn1{
      border-left: 1px solid #e8e8e8;
      background-image: linear-gradient(-90deg, #981ef6, #fe3838);
      border: 1px solid #d38312;
      color:#fff!important;
      border-radius: 7px;
      padding-bottom: 1px;
      cursor: pointer;
      font-weight: 500;
      height: 90px;
      }

    #close-btn{
      border: 0px solid #e8e8e8;
      background-image: linear-gradient(-90deg, #981ef6, #fe3838);
      color:#fff!important;
      border-radius: 7px;
      padding-bottom: 0px;
      cursor: pointer;
      font-weight: 500;
      height: 30px;
      }
    button{
      border-left: 1px solid #e8e8e8;
      background-image: linear-gradient(-90deg, #981ef6, #fe3838);
      border: 1px solid #d38312;
      color:#fff!important;
      border-radius: 7px;
      padding-bottom: 1px;
      cursor: pointer;
      font-weight: 500;
      height: 30px;
      }

    .navbar-btn{
      border: none;
      background: none;
      border-radius:0%;
      padding-bottom: none;
      margin: 5px;
    }
    .navbar-btn:hover{
      background: none;
    }
</style>