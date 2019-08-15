function createStore(initState) {
    let state = initState;
    let listeners = [];
    function getState() {
        return state
    }
    function subscribe(listener) {
        listeners.push(listener);
        console.log(listener)
    }
    function changeState(newState) {
        state = newState;
        console.log(state,'合并')
        for (const listener of listeners) {
            listener()
        }
    }
    return {
        getState,
        subscribe,
        changeState
    }
}

export default createStore