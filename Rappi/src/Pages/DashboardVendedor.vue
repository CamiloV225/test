<template>
    <div class="container-fluid">
        <div class="vh-100 row">
            <div class="col col-lg-3 d-flex" id="A1">
                <div class="container d-block idk1">
                    <div class="representativo container-fluid text-center">
                        <img class="image" :src=shop.img>
                    </div>
                    <h1 class="text-center" id="titulo">{{shop.name}}</h1>
                    <h1 id="sub-texto" class="text-center">{{shop.description}}
                    </h1>
                    <h1 id="texto">Precio Domicilio</h1>
                    <h1 id="sub-texto" class="text-center">
                        <span class="fw-bold">${{shop.delivery}}</span>
                        <i class="fa-solid fa-person-biking"></i>
                    </h1>
                    <h1 id="texto">Tiempo de entrega</h1>
                    <h1 id="sub-texto" class="text-center">
                        <i class="fa-regular fa-clock" style="margin-top: 5px"></i> 
                        <span class="fw-bold">{{shop.time}}</span>
                    </h1>
                    <br>
                    <h1 id="texto">Resumen de Calificaciónes</h1>
                    <h1 id="sub-texto" class="text-center"> 
                        <i class="fa-solid fa-star" style="color:rgb(255, 174, 0)"></i>                      
                        <span class="fw-bold">{{shop.star}}</span>
                    </h1>
                    <div class="d-flex mt-10">
                        <button @click="editTienda = true"   class="butons">Domicilios</button>
                        <div v-show="editTienda == true" class="row" id="edit">
                            <div class="card bg-light mb-3 text-center">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="form-label" for="form3Example3cg">Tiempo de entrega</label>
                                            <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="time"/>
                                        </div>
                                        <div class="col-6">
                                            <label class="form-label" for="form3Example3cg">Precio Domicilio</label>
                                            <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="delivery" />
                                        </div>
                                    </div>
                                    <br>
                                    <button @click="editTienda = false, editShop()" class="butons">Editar</button>
                                </div>
                            </div>
                        </div>
                        <button @click="deleteShop()" class="butons">Eliminar Tienda</button>
                    </div>
                </div>
            </div>
            <div class="col" id="A2">
                <div class="container" id="informacion">
                    <div class="container">
                        <div class="row">
                            <div class="colum col-6">
                                <div class="section" >
                                    <div class="section2">
                                        <h2 class="Titulo2">Mis Productos</h2>
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="form-label" for="form3Example3cg">Nombre del Producto</label>
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="product.name"/>
                                                <br>
                                                <label class="form-label" for="form3Example3cg">Descripción</label>
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg"  v-model="product.description"/>
                                            </div>
                                            <div class="col-6">
                                                <label class="form-label" for="form3Example3cg">Precio</label>
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="product.price"/>
                                                <br>
                                                <div class="uploader">
                                                    <label class="form-label" for="form3Example3cg">Link Imagen del Producto</label>
                                                    <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="product.img"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="registroButtom text-center">
                                            <button class="boton" @click="newProduct()"> Agregar Producto </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="container productItems" style="overflow-y: scroll;">
                                    <div class="row" >
                                        <ul v-for="(product,i) in products" :key="product.id">
                                            <li style="list-style: none">
                                                <h6 class="mt-15">{{product.name}}</h6>
                                                <p>{{product.description}}</p>
                                                <p>${{product.price}}</p>
                                                <div class="d-flex mt-10">
                                                    <button @click="editProducto = true, productEdit = products[i]" class="butons">Editar</button>
                                                    <div v-show="editProducto == true" class="row" id="edit">
                                                        <div class="card bg-light mb-3 text-center">
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-6">
                                                                        <h6 class="mt-15" style="font-size: 23px;font-weight: bold;">{{productEdit.name}}</h6>
                                                                        <br>
                                                                        <br>
                                                                        <label class="form-label" for="form3Example3cg">Precio</label>
                                                                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="updatePrice"/>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <label class="form-label" for="form3Example3cg">Descripción</label>
                                                                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="updateDesc"/>
                                                                        <br>
                                                                        <label class="form-label" for="form3Example3cg">Link de la Imagen</label>
                                                                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="updateImg"/>
                                                                    </div>
                                                                </div>
                                                                <br>
                                                                <button @click="editProducto = false,editProduct()" class="butons">Editar Producto</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button @click="deleteProduct(products[i])" class="butons">Eliminar</button>
                                                </div>
                                                <div class="line"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Compfooter></Compfooter>
