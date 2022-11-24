// export const addToShop = (_state, payload) => { 
//     _state.inShop.push(payload)
// }

// export const addProduct = (_state, payload) => { 
//     const index = _state.inShop.findIndex(store => store.id == payload.shop)
//     console.log(_state.inShop[index])
//     _state.inShop[index].products.push(payload);
    
// }
export const clearShop = (_state) => {
    _state.shop = {}
}

export const getShops = (_state,payload) => {
    _state.inShop = payload
}

export const setShop = (_state,payload )  =>  {
    _state.shop = payload
    console.log(_state.shop)
}