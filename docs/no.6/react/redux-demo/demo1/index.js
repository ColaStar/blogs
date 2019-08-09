import { createStore } from './redux/index.js';

let initState = {
    counter: {
        count: 0
    },
    info:{
        name:"",
        description:""
    }
}

let store = createStore(initState);

store.subscribe(()=>{
    let state = store.getState();
    console.log(state,'获取更新的状态')
})

setTimeout(() => {
    store.changeState({
        ...store.getState(),
        info:{
            name:"吕鉴",
            description:"走向...."
        }
    })
}, 3000);