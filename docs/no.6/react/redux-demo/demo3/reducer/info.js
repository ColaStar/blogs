let initState =  {
    name: "京程一灯",
    description: "京程一灯默认描述"
  }
export default function infoReduer(state, action) {
  if(!state){
      state = initState;
  }
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name:action.name
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.description
      };
    default:
      return state;
  }
}
