export default function reducer(state, action) {
    switch (action.type) {
        case 'INCERMENT':
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return states;
    }
}