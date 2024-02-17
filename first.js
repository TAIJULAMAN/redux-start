// import Redux from 'redux';
// import { createStore } from 'redux';


// selecting all dom elements
const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
// initial state
const initialState = {
    value: 0,
}

// creating the reducer
function reducer (state=initialState, action) {
    if(action.type==='increment'){
            return {
               ...state,
                value: state.value + 1
            }}

        else if(action.type==='decrement'){
            return {
               ...state,
                value: state.value - 1
            }
        }
           
        else if(action.type==='reset'){
            return {
               ...state,
                value:0
            }
        }
        else{
            return state
        }
    
}
// creating the store
const store = Redux.createStore(reducer);
const render = () => {
    const state = store.getState();
    counter.innerText = state.value.toString();
}
render();
store.subscribe(render)
 

// creating the action
const incrementAction = () => {
    store.dispatch({type: 'increment'})
}
increment.addEventListener('click', incrementAction);

const decrementAction = () => {
    store.dispatch({type: 'decrement'})
}
decrement.addEventListener('click', decrementAction);

const resetAction = () => {
    store.dispatch({type:'reset'})
}
reset.addEventListener('click', resetAction);
