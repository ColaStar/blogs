let initState = {
    count: 0
  };
  export default function counterReduer(state, action) {
    if(!state){
        state = initState;
    }
    switch (action.type) {
      case "INCERMENT":
        return {
          ...state,
          count: state.count + 1
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1
        };
      default:
        return state;
    }
  }
  