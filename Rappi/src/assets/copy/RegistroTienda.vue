<template>
  <section class="bg image" style="background-color: grey;">
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container-fluid h-100" id="maincontainer">
        <div class="row d-flex">
          <div class="col-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Ingresa los datos de tu tienda</h2>
                <form>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Nombre de la tienda</label>
                    <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  </div>
  
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Direccion de la Tienda</label>
                    <input type="text" id="form3Example1cg" class="form-control form-control-lg" />           
                  </div>
  
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">NIT<i>(Opcional)</i></label>
                    <input type="text" id="form3Example1cg" class="form-control form-control-lg"/>                    
                  </div>
  
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Numero de Identificacion</label>
                    <input type="text" id="form3Example1cg" class="form-control form-control-lg"/>                   
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Email de la tienda</label>
                    <input type="email" id="form3Example1cg" class="form-control form-control-lg" />                   
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3cg">Contraseña</label>
                    <input type="password" id="form3Example1cg" class="form-control form-control-lg" />                   
                  </div>
                <div class="d-flex">
                          <input type="radio" class="Hotel-Mike-Oscar" id="b2">
                          <label id="b2">Acepta los terminos y Condiciones?</label>
                </div>
  
                </form>
              </div>
            </div>
          </div>
          <div class="col-6">
                <div class="card" style="border-radius: 15px;">
                    <div class="card-body p-5">
                        <h2 class="text-uppercase text-center mb-5">Mis Productos</h2>
                        <div class="row">
                          <div class="col">
                            <label class="form-label" for="form3Example3cg">Nombre del Producto</label>
                            <input type="text" id="form3Example1cg" class="form-control form-control-lg"/>
                            <br>
                            <label class="form-label" for="form3Example3cg">Descripción</label>
                            <input type="text" id="form3Example1cg" class="form-control form-control-lg"/>
                          </div>
                          <div class="col">
                            <label class="form-label" for="form3Example3cg">Precio</label>
                            <input type="text" id="form3Example1cg" class="form-control form-control-lg"/>
                            <br>
                            <div class="uploader">
                              <span class="btn btn-default btn-file center-block" onclick="$('#filePhoto').click()">Upload an Image … <input type="file" name="userprofile_picture" id="filePhoto" />
                              </span>
                              <br>
                              <img id="myImg" src="" />
                            </div>
                          </div>
                        </div>
                        <div class="registroButtom text-center">
                          <button class="text-center" id="p01">Agregar</button>
                        </div>
                    </div>
                </div>
                <div class="card" id="condiciones" style="border-radius: 15px;">
                        <div class="card-body p-5">
                            <div>
                              <input type="radio" class="Hotel-Mike-Oscar" id="b2">
                              <label id="b2">Acepta los terminos y Condiciones?</label>
                            </div> 
                            <div class="container text-center" id="P01">
                            <button>Agregar</button>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  </template>
  <script>
  export default {
      data() {
        Email: ''
        contraseña: ''
      }
  }
  </script>
  <style scoped>
    #P01{
      margin-top: 30px;
    }
    #condiciones {
        margin-top: 20px;
    }
    #maincontainer {
      padding-top: 50px;
    }
    .Boton {
      color: white;
      font-size: 20px;
      border-radius: 8px;
      border-color: #981ef6 transparent;
      background-image: linear-gradient(-90deg, #981ef6, #fe3838);
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