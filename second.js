// dom elements
const counterBtn=document.getElementById('counter');
const incrementBtn =document.getElementById('increment');
const decrementBtn =document.getElementById('decrement');
const resetBtn =document.getElementById('reset');
// action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET ='reset';
// action creators
const increment = (value) => {
return {
    type:INCREMENT,
    payLoad:value
}
}
const decrement = (value) => {
    return {
        type:DECREMENT,
        payLoad:value
    }
    }
    const reset = () => {
        return {
            type:RESET,
            payLoad:10
        }
        }
// initial state
const initialState ={
    value:0
};
// creating the reducer
function reducer (state=initialState,action){
if(action.type===INCREMENT){
    return{
        ...state,
        value:state.value + action.payLoad
    }
}
else if(action.type===DECREMENT){
    return{
        ...state,
        value:state.value - action.payLoad
    }
}
else if(action.type===RESET){
    return{
        ...state,
        value:0
    }
}
else{
    return state
}
}
// creating the store
const store =Redux.createStore(reducer);
const render = ()=>{
    const state = store.getState();
    counter.innerText=state.value.toString();
}
render();
store.subscribe(render);

// add event listener
incrementBtn.addEventListener('click',()=>{
    store.dispatch(increment(10));
})
decrementBtn.addEventListener('click',()=>{
    store.dispatch(decrement(5));
})
resetBtn.addEventListener('click',()=>{
    store.dispatch(reset());
})
