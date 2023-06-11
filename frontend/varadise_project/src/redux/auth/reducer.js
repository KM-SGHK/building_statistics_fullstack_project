const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
    error: null
}

export function authReducer (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS': 
            return {
                ...state,
                isAuthenticated: true,
                token: action.token,
                user: action.user
            }
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: null
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                error: action.error
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
                error: null
            }
        default:
            return state;
    }
}