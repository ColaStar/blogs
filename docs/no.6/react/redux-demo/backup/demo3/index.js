import { createStore } from "./redux/index.js";
import counterReduer from "./reducer/counter.js";
import infoReduer from "./reducer/info.js";
// let initState = {
//   counter: {
//     count: 0
//   },
//   info: {
//     name: "",
//     description: ""
//   }
// };
const reducer = combineReducers({
    counter: counterReduer,
    info: infoReduer
});
// let store = createStore(reducer, initState);
let store = createStore(reducer);
console.log("取当前的默认状态", store.getState());
store.subscribe(() => {
    let state = store.getState();
    console.log("获取当前的状态", state);
});

setTimeout(function() {
    store.dispatch({
        type: "INCERMENT"
    });
}, 1000)


setTimeout(function() {
    store.dispatch({
        type: "SET_NAME",
        name: "京程一灯🏮"
    });
}, 2000)