import { rappiApi } from '../../api/rappiApi';
import router from "@/router";

// export const addToShop = (context,shop) => {
//     console.log(shop)
//     const index = context.state.inShop.findIndex(store => store.id == shop.id)
//     if (index == -1){
//         context.commit('addToShop',shop);
//     }    
// }

export async function updProduct (context, payload){
    console.log(payload)
    const {name} = payload.shop
    try {
        const api = await rappiApi.post('/api/shop/updp',payload)
        if (api.status == 200){
            const api = await rappiApi.post('/api/shop/user',{name:name})
            if (api.status == 200){
                const { data } = api
                console.log(data)
                context.commit('setShop',data.inShop)
            } 
        }
    } catch (err) {
        console.log(err.message)
        alert(err.message)
    }
}

export async function updShop (context, payload){
    const {name} = payload.shop
    try {
        const api = await rappiApi.post('/api/shop/upds',payload)
        if (api.status == 200){
            const api = await rappiApi.post('/api/shop/user',{name:name})
            if (api.status == 200){
                const { data } = api
                console.log(data)
                context.commit('setShop',data.inShop)
            } 
        }
    } catch (err) {
        console.log(err.message)
        alert(err.message)
    }
}

export async function delProduct (context, payload){
    console.log(payload)
    const {name} = payload.shop
    try {
        const api = await rappiApi.post('/api/shop/delp',payload)
        if (api.status == 200){
            const api = await rappiApi.post('/api/shop/user',{name:name})
            if (api.status == 200){
                const { data } = api
                console.log(data)
                context.commit('setShop',data.inShop)
            } 
        }
    } catch (err) {
        console.log(err.message)
        alert(err.message)
    }
}

export async function delShop(context, payload){
    try {
        const api = await rappiApi.post('/api/shop/dels',payload)
        if (api.status == 200){
            context.commit('clearShop')
            router.push('/InicioUsuario')
        }
    } catch (err) {
        console.log(err.message)
        alert(err.message)
    }
}

export async function addProduct (context, payload){
    const {name} = payload
    try {
        const api = await rappiApi.post('/api/shop/add',payload)
        if (api.status == 200){
            const api = await rappiApi.post('/api/shop/user',{name:name})
            if (api.status == 200){
                const { data } = api
                console.log(data)
                context.commit('setShop',data.inShop)
            } 
        }
    } catch (err) {
        console.log(err.message)
    }
    // const index = context.state.inShop.findIndex(store => store.id == product.shop)
    // console.log(index)
    // if (index != -1){
    //     const item = context.state.inShop[index].products.find(prod => prod.id == product.id)
    //     if (!item){
    //         context.commit('addProduct',product);
    //     }
    // }    
}


export async function logout ({commit}){
    commit('clearShop')
    router.push('/InicioUsuario')
  }
  


export async function getShops(context){
    const api = await rappiApi.get('/api/shop/')
    if (api.status == 200){
        const { inShop } = api.data
        inShop.forEach(shop => {
            shop.hover = false;
            shop.products.forEach(product => {
                product.hover = false
            })
        })
        context.commit('getShops',inShop)
    } 
}

export async function register(context,payload){
    try{
        const api = await rappiApi.post('/api/shop/new',payload)
        if (api.status == 200){
            const { shop } = api.data
            context.commit('setShop',shop)
            router.push({name: 'shop', params:{id: shop.id}})
        } 
    } catch(err){
        console.log(err)
        alert('El correo o el nombre de la tienda ya estan registrados')
    }
}

export async function login(context, details){
    const {email,password} = details
    try{
        const api = await rappiApi.post('/api/shop/login',{email:email, password:password})
        if (api.status == 200){
            const { shop } = api.data
            context.commit('setShop',shop)
            router.push({name: 'shop', params:{id: shop.id}})
        } 
    } catch(err){
        console.log(err)
        alert('La tienda no existe o password no valido')
    }
}

export async function userShop (context, name) {
    try {
        const api = await rappiApi.post('/api/shop/user',{name:name})
        if (api.status == 200){
            const { data } = api
            console.log(data)
            context.commit('setShop',data.inShop)
        } 
    } catch (err) {
        console.log(err)
    }
}