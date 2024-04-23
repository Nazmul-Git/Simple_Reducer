// state -> count : 0
// action -> increment, decrement, reset
// reducer
// store



import {createStore} from 'redux'


const INCREMENT='INCREMENT';
const DECCREMENT='DECCREMENT';
const RESET='RESET';
const INCREMENT_BY_VALUE='INCREMENT_BY_VALUE';

// state
const initialCountState={
    count:0,
}

// action - object - type - payload
const incrementCounter=()=>{
    return{
        type: INCREMENT,
    }
}
const decrementCounter=()=>{
    return{
        type: DECCREMENT,
    }
}
const resetCounter=()=>{
    return{
        type:RESET
    }
}

const incrementByValue=(value)=>{
    return{
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

// create reducer
const counterReducer=(state=initialCountState, action)=>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count+1,
            }
        
        case DECCREMENT:
            return {
                ...state,
                count: state.count-1,
            }

        case RESET:
            return{
                ...state,
                count : state.count=0,
            }
        
        case INCREMENT_BY_VALUE:
            return{
                ...state,
                count: state.count + action.payload,
            }
        default:
            state;
    }
}

// create store
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
store.dispatch(incrementCounter()); 
store.dispatch(decrementCounter()); 
store.dispatch(resetCounter()); 
store.dispatch(incrementByValue(5));



/////////////////////////////////////////////////////////////////////

// import { createSlice, configureStore } from '@reduxjs/toolkit'

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0
//   },
//   reducers: {
//     incremented: state => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decremented: state => {
//       state.value -= 1
//     }
//   }
// })

// export const { incremented, decremented } = counterSlice.actions

// const store = configureStore({
//   reducer: counterSlice.reducer
// })

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}