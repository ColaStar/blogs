export default function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    //reducer必然的 state action
    return function combination(state = {}, action) {
        /**生成一个新的state */
        const nextState = {};
        for (let item of reducerKeys) {
            const reducer = reducers[item];
            //上一步的state
            const previousStateForKey = state[item];
            const nextStateForKey = reducer(previousStateForKey, action);
            nextState[item] = nextStateForKey;
          }
          return nextState;
    }
}