</template>

<script>
import Compfooter from '@/components/shared/Compfooter.vue'
  export default {
    data(){
        return {
            shop:null,
            editTienda: false,
            editProducto: false,
            delivery: "",
            time: "",
            updatePrice: "",
            updateImg: "",
            updateDesc:"",
            product: {},
            productEdit: {}
        }
    },
    components: {
        Compfooter
    },
    computed: {
        products(){
            return this.$store.state.shop.shop.products
        },
        shop(){
            return this.$store.state.shop.shop
        }
    
    },
    methods: {
        newProduct(){
            let payload = {
                name: this.shop.name,
                product: this.product
            }
            this.$store.dispatch('shop/addProduct',payload);
            this.product = {}
        },
        editProduct(){
            let payload ={
                shop: this.shop,
                product: this.productEdit,
                price: this.updatePrice,
                img: this.updateImg,
                description: this.updateDesc
            }
            this.$store.dispatch('shop/updProduct',payload);
            this.productEdit = ""
            this.updatePrice = ""
            this.updateDesc = ""
        },
        deleteProduct(product){
            console.log(product)
            let payload ={
                shop: this.shop,
                product: product,
            }
            this.$store.dispatch('shop/delProduct',payload);
        },
        editShop(){
            let payload = {
                shop: this.shop,
                delivery:this.delivery,
                time: this.time
            }
            this.$store.dispatch('shop/updShop',payload);
            this.delivery = ''
            this.time = ''
        },
        deleteShop(){
            this.$store.dispatch('shop/delShop',{shop: this.shop});
        }

    },beforeMount(){
        this.shop = this.$store.state.shop.shop
        console.log(this.shop)
    }

}



  
</script>
<style scoped>
#edit{
    position:absolute;
    z-index:1;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
}
.line{
      height: 3px;
      border-bottom: 1px solid #981ef6;
      margin-top: 5%;
    }
.productItems{
    border: 1px solid rgb(160, 160, 160);
    border-radius: 15px;
    margin-top: 20px;
    margin-right: 70px;
    padding-left: 50px;
    width: 350px;
    height: 500px;
}
#columna{
    margin-left:100px;
}
.butons{
    color: white;
    font-size: 16px;
    border-radius: 8px;
    border:0px;
    border-color: none transparent;
    background-image: linear-gradient(-90deg, #981ef6, #fe3838);
    height: 30px;
    width: 160px;
    margin-left: 2%;
}
.boton {
    color: white;
    font-size: 20px;
    border-radius: 8px;
    border:0px;
    margin-top: 20px;
    border-color: none transparent;
    background-image: linear-gradient(-90deg, #981ef6, #fe3838);
    height:60px;
    width: 190px;
  }
.Titulo2{
    font-size: 30px;
}
.section2{
    margin-top:30px;
}

    
#titulo {
        font-size: 35px;
        font-weight: 800;
    }
    #title{
        margin-top: 20px;
        font-size: 30px;
        font-weight: 600;
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
    #Info{
        font-size: 20px;
        padding-left: 40px
    }
    .representativo {
        padding-left:0px;
        padding-right:0px;
        padding-top: 10px;
    }
    .image {
        width: 200px;
        height: 200px;
        text-align: center;
    }
    #A1{
        background-color: rgb(206, 206, 206);
    }
    #A2{
        background-color: rgb(255, 255, 255);
        padding-left: 0px;
        padding-right:0px;
    }
    #A3{
        background-color: rgba(0, 30, 255, 0.747);
    }
    .navbar .fa {
        color:#fff!important;
        font-size: 26px;
    }
    h1{
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 10px;
    }
    .mt-15{
      margin-top: 15px;
    }

</style>