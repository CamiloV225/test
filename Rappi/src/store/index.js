import { createStore } from "vuex";
import cartStore from './cart';
import shopStore from './shop'
import userStore from './user';


export default createStore({
    modules:{
        cart: cartStore,
        shop: shopStore,
        user: userStore

    }
})
