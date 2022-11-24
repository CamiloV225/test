export const addToCart = (_state, payload) => {
    console.log(payload)
    // _state.inCart[payload.id] =  payload;
    const index = _state.inCart.findIndex(prod => prod.id == payload.id)
    if (index != -1){
        _state.inCart[index] = payload
    }else{
        _state.inCart.push(payload)
    }

    // ?
    // _state.inCart[i] = payload : _state.inCart.push(payload)
}

export const incrementQuantity = (_state, payload) => {
    const index = _state.inCart.findIndex(prod => prod.id === payload.id)
    _state.inCart[index].quantity = _state.inCart[index].quantity + 1
    // _state.inCart[payload].quantity = _state.inCart[payload].quantity + 1 ; 
}

export const decrementQuantity = (_state, payload) => {
    const index = _state.inCart.findIndex(prod => prod.id === payload.id)
    _state.inCart[index].quantity = _state.inCart[index].quantity - 1;
    if(_state.inCart[index].quantity === 0){
       _state.inCart.splice(index, 1)
    } 
}

export const deleteCart = (_state) => {
    _state.inCart = []
    console.log(_state.inCart )
}         

export const userCart = (_state,payload)  => {
    _state.inCart = payload
}