import {
    createStore
} from './redux/index.js.js';
import reducer from './reducer.js.js';

let initState = {
    count: 0
}

let store = createStore(reducer, initState);

store.subscribe(() => {
    let state = store.getState();
    console.log(state, '获取更新的状态')
})

setInterval(() => {
    store.dispatch({
        type: 'INCERMENT'
    })
}, 1000);