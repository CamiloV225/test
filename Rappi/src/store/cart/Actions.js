import { rappiApi } from '../../api/rappiApi';

export async function addToCart (context, payload ){
    const {product,email} = payload
    delete product.hover
    try {
        const api = await rappiApi.post('/api/auth/add',{email:email,product:product})
        if (api.status == 200){
            const index = context.state.inCart.findIndex(prod => prod.id == product.id)
            if(index != -1) {
                product.quantity = context.state.inCart[index].quantity + 1
            }else{
                product.quantity = 1
            }
            context.commit('addToCart',product);
        } 
    } catch (err) {
        console.log(err)
    }  
}

export async function deleteCart (context,email){
    console.log(email)
    try {
        const api = await rappiApi.post('/api/auth/del',{email:email})
        if (api.status == 200){
            context.commit('deleteCart')
        } 
    } catch (err) {
        console.log(err)
    }

}

export async function incrementQuantity (context,payload) {
    const { product } = payload
    try {
        const api = await rappiApi.post('/api/auth/inc',payload)
        if (api.status == 200){
            context.commit('incrementQuantity', product)
        } 
    } catch (err) {
        console.log(err)
    }

}

export async function decrementQuantity (context,payload){
    const { product } = payload
    console.log(product)
    try {
        const api = await rappiApi.post('/api/auth/dec',payload)
        if (api.status == 200){
            context.commit('decrementQuantity', product)
        } 
    } catch (err) {
        console.log(err)
    }

}


export async function userCart (context, email) {
    try {
        const api = await rappiApi.post('/api/auth/cart',{email:email})
        if (api.status == 200){
            const { data } = api
            console.log(data)
            context.commit('userCart',data.inCart)
        } 
    } catch (err) {
        console.log(err)
    }
}




