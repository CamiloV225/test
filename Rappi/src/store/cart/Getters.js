
export const numInCart = (_state) => {
    let numInCart = Object.values(_state.inCart).reduce((acc,{quantity}) => acc + quantity, 0);
    if (numInCart == 0) {
        numInCart = ''
    }
    return numInCart; 
}


export const totalPrice = (_state) =>{
    let totalPrice = Object.values(_state.inCart).reduce((acc,{quantity, price}) => acc + quantity*price, 0);
    return totalPrice.toFixed(3);
}