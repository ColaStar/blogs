function createStore(reducer,initState) {
    let state = initState;
    let listeners = [];
    function getState() {
        return state
    }
    function subscribe(listener) {
        listeners.push(listener);
        console.log(listener)
    }
    function dispatch(action) {
        state = reducer(state,action)
        for (const listener of listeners) {
            listener()
        }
    }
    return {
        getState,
        subscribe,
        dispatch
    }
}

export default createStore