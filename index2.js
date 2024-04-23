import {createStore} from 'redux'

const GET_USER='GET_USER';
const ADD_USER='ADD_USER';

// initial state
const initialUser={
    user: ['sunny', 'orpi'],
    numOfUser: 2
}

// action type
const getUser=()=>{
    return{
        type: GET_USER
    }
}

const addUser=(user)=>{
    return{
        type: ADD_USER,
        payload: user
    }
}




// create reducer
const userReducer=(state=initialUser, action)=>{
    switch(action.type){
        case GET_USER:
            return{
                ...state,
            }
        case ADD_USER:
            return{
                user: [...state.user, action.payload],
                numOfUser: state.numOfUser+1
            }   
        default:
            state; 
    }
}

// store
const store= createStore(userReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getUser());
store.dispatch(addUser('hafija'));

