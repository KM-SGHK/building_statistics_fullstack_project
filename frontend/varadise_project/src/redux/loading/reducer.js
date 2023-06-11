const initialState = {
    isLoading: false
}

export function loadingReducer (state = initialState, action) {
    switch (action.type) {
        case 'START_LOADING': 
            return {
                ...state,
                isLoading: true
            }
        case 'STOP_LOADING':
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}