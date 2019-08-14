export default function createStore(reducer,initState){
   let state = initState;
   let listeners = [];
   function getState(){
       return state;
   }
   function subscribe(listener){
    listeners.push(listener)
   }
   function dispatch(action){
    reducer(state,action)
    for(let listener of listeners){
        listener()
    }
   }
     //默认合成所有reducer状态
  dispatch({type:Symbol()});
  return {
    getState,
    subscribe,
    dispatch
  }
}