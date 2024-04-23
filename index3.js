import {createStore} from 'redux';
import {combineReducers} from 'redux';

// constants
const GET_PRODUCTS='GET_PRODUCTS'
const ADD_PRODUCTS='ADD_PRODUCTS'
const GET_CART='GET_CART'
const ADD_CART='ADD_CART'

// product initital state
const initialProductState={
    products:['pen','book'],
    totalProduct:2
}
// Cart initital state
const initialCartState={
    cart:['pen'],
    totalCart:1
}

// Action 
const getProduct=()=>{
    return{
        type:GET_PRODUCTS
    }
}
const addProduct=(product)=>{
    return{
        type:ADD_PRODUCTS,
        payload:product
    }
}

const getCart=()=>{
    return{
        type:GET_CART
    }
}
const addCart=(product)=>{
    return{
        type:ADD_CART,
        payload:product
    }
}


// Reducer
const productReducer=(state=initialProductState, action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state
            }
        case ADD_PRODUCTS:
            return{
                products:[...state.products, action.payload],
                totalProduct: state.totalProduct+1
            }
        default:
            return state;
    }
}
const cartReducer=(state=initialCartState, action)=>{
    switch(action.type){
        case GET_CART:
            return{
                ...state
            }
        case ADD_CART:
            return{
                products:[...state.cart, action.payload],
                totalProduct: state.totalProduct+1
            }
        default:
            return state;
    }
}

// combine reducer
const rootReducer= combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// Store
const store= createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

// dispatch
store.dispatch(getProduct());
store.dispatch(addProduct('laptop'));

store.dispatch(getCart());
store.dispatch(addCart('pen'));